/**
 * NEXO AI - Project Showcase Ground-Truth Data
 * All names, roles, mentor titles, hardware specifications, and implementation statuses
 * are strictly preserved according to official project records.
 */

export const BRAND = {
  name: "NEXO AI",
  tagline: "Multilingual Cooperative AI Assistant",
  statement: "From Fragmented Information to Guided Action.",
  description:
    "NEXO AI brings verified cooperative, government scheme, agricultural and legal information into one multilingual AI-powered assistance platform.",
  institution: "Rathinam Technical Campus",
  event: "Smart India Hackathon 2026 (SIH 2026) / Innotrix",
  badge: "Verified SIH 2026 Innovation Platform"
};

export const getAssetUrl = (path) => {
  const base = import.meta.env?.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  return `${base.endsWith('/') ? base : base + '/'}${clean}`;
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Architecture", href: "#architecture" },
  { name: "Data Platform", href: "#data-platform" },
  { name: "Kiosk", href: "#kiosk" },
  { name: "Hardware", href: "#hardware" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "Mentors", href: "#mentors" }
];

export const WORKFLOW_HERO_STEPS = [
  { step: "ASK", label: "Ask Query", desc: "Multilingual voice or text input" },
  { step: "CHECK", label: "Verify Integrity", desc: "Live validation against official registry" },
  { step: "DISCOVER", label: "Find Schemes", desc: "Contextual matching of eligible benefits" },
  { step: "RETRIEVE", label: "Fetch Evidence", desc: "Grounded RAG & Knowledge Graph extraction" },
  { step: "APPLY", label: "Guided Action", desc: "Step-by-step document readiness assistance" },
  { step: "TRACK", label: "Follow Up", desc: "Application monitoring & grievance status" }
];

export const PROBLEMS = [
  {
    id: "frag-info",
    number: "01",
    title: "Fragmented Information",
    description:
      "Government schemes and cooperative information are spread across multiple portals and sources.",
    impact: "Users miss critical welfare deadlines and entitlements due to siloed websites."
  },
  {
    id: "lang-barriers",
    number: "02",
    title: "Language & Digital Barriers",
    description:
      "Complex digital processes and language barriers make access difficult for rural users.",
    impact: "Official terminology in complex English or formal Hindi alienates local-dialect speakers."
  },
  {
    id: "readiness-gaps",
    number: "03",
    title: "Application Readiness Gaps",
    description:
      "Users may discover missing or incomplete documents only after reaching a service point.",
    impact: "Lack of pre-application checks results in rejected submissions and wasted travel time."
  },
  {
    id: "doc-friction",
    number: "04",
    title: "Document Access Friction",
    description:
      "Missing documents can force users to leave the service point and return again.",
    impact: "Multiple visits to taluk offices or PACS branches cost days of agricultural wages."
  },
  {
    id: "connectivity",
    number: "05",
    title: "Connectivity Constraints",
    description:
      "Unreliable connectivity makes online-only services difficult to access.",
    impact: "Remote rural cooperative societies frequently experience network dropouts and slow bandwith."
  },
  {
    id: "limited-discovery",
    number: "06",
    title: "Limited Need Discovery",
    description:
      "Users may ask about one service without knowing other potentially relevant support.",
    impact: "Fulfilling one query leaves related crop insurance, subsidies, or loan waivers unaddressed."
  }
];

export const SOLUTION_STEPS = [
  { step: "01", action: "ASK", title: "Multilingual Input", desc: "User asks in native voice or text across Tamil, English, Hindi, or regional languages." },
  { step: "02", action: "UNDERSTAND", title: "Intent & Entity Parsing", desc: "Extracts underlying farmer context, landholding, crop type, and cooperative intent." },
  { step: "03", action: "CHECK", title: "Source Verification", desc: "Matches request against official allowlist and verified government portals." },
  { step: "04", action: "DISCOVER", title: "Contextual Discovery", desc: "Discovers primary schemes plus interconnected agricultural and financial benefits." },
  { step: "05", action: "RETRIEVE", title: "Hybrid Knowledge Fetch", desc: "Fuses vector search (RAG) with entity relationships in the Knowledge Graph." },
  { step: "06", action: "PRINT", title: "Checklist Generation", desc: "Generates a localized physical paper slip via thermal printer for offline proof." },
  { step: "07", action: "APPLY", title: "Guided Service Access", desc: "Guides the citizen through mandatory eligibility rules and document uploads." },
  { step: "08", action: "TRACK", title: "Lifecycle Monitoring", desc: "Provides tracking references and grievance escalation routes for follow-ups." }
];

