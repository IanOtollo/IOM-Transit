"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { motion } from "framer-motion";

const hubs = [
  { name: "Nairobi HQ", lat: -1.2921, lng: 36.8219, color: "#c9a84c" },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, color: "#ffffff" },
  { name: "London", lat: 51.5074, lng: -0.1278, color: "#ffffff" },
  { name: "Johanesburg", lat: -26.2041, lng: 28.0473, color: "#ffffff" },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, color: "#ffffff" },
  { name: "Rotterdam", lat: 51.9225, lng: 4.4791, color: "#ffffff" },
];

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 1.0; // Increased feel
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5; // High speed as requested
    controls.enabled = true;

    // --- Globe with Glowing Texture ---
    const globeRadius = Math.min(width, 1000) * 0.2;
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg");
    
    const geometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0a1628,
      emissive: 0xc9a84c,
      emissiveMap: earthMap,
      emissiveIntensity: 3.5,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 1,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // --- Atmospheric Glow ---
    const glowGeom = new THREE.SphereGeometry(globeRadius * 1.05, 64, 64);
    const glowMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        glowColor: { value: new THREE.Color(0xc9a84c) },
        viewVector: { value: camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
          intensity = pow( 0.7 - dot(actual_normal, normalize(viewVector)), 2.0 );
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          gl_FragColor = vec4( glowColor, intensity );
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const globeGlow = new THREE.Mesh(glowGeom, glowMat);
    scene.add(globeGlow);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xffffff, 2, 1000);
    mainLight.position.set(300, 300, 300);
    scene.add(mainLight);

    // --- Hubs & Routes ---
    const nairobi = hubs[0];
    const nairobiLatRad = nairobi.lat * (Math.PI / 180);
    const nairobiLonRad = -nairobi.lng * (Math.PI / 180);
    const nairobiPos = new THREE.Vector3(
        globeRadius * Math.cos(nairobiLatRad) * Math.cos(nairobiLonRad),
        globeRadius * Math.sin(nairobiLatRad),
        globeRadius * Math.cos(nairobiLatRad) * Math.sin(nairobiLonRad)
    );

    const pulses: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; speed: number; progress: number }[] = [];

    hubs.forEach((hub, i) => {
        const latRad = hub.lat * (Math.PI / 180);
        const lonRad = -hub.lng * (Math.PI / 180);
        
        const x = globeRadius * Math.cos(latRad) * Math.cos(lonRad);
        const y = globeRadius * Math.sin(latRad);
        const z = globeRadius * Math.cos(latRad) * Math.sin(lonRad);
        const hubPos = new THREE.Vector3(x, y, z);
        
        const hubGeom = new THREE.SphereGeometry(i === 0 ? 3 : 2, 16, 16);
        const hubMat = new THREE.MeshBasicMaterial({ color: hub.color });
        const hubMesh = new THREE.Mesh(hubGeom, hubMat);
        hubMesh.position.set(x, y, z);
        globe.add(hubMesh);

        // Arcs (from Nairobi to others)
        if (i > 0) {
            const midPoint = new THREE.Vector3().addVectors(nairobiPos, hubPos).multiplyScalar(0.5);
            const distance = nairobiPos.distanceTo(hubPos);
            midPoint.normalize().multiplyScalar(globeRadius + (distance * 0.4));

            const curve = new THREE.QuadraticBezierCurve3(nairobiPos, midPoint, hubPos);
            const points = curve.getPoints(50);
            const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.3 });
            const line = new THREE.Line(lineGeom, lineMat);
            globe.add(line);

            // Shooting Arrow (Streak)
            for (let j = 0; j < 3; j++) {
                const pulseGeom = new THREE.SphereGeometry(1, 8, 8);
                const pulseMat = new THREE.MeshBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.8 });
                const pulseMesh = new THREE.Mesh(pulseGeom, pulseMat);
                globe.add(pulseMesh);

                pulses.push({
                    mesh: pulseMesh,
                    curve: curve,
                    speed: 0.001 + (Math.random() * 0.002),
                    progress: Math.random()
                });
            }
        }
    });

    // --- Stars ---
    const starsVertices = [];
    for (let i = 0; i < 2000; i++) {
        starsVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
    }
    const starsGeom = new THREE.BufferGeometry();
    starsGeom.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1, transparent: true, opacity: 0.5 });
    const stars = new THREE.Points(starsGeom, starsMat);
    scene.add(stars);

    // --- Animation ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      stars.rotation.y += 0.0001;

      pulses.forEach(p => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        const pos = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(pos);
        
        // Dynamic scale and glow
        const scale = Math.sin(p.progress * Math.PI) * 4;
        p.mesh.scale.setScalar(scale);
        
        // Pulse glow animation
        if (p.mesh.material instanceof THREE.MeshBasicMaterial) {
          p.mesh.material.opacity = Math.sin(p.progress * Math.PI) * 1.5;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative cursor-move">
        <div ref={containerRef} className="w-full h-full" />
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block pointer-events-none">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-navy-dark/90 backdrop-blur-xl border border-white/5 p-8 max-w-sm shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold/50" />
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase">Strategic Trade Routes</span>
                </div>
                <h3 className="font-heading text-4xl mb-4 leading-none lowercase">Global Connectivity</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
                    Visualizing the live corridor flow from our Nairobi command center to the world's dominant trade gateways.
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                    {hubs.slice(0, 6).map(h => (
                        <div key={h.name} className="flex flex-col border-l border-white/5 pl-3">
                            <span className="text-white text-[11px] font-bold tracking-tight">{h.name}</span>
                            <span className="text-gold text-[9px] uppercase font-black tracking-widest opacity-60">Status: Active</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
  );
}
