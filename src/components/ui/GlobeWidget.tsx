"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const NAIROBI = { lat: -1.2921, lng: 36.8219 };
const MOMBASA = { lat: -4.0435, lng: 39.6682 };
const DUBAI = { lat: 25.2048, lng: 55.2708 };
const ROTTERDAM = { lat: 51.9225, lng: 4.47917 };
const SHANGHAI = { lat: 31.2304, lng: 121.4737 };
const LONDON = { lat: 51.5074, lng: -0.1278 };
const KAMPALA = { lat: 0.3476, lng: 32.5825 };
const DAR = { lat: -6.7924, lng: 39.2083 };
const JUBA = { lat: 4.8594, lng: 31.5713 };
const JOHANNESBURG = { lat: -26.2041, lng: 28.0473 };

const arcsData = [
  { startLat: NAIROBI.lat, startLng: NAIROBI.lng, endLat: MOMBASA.lat, endLng: MOMBASA.lng },
  { startLat: MOMBASA.lat, startLng: MOMBASA.lng, endLat: DUBAI.lat, endLng: DUBAI.lng },
  { startLat: MOMBASA.lat, startLng: MOMBASA.lng, endLat: ROTTERDAM.lat, endLng: ROTTERDAM.lng },
  { startLat: MOMBASA.lat, startLng: MOMBASA.lng, endLat: SHANGHAI.lat, endLng: SHANGHAI.lng },
  { startLat: LONDON.lat, startLng: LONDON.lng, endLat: NAIROBI.lat, endLng: NAIROBI.lng },
  { startLat: NAIROBI.lat, startLng: NAIROBI.lng, endLat: KAMPALA.lat, endLng: KAMPALA.lng },
  { startLat: NAIROBI.lat, startLng: NAIROBI.lng, endLat: DAR.lat, endLng: DAR.lng },
  { startLat: NAIROBI.lat, startLng: NAIROBI.lng, endLat: JUBA.lat, endLng: JUBA.lng },
  { startLat: JOHANNESBURG.lat, startLng: JOHANNESBURG.lng, endLat: NAIROBI.lat, endLng: NAIROBI.lng },
].map(arc => ({
  ...arc,
  color: ['#c9a84c', '#8a9bb5'] // Gold to muted
}));

export default function GlobeWidget() {
  const [windowWidth, setWindowWidth] = useState(600);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    // Set width correctly on mount and resize
    const handleResize = () => {
      const container = document.getElementById('globe-container');
      if (container) {
        setWindowWidth(container.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGlobeReady = () => {
    const controls = globeRef.current?.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 7; // Reduced as requested for better visibility
      controls.enableZoom = false;
      controls.enableRotate = false; // Disable manual drag rotation
    }
    globeRef.current?.pointOfView({ lat: -1.2921, lng: 36.8219, altitude: 2.2 }); // Point to Nairobi/East Africa
  };

  return (
    <div id="globe-container" className="w-full h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      <Globe
        ref={globeRef}
        onGlobeReady={handleGlobeReady}
        width={windowWidth}
        height={typeof window !== 'undefined' && window.innerWidth >= 1024 ? 600 : 400}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcsTransitionDuration={0}
      />
    </div>
  );
}