export const INNOVATIONS = [
  {
    id: "gov-intel",
    title: "Verified & Official Government Intelligence",
    description: "Uses trusted official sources and controlled knowledge collection.",
    details: "Prevents hallucinations by restricting facts to audited ministry portals, official gazettes, and verified PACS guidelines.",
    status: "IMPLEMENTED",
    statusColor: "emerald"
  },
  {
    id: "rag-kg",
    title: "RAG + Knowledge Graph Intelligence",
    description: "Combines document-based retrieval with relationship-aware knowledge.",
    details: "FAISS vector retrieval extracts deep contextual paragraphs while Neo4j graph traversal navigates relationships between schemes, crops, and land tenure rules.",
    status: "IN DEVELOPMENT",
    statusColor: "amber"
  },
  {
    id: "query-routing",
    title: "Dynamic Query Routing",
    description: "Routes queries to the appropriate knowledge/retrieval/data path.",
    details: "Intelligently directs inquiries to static scheme documents, live government API endpoints, or grievance status databases.",
    status: "IN DEVELOPMENT",
    statusColor: "amber"
  },
  {
    id: "hybrid-kiosk",
    title: "Hybrid Online + Offline Kiosk",
    description: "Designed for assisted rural access with future offline capability.",
    details: "Edge hardware operates with pre-synced local vector stores during outages and automatically reconciles via cryptographic SHA-256 hashes when online.",
    status: "PROPOSED",
    statusColor: "cyan"
  },
  {
    id: "voice-ai",
    title: "Multilingual Voice AI",
    description: "Designed for users who prefer local-language and voice interaction.",
    details: "Built to integrate BHASHINI speech recognition and text-to-speech for rural dialects with phonetic error tolerance.",
    status: "IN DEVELOPMENT",
    statusColor: "amber"
  }
];

export const ARCHITECTURE_NODES = [
  { id: "user", label: "USER", layer: "Access", desc: "Citizen, Farmer, or PACS Member interacting via Kiosk, Web, or Mobile" },
  { id: "input", label: "Text / Voice Input", layer: "Input", desc: "Microphone audio or touch keyboard input" },
  { id: "lang-detect", label: "Language Detection", layer: "Processing", desc: "Auto-detects language: Tamil, English, Hindi, and regional dialects" },
  { id: "query-understanding", label: "Query Understanding", layer: "Processing", desc: "Intent extraction, entity recognition, and semantic normalization" },
  { id: "query-router", label: "Dynamic Query Router", layer: "Routing", desc: "Routes query based on latency, complexity, and live data needs" },
  { id: "rag-retrieval", label: "RAG Retrieval", layer: "Knowledge", desc: "Sentence Transformers + FAISS vector search across verified documents" },
  { id: "knowledge-graph", label: "Knowledge Graph", layer: "Knowledge", desc: "Neo4j entities & relationships linking crops, subsidies, and eligibility" },
  { id: "auth-apis", label: "Authorized APIs", layer: "Knowledge", desc: "Live integration with official ministerial and cooperative databases" },
  { id: "context-fusion", label: "Context Fusion", layer: "Synthesis", desc: "Harmonizes vector chunks with graph entities and live API responses" },
  { id: "evidence-confidence", label: "Evidence / Confidence", layer: "Validation", desc: "Grounding verification to ensure zero unreferenced claims" },
  { id: "llm", label: "LLM (Inference)", layer: "Generation", desc: "Groq LLaMA / Quantized on-device model constrained to grounded context" },
  { id: "multilingual-response", label: "Multilingual Response", layer: "Output", desc: "Translates and synthesizes verified answer in citizen's chosen language" },
  { id: "output", label: "Text / Voice Output", layer: "Output", desc: "Screen text, synthesized natural speech, and physical thermal slip printout" }
];

export const DATA_PLATFORM_PIPELINE = [
  { step: 1, name: "OFFICIAL SOURCES", desc: "Government portals, Ministry of Agriculture, State portals, Cooperative databases" },
  { step: 2, name: "SOURCE VERIFICATION", desc: "Allowlist verification, domain authentication, and cryptographic certificate checks" },
  { step: 3, name: "DOCUMENT DISCOVERY", desc: "Targeted automated web crawlers and notification scrapers detecting new notifications" },
  { step: 4, name: "DATA COLLECTION", desc: "Automated Python scheduled collector executing batch ingestion tasks" },
  { step: 5, name: "INTEGRITY CHECK", desc: "SHA-256 hash generation, ETag inspection, and duplicate avoidance" },
  { step: 6, name: "ORIGINAL DOCUMENT STORAGE", desc: "Tamper-evident raw PDF, DOCX, HTML, CSV, JSON, XML storage in Supabase" },
  { step: 7, name: "TEXT EXTRACTION", desc: "PyMuPDF high-fidelity text scraping and Tesseract OCR for scanned government notices" },
  { step: 8, name: "CLEANING & NORMALIZATION", desc: "Noise removal, header/footer stripping, structural JSON formatting, and hashing" },
  { step: 9, name: "QUALITY VALIDATION", desc: "Metadata versioning, schema verification, and completeness checking" },
  { step: 10, name: "PROCESSED DATA", desc: "Clean normalized text corpus stored with complete audit lineage" },
  { step: 11, name: "RAG KNOWLEDGE BASE", desc: "Sentence Transformers chunking with overlapping windows into FAISS vector space" },
  { step: 12, name: "KNOWLEDGE GRAPH", desc: "Entity-relation extraction populated into Neo4j graph schema" }
];

