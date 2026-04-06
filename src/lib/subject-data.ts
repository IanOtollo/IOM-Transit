export interface SubjectData {
  title: string;
  category: string;
  categoryHref: string;
  image: string;
  operations: string[];
  access: string[];
  specs: { label: string; value: string }[];
}

export const subjectData: Record<string, SubjectData> = {
  // --- Services ---
  "international-freight": {
    title: "International Freight",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Global multi-modal logistics strategy development",
      "Network optimization across six continents",
      "Standard and heavy-lift international transit"
    ],
    access: [
      "Contact the International Command Center at HQ",
      "Submit a Global Freight Quotation via the IOM Portal",
      "Assign a dedicated Logistics Lead for your corridor"
    ],
    specs: [
      { label: "Corridors", value: "Global / Multi-Mode" },
      { label: "Transit Time", value: "Priority Express" },
      { label: "Visibility", value: "Real-Time Tracking" }
    ]
  },
  "sea-freight": {
    title: "Sea Freight",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b865c322?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Full Container Load (FCL) & Less than Container Load (LCL)",
      "Strategic Maritime Hub Coordination",
      "Ocean Carrier management and contract optimization"
    ],
    access: [
      "Register as a Maritime Client in the IOM Logistics Portal",
      "Request a port-to-port or door-to-door sea freight quote",
      "Book space on major ocean carriers through our hub agents"
    ],
    specs: [
      { label: "Cargo Type", value: "Containers / Bulk" },
      { label: "Transit Hubs", value: "Mombasa / Rotterdam / Dubai" },
      { label: "Protocol", value: "IOM Maritime Standard" }
    ]
  },
  "air-freight": {
    title: "Air Freight",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Time-critical global air transport logistics",
      "Consolidated cargo and charter services",
      "Airport-to-airport or door-to-door delivery"
    ],
    access: [
      "Call the Air Freight Emergency Line for time-sensitive cargo",
      "Register shipment via the IOM Air Priority Portal",
      "Schedule pick-up from production facilities"
    ],
    specs: [
      { label: "Priority", value: "Time-Critical" },
      { label: "Global Network", value: "All Major Airports" },
      { label: "Carrier Class", value: "Tier 1 Partners" }
    ]
  },
  "bulk-road-logistics": {
    title: "Bulk Road Logistics",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1586191582151-f746323bc035?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Pan-Africa heavy-duty road transport",
      "Fleet coordination and real-time movement monitoring",
      "Cross-border customs and road manifest management"
    ],
    access: [
      "Register fleet requirements in the Road Logistics System",
      "Request bulk transit unit allocation",
      "Establish cross-border transit authorizations"
    ],
    specs: [
      { label: "Region", value: "East / Central Africa" },
      { label: "Fleet Base", value: "Scania / Volvo / Mercedes" },
      { label: "Monitoring", value: "GPS / Satellite" }
    ]
  },
  "customs-imports": {
    title: "Customs & Imports",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1554469385994-73893325026b?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Seamless import/export document processing",
      "Regulatory compliance auditing and management",
      "Liaison with customs authorities globally"
    ],
    access: [
      "Contact a Licensed IOM Customs Broker",
      "Upload import documentation to the Secure Customs Portal",
      "Access global tariff and duty calculators"
    ],
    specs: [
      { label: "Licensing", value: "Full Authorization" },
      { label: "Speed", value: "Express Clearance" },
      { label: "Compliance", value: "Global Standard" }
    ]
  },
  "moving-services": {
    title: "Moving Services",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1580674684081-4966270b2ec4?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "White-glove residential and corporate relocation",
      "End-to-end multi-modal move management",
      "High-value artifact and equipment transit"
    ],
    access: [
      "Consult with a Dedicated Move Coordinator",
      "Schedule a Virtual Pre-Move Asset Survey",
      "Request specialized white-glove packing protocols"
    ],
    specs: [
      { label: "Precision", value: "Total Care" },
      { label: "Network", value: "Global Reach" },
      { label: "Security", value: "Asset Lock" }
    ]
  },
  "last-mile-delivery": {
    title: "Last Mile Delivery",
    category: "Services",
    categoryHref: "/services",
    image: "https://images.unsplash.com/photo-1627961224213-9097e3f8ec4e?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Precision final-leg logistics and routing",
      "Real-time POD (Proof of Delivery) digital confirmation",
      "High-performance urban distribution networks"
    ],
    access: [
      "Register as a Corporate Last-Mile Partner",
      "Request dedicated regional distribution capacity",
      "Access real-time urban delivery metrics"
    ],
    specs: [
      { label: "Accuracy", value: "99.9% Finality" },
      { label: "Network", value: "National Hubs" },
      { label: "Visibility", value: "Per-Minute" }
    ]
  },
  // --- Solutions ---
  "global-operations": {
    title: "Global Operations",
    category: "Solutions",
    categoryHref: "/solutions",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Global Command Center monitoring of all assets",
      "International corridor strategic planning",
      "Strategic logistics partnership management"
    ],
    access: [
      "Consult with the Global Operations Lead",
      "Access global corridor health reports",
      "Review international transit agreements"
    ],
    specs: [
      { label: "Scale", value: "Worldwide Reach" },
      { label: "Visibility", value: "Total Command" },
      { label: "Status", value: "24/7 Operations" }
    ]
  },
  "national-network": {
    title: "National Network",
    category: "Solutions",
    categoryHref: "/solutions",
    image: "https://images.unsplash.com/photo-1558449028-s541c896503b?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Pan-Kenya logistics network management",
      "Regional hub and distribution coordination",
      "Last-mile national delivery optimization"
    ],
    access: [
      "Request national transit unit allocation",
      "Schedule regional distribution hubs",
      "Access domestic manifest tracking"
    ],
    specs: [
      { label: "Coverage", value: "Full National Network" },
      { label: "Hubs", value: "Mombasa / Nairobi / Kisumu" },
      { label: "Connectivity", value: "All Major Counties" }
    ]
  },
  "corporate-logistics": {
    title: "Corporate Logistics",
    category: "Solutions",
    categoryHref: "/solutions",
    image: "https://images.unsplash.com/photo-1454165833267-028bbfa41d06?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Bespoke enterprise supply chain strategy",
      "Dedicated corporate fleet and hub allocation",
      "Integrated ERP logistics synchronization"
    ],
    access: [
      "Consult with our Corporate Logistics Architect",
      "Analyze enterprise supply chain efficiency",
      "Request a dedicated logistics lead for your corporation"
    ],
    specs: [
      { label: "Client Class", value: "Enterprise" },
      { label: "Integration", value: "API / ERP" },
      { label: "Efficiency", value: "Cost-Leader" }
    ]
  },
  "government-contracts": {
    title: "Government Contracts",
    category: "Solutions",
    categoryHref: "/solutions",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "High-security strategic material movement",
      "Diplomatic and government aid logistics",
      "Transparent multi-agency compliance transit"
    ],
    access: [
      "Verify ministerial level transit authorizations",
      "Connect with our Government Liaison Office",
      "Monitor strategic aid corridor health"
    ],
    specs: [
      { label: "Security", value: "Absolute Protocol" },
      { label: "Sectors", value: "Aid / Infrastructure" },
      { label: "Priority", value: "National Scale" }
    ]
  },
  // --- Fleet ---
  "scania": {
    title: "Scania Fleet Authority",
    category: "Fleet",
    categoryHref: "#fleet",
    image: "https://images.unsplash.com/photo-1591768793355-74d7c805a417?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "R-Series flagship heavy-duty unit maintenance",
      "Fuel-efficient long-haul transit protocols",
      "Advanced fleet telematics integration"
    ],
    access: [
      "View unit availability in the Fleet Dashboard",
      "Request dedicated Scania unit allocation for long-term cargo",
      "Access real-time fuel and performance metrics"
    ],
    specs: [
      { label: "Lead Unit", value: "Scania R500" },
      { label: "Payload Max", value: "45,000 KG" },
      { label: "Reliability", value: "Pan-Africa Certified" }
    ]
  },
  "volvo": {
    title: "Volvo Heavy-Duty Fleet",
    category: "Fleet",
    categoryHref: "#fleet",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "FH16 heavy-duty transport operations",
      "I-Shift transmission optimization for terrain",
      "Safety-first driver training and monitoring"
    ],
    access: [
      "Schedule heavy-duty Volvo units for specialized cargo",
      "Request Volvo FH-series transit capacity",
      "Monitor unit telemetry in the IOM Fleet Portal"
    ],
    specs: [
      { label: "Lead Unit", value: "Volvo FH16" },
      { label: "Payload Max", value: "55,000 KG" },
      { label: "Saftey", value: "Tier 1 Safety Systems" }
    ]
  },
  "mercedes": {
    title: "Mercedes Precision Fleet",
    category: "Fleet",
    categoryHref: "#fleet",
    image: "https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Actros Gen 5 precision logistics units",
      "Urban and regional freight optimizations",
      "Predictive maintenance and unit cycling"
    ],
    access: [
      "Request Mercedes Actros allocation for regional transit",
      "Integrate unit tracking with corporate supply chains",
      "Schedule urban last-mile Mercedes capacity"
    ],
    specs: [
      { label: "Lead Unit", value: "Mercedes Actros 2645" },
      { label: "Payload Max", value: "40,000 KG" },
      { label: "Tech", value: "Advanced ABA 5" }
    ]
  },
  // --- About ---
  "who-we-are": {
    title: "Who We Are",
    category: "About",
    categoryHref: "/about",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Strategic logistics leadership across 45+ African trade corridors",
      "Pioneering digital-first supply chain transparency",
      "Unlocking the economic potential of multi-modal transit"
    ],
    access: [
      "Review our Annual Strategic Impact Report",
      "Consult the Global Logistics Compliance Charter",
      "Assess our pan-African infrastructure footprint"
    ],
    specs: [
      { label: "Founded", value: "Strategic Hub" },
      { label: "Scale", value: "Pan-Africa" },
      { label: "Focus", value: "Global Standard" }
    ]
  },
  "leadership": {
    title: "Leadership & Vision",
    category: "About",
    categoryHref: "/about",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Executive strategy led by CEO Ian Otollo Marabi",
      "Board-level logistics governance and compliance",
      "Strategic partnership development with global carriers"
    ],
    access: [
      "Review the CEO's Quarterly Visionary Statement",
      "Access the Executive Board's Strategy Roadmap",
      "Schedule a Strategic Partnership Consultation"
    ],
    specs: [
      { label: "CEO", value: "Ian Otollo Marabi" },
      { label: "Leadership", value: "Strategic Board" },
      { label: "Protocol", value: "Absolute Authority" }
    ]
  },
  "our-team": {
    title: "Our Team",
    category: "About",
    categoryHref: "/about",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "250+ Certified Logistics Specialists in Nairobi Hub",
      "Expert Customs Brokers and Port Ops Experts",
      "Dedicated Client Success Leads for major accounts"
    ],
    access: [
      "Access the Departmental Contact Directory",
      "Consult with our Port Operations Liaison Team",
      "Engage with our dedicated Project Logistics Leads"
    ],
    specs: [
      { label: "Certifications", value: "IATA / ISO / CSCP" },
      { label: "Specialists", value: "250+ Experts" },
      { label: "Deployment", value: "Nairobi / Mombasa" }
    ]
  },
  "careers": {
    title: "Careers & Impact",
    category: "About",
    categoryHref: "/about",
    image: "https://images.unsplash.com/photo-1521791246048-b9a804473dde?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "Shaping the next generation of logistics leadership",
      "High-performance culture with global mobility",
      "Continuous professional training in port and fleet ops"
    ],
    access: [
      "Browse the IOM Careers & Talent Portal",
      "Submit an Expression of Interest for Strategic Roles",
      "Apply for the Graduate Logistics Leadership Path"
    ],
    specs: [
      { label: "Hiring Status", value: "Actively Recruiting" },
      { label: "Roles", value: "Strategic / Ops / Tech" },
      { label: "Culture", value: "Meritocratic / Global" }
    ]
  },
  "warehousing": {
    title: "Warehouse Infrastructure",
    category: "Infrastructure",
    categoryHref: "/#warehousing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    operations: [
      "High-density automated storage coordination",
      "Cold-chain and bonded facility management",
      "Inventory optimization and visibility services"
    ],
    access: [
      "Request warehouse space in the Storage Portal",
      "Schedule inventory audit at bonded facilities",
      "Book cold-chain storage capacity"
    ],
    specs: [
      { label: "Capacity", value: "480k Sq Ft" },
      { label: "Certification", value: "Licensed Bonded" },
      { label: "Security", value: "24/7 Monitoring" }
    ]
  }
};