export const DATA_PLATFORM_CAPABILITIES = [
  { title: "Official Source Registry", desc: "Whitelisted government websites and verified ministry portals." },
  { title: "Automated Document Collection", desc: "Python-driven scheduled ingestion with change detection." },
  { title: "Supabase Secure Storage", desc: "Separation of raw uncompressed archives from processed datasets." },
  { title: "Multi-Format Document Processing", desc: "Comprehensive handling of PDF, DOCX, HTML, CSV, JSON, and XML." },
  { title: "Source Verification & Audit", desc: "Cryptographic SHA-256 hashing preserving legal lineage." },
  { title: "Raw & Processed Data Handling", desc: "Dual-tier isolation keeping immutable source files pristine." },
  { title: "Metadata Management", desc: "Versioning, issue dates, issuing departments, and scheme codes." }
];

export const HARDWARE_ITEMS = [
  {
    id: "compute",
    name: "Raspberry Pi / Edge Computer",
    role: "Central Compute & Local Inference Engine",
    category: "COMPUTE",
    image: getAssetUrl("/assets/hardware/rospbeery.jpg"),
    description: "Drives the kiosk OS, orchestrates peripheral devices, runs local microservices, and hosts offline vector cache."
  },
  {
    id: "display",
    name: "Touch Display",
    role: "Citizen Interactive Interface",
    category: "USER INTERFACE",
    image: getAssetUrl("/assets/hardware/disply.jpg"),
    description: "Large, high-contrast touchscreen optimized for outdoor ambient lighting and intuitive touch navigation."
  },
  {
    id: "camera",
    name: "Document & Identity Camera",
    role: "Physical Document Scanning & Verification",
    category: "USER INTERFACE",
    image: getAssetUrl("/assets/hardware/camera.jpg"),
    description: "Captures land records, Aadhaar cards, or passbooks for on-device OCR and document readiness validation."
  },
  {
    id: "mic",
    name: "High-Sensitivity Microphone",
    role: "Multilingual Voice Input",
    category: "USER INTERFACE",
    image: getAssetUrl("/assets/hardware/mic.jpg"),
    description: "Directional microphone with ambient noise cancellation to clearly record rural dialect queries in busy cooperative halls."
  },
  {
    id: "speaker",
    name: "Loud Audio Speaker",
    role: "Voice Response & Accessibility TTS",
    category: "USER INTERFACE",
    image: getAssetUrl("/assets/hardware/speake.jpg"),
    description: "Ensures elderly and non-literate citizens can listen to audible guidance in their mother tongue with clarity."
  },
  {
    id: "connectivity",
    name: "Wi-Fi / 4G Connectivity Module",
    role: "Cloud Sync & API Access",
    category: "CONNECTIVITY",
    image: getAssetUrl("/assets/hardware/wifi.jpg"),
    description: "Industrial 4G/LTE cellular modem with fallback Wi-Fi antenna to maintain sync with cloud Supabase and government portals."
  },
  {
    id: "printer",
    name: "Thermal Receipt Printer",
    role: "Document Checklist & Token Dispatch",
    category: "DOCUMENT SERVICE",
    image: getAssetUrl("/assets/hardware/images.jpg"),
    description: "Instantly prints tangible physical slips containing required document checklists, eligibility summaries, and tracking barcodes."
  },
  {
    id: "power",
    name: "UPS / Power Backup System",
    role: "Uninterruptible Power Supply",
    category: "POWER",
    image: getAssetUrl("/assets/hardware/battery.jpg"),
    description: "Guarantees continuous uptime during rural voltage fluctuations and periodic local load-shedding."
  },
  {
    id: "storage",
    name: "High-Speed SSD / SD Card Storage",
    role: "Internal Storage & Offline Knowledge Repository",
    category: "STORAGE",
    image: getAssetUrl("/assets/hardware/sd.jpg"),
    description: "High-endurance flash storage containing cached scheme documents, offline linguistic dictionaries, and vector stores."
  }
];

export const USE_CASES = [
  {
    id: "farmers",
    target: "FARMERS",
    headline: "Agricultural Welfare & Risk Protection",
    icon: "Sprout",
    examples: [
      "PMFBY crop insurance cutoff dates, premium subsidy rates, and claim procedures",
      "Kisan Credit Card (KCC) interest subvention rules and credit limits",
      "Subsidized seed, fertilizer, and micro-irrigation equipment schemes",
      "Disaster relief compensation documentation guidance",
      "Clear eligibility evaluation based on crop type and landholding size"
    ]
  },
  {
    id: "pacs-members",
    target: "PACS MEMBERS",
    headline: "Primary Agricultural Credit Societies",
    icon: "Building2",
    examples: [
      "Primary Agricultural Cooperative Society loan application procedures",
      "Cooperative credit share capital and dividend rights information",
      "Cold storage and warehouse receipt financing requirements",
      "List of mandatory documents before visiting the PACS branch",
      "Step-by-step assistance for new member enrollment"
    ]
  },
  {
    id: "rural-citizens",
    target: "RURAL CITIZENS",
    headline: "Universal Government Scheme Accessibility",
    icon: "Users",
    examples: [
      "Central and State social security pension eligibility checks",
      "Rural housing (PMAY-G) and sanitation subsidy requirements",
      "Mother tongue voice interaction without needing to type or read complex portals",
      "Direct guidance for ration card, caste, and income certificate processes",
      "Eliminating multiple journeys to district headquarters"
    ]
  },
  {
    id: "cooperative-staff",
    target: "COOPERATIVE STAFF",
    headline: "Empowering Rural Service Officers",
    icon: "Briefcase",
    examples: [
      "Instant lookup of revised government circulars and scheme notifications",
      "Standardized, officially grounded answers to complex regulatory queries",
      "Dramatic reduction in repetitive counter queries regarding document lists",
      "Assisting more citizens per day with higher satisfaction and verified accuracy"
    ]
  }
];

export const APPLICATION_ROADMAP_STEPS = [
  { number: "01", title: "SELECT SERVICE", desc: "Citizen selects or speaks the desired welfare program or cooperative service." },
  { number: "02", title: "CHECK ELIGIBILITY", desc: "AI dynamically checks citizen parameters against official ministry eligibility criteria." },
  { number: "03", title: "CHECK DOCUMENTS", desc: "Interactive checklist verifies Aadhaar, land patta, bank passbook, and photo readiness." },
  { number: "04", title: "GUIDED APPLICATION", desc: "Step-by-step conversational form assistance to avoid clerical errors." },
  { number: "05", title: "REVIEW", desc: "Summarized preview displayed and read out aloud in the citizen's native language." },
  { number: "06", title: "SUBMIT", desc: "Secure dispatch to authorized government portal or cooperative backend." },
  { number: "07", title: "TRACK", desc: "Unique acknowledgement token generated with SMS and printed tracking slip." }
];

export const TEAM_MEMBERS = [
  {
    name: "Akshaya Kumaran P",
    role: "Team Leader & Cloud Solution Architect",
    image: getAssetUrl("/assets/team/akshaya-kumaran.png"),
    focus: "Cloud infrastructure, system architecture, Supabase backend orchestration, and team coordination."
  },
  {
    name: "Rathnadeepa V M",
    role: "OCR Developer",
    image: getAssetUrl("/assets/team/rathnadeepa.png"),
    focus: "PyMuPDF document extraction, Tesseract OCR for multilingual scanned government notices."
  },
  {
    name: "Deepiga M",
    role: "AI / NLP Developer",
    image: getAssetUrl("/assets/team/deepiga.png"),
    focus: "Natural language understanding, query intent classification, and linguistic tokenization."
  },
  {
    name: "Hari Prasath J",
    role: "Frontend Developer",
    image: getAssetUrl("/assets/team/hari-prasath.png"),
    focus: "Responsive enterprise UI, accessible touch interface, and multilingual user experience design."
  },
  {
    name: "Madhan R",
    role: "AI & RAG Architect",
    image: getAssetUrl("/assets/team/madhan.png"),
    focus: "RAG pipeline, Sentence Transformers, FAISS vector indexing, and Neo4j Knowledge Graph integration."
  },
  {
    name: "Hariharan S",
    role: "Backend Developer",
    image: getAssetUrl("/assets/team/hariharan.png"),
    focus: "FastAPI microservices, source crawlers, API routing, and data integrity verification."
  }
];

export const MENTORS = [
  {
    name: "Muthusamy",
    role: "Head – Technical Competitions and Hackathons",
    institution: "Rathinam Technical Campus",
    image: getAssetUrl("/assets/mentors/muthusamy.png"),
    description: "Guidance on technical strategy, innovation architecture, competition readiness, and engineering execution."
  },
  {
    name: "Gajendran Parthasarathi",
    role: "Head – School of Design and Innovation",
    institution: "Rathinam Technical Campus",
    image: getAssetUrl("/assets/mentors/gajendran.png"),
    description: "Product design mentorship, user-centric human-machine interaction, and rural accessibility principles."
  }
];

export const PROJECT_TIMELINE = [
  { phase: "Phase 1", title: "IDEA", date: "Initial Inception", desc: "Conceived the vision to bridge rural cooperative information silos with AI." },
  { phase: "Phase 2", title: "PROBLEM RESEARCH", date: "Field Study", desc: "Analyzed rural citizen bottlenecks at PACS societies and taluk centers." },
  { phase: "Phase 3", title: "DATA PLATFORM", date: "Current Foundation", desc: "Built official source registry, crawlers, Supabase storage, and OCR extraction." },
  { phase: "Phase 4", title: "AI / RAG DEVELOPMENT", date: "Active Development", desc: "Implemented vector embeddings with Sentence Transformers, FAISS, and Knowledge Graph." },
  { phase: "Phase 5", title: "KIOSK CONCEPT", date: "Hardware Architecture", desc: "Designed physical chassis with touch display, thermal printer, mic, and edge compute." },
  { phase: "Phase 6", title: "INTEGRATION", date: "Hardware-Software", desc: "Integrated frontend touch UI with backend FastAPI and peripheral drivers." },
  { phase: "Phase 7", title: "PROTOTYPE", date: "Testing & Validation", desc: "Benchmarked working software interface on real agricultural scheme datasets." },
  { phase: "Phase 8", title: "FUTURE SCALE", date: "Proposed Vision", desc: "Deployment across cooperative societies with full offline edge AI and BHASHINI voice." }
];

export const IMPACT_METRICS = [
  {
    dimension: "ACCESS",
    title: "Verified Information Access",
    desc: "Single point of truth pulling directly from verified government gazettes and ministry portals, removing reliance on hearsay."
  },
  {
    dimension: "INCLUSION",
    title: "Multilingual & Voice-First Interaction",
    desc: "Breaks the digital divide for citizens who cannot read or write formal terminology by offering native speech dialogues."
  },
  {
    dimension: "EFFICIENCY",
    title: "Guided Service & Document Workflows",
    desc: "Eliminates repeated visits to cooperative offices by providing comprehensive pre-application document readiness checklists."
  },
  {
    dimension: "REACH",
    title: "Physical Community Assistance",
    desc: "Brings modern digital government assistance right into the village through assisted kiosks installed in local PACS branches."
  }
];

export const TECH_STACK = {
  current: [
    { name: "Python", category: "Backend Core", desc: "Data pipelines & microservices" },
    { name: "FastAPI", category: "API Framework", desc: "High performance async REST APIs" },
    { name: "React", category: "Frontend", desc: "Modular, reactive user interface" },
    { name: "Supabase", category: "Database & Storage", desc: "Storage of raw PDFs & normalized database" },
    { name: "PostgreSQL", category: "Relational DB", desc: "Document metadata, schemas & auth" },
    { name: "PyMuPDF", category: "Doc Processing", desc: "Native PDF text extraction" },
    { name: "Tesseract OCR", category: "Vision Extraction", desc: "Scanned document text OCR" }
  ],
  development: [
    { name: "Sentence Transformers", category: "Embeddings", desc: "Multilingual vector generation" },
    { name: "FAISS", category: "Vector DB", desc: "High speed similarity search" },
    { name: "Neo4j", category: "Knowledge Graph", desc: "Scheme-to-entity relationship mapping" },
    { name: "Groq & LLaMA", category: "LLM Inference", desc: "Fast, low-latency grounded generation" },
    { name: "Hugging Face", category: "AI Models", desc: "Model hub and linguistic embeddings" },
    { name: "Docker", category: "Containerization", desc: "Standardized microservices deployment" }
  ],
  planned: [
    { name: "BHASHINI", category: "Speech AI", desc: "Government of India multilingual voice integration" },
    { name: "Raspberry Pi", category: "Edge Hardware", desc: "Physical kiosk deployment unit" },
    { name: "Quantized Local LLM", category: "Edge Inference", desc: "Offline RAG inference during network outages" }
  ]
};
