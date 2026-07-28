/* ==========================================================================
   PORTFOLIO CONTENT DATA
   --------------------------------------------------------------------------
   All dummy/placeholder content lives in this single file so it can be
   swapped for real information later without touching markup or logic.

   >>> REPLACE-ME markers point to every spot that needs real data before
   >>> this site goes live: profile photo, CV file, social links, project
   >>> images/descriptions, and personal contact details.
   ========================================================================== */

// Small inline-SVG placeholder generator so every image on the page is a
// self-contained data URI (no external image requests, fast + offline-safe).
// REPLACE-ME: swap any call site of placeholderImage() with a real <img src="...">
function placeholderImage(label, hueA = 210, hueB = 172, w = 640, h = 480) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hueA} 70% 45%)"/>
          <stop offset="100%" stop-color="hsl(${hueB} 70% 40%)"/>
        </linearGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
      <rect width="${w}" height="${h}" fill="url(#grid)"/>
      <g fill="rgba(255,255,255,0.9)" font-family="Space Grotesk, Arial, sans-serif" text-anchor="middle">
        <circle cx="${w/2}" cy="${h/2 - 28}" r="34" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
        <path d="M ${w/2 - 14} ${h/2 - 28} l 8 -14 l 8 14 l 8 -8 l 6 10" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="${w/2}" y="${h/2 + 46}" font-size="20" font-weight="600" opacity="0.95">${label}</text>
        <text x="${w/2}" y="${h/2 + 70}" font-size="12" letter-spacing="2" opacity="0.65">PLACEHOLDER IMAGE</text>
      </g>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const PORTFOLIO_DATA = {
  // REPLACE-ME: swap intro copy, image, and links with the real profile.
  profile: {
    name: "Manitha Pasandul",
    title: "Final-Year Mechanical Engineering Undergraduate | Aeronautical Engineering",
    tagline:
      "Aspiring aerospace engineer and researcher with interests in flight dynamics, aerospace propulsion, computational aerodynamics, and experimental aerospace engineering.",
    intro:
      "I am a final-year Mechanical Engineering undergraduate at the University of Moratuwa, specialising in Aeronautical Engineering. My work combines simulation, experimental validation, and practical engineering design across flight dynamics, propulsion, aerodynamics, and aircraft systems.",
    location: "Sri Lanka",
    email: "manitha.pasandul@example.com", // Replace with your current email
    phone: "+94 77 000 0000", // Replace with your current phone number
    cvUrl: "assets/cv/Manitha_Pasandul_CV.pdf",
    profileImage: "assets/images/profile.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/example-profile", // Replace with your LinkedIn URL
      github: "https://github.com/manithapasandul-wq",
      twitter: "https://twitter.com/example-profile", // Replace or remove if unused
      instagram: "https://instagram.com/example-profile", // Replace or remove if unused
    },
  },

  about: {
    paragraphs: [
      "I am a final-year Mechanical Engineering undergraduate at the University of Moratuwa, one of Sri Lanka’s leading engineering universities, specialising in Aeronautical Engineering. My interests lie in flight dynamics, aerospace propulsion, computational aerodynamics, and experimental aerospace engineering.",
      "My primary research is my final-year project on fixed-wing UAV flight dynamics, which combines aerodynamic modelling, dynamic stability analysis, simulation, and flight-test data to evaluate and fine-tune UAV behaviour. As part of the research framework developed through this project, I designed, fabricated, instrumented, and flight-tested a complete fixed-wing UAV, enabling simulation results to be validated against actual flight performance.",
      "My other major projects include propeller design and performance analysis using Blade Element Theory, the analytical structural design of a sailplane wing, and the FEA modelling and experimental validation of an aircraft wing structure using a dedicated test apparatus. I also served as an aerodynamics engineer for Sri Lanka’s first Formula Student car project, leading the aerodynamic package development for the team’s second vehicle, E2.",
      "My current research focuses on refurbishing a small gas turbine model to investigate how biodiesel blends affect its output power and overall performance. This work is strengthening my interest in gas turbine engines, combustion, alternative aviation fuels, and experimental propulsion research.",
      "Together, these projects have provided me with a strong foundation in CFD, FEA, CAD, MATLAB, analytical modelling, data analysis, and experimental testing. My industrial training at SriLankan Airlines further connected this academic experience with practical aircraft engineering through exposure to the Engine Module, NDT, Structures, Paint and Composite, and Wheels and Brakes Workshops.",
      "Looking ahead, I aim to build on this foundation through research in high-speed and hypersonic aerodynamics, aeroelasticity, propulsion and combustion systems, and flight dynamics and control. I am particularly interested in combining computational and experimental methods to analyse and optimise advanced aerospace systems. I am currently seeking research assistant, MSc, or PhD opportunities where I can develop this expertise at a deeper and more specialised level.",
    ],
    stats: [
      { value: "3.77", label: "Current CGPA" },
      { value: "6+", label: "Major Aerospace Projects" },
      { value: "6 Months", label: "Aircraft Engineering Training" },
      { value: "4", label: "Dean’s List Semesters" },
    ],
  },

  // Vertical timeline data — university + school education.
  education: [
    {
      level: "University",
      institution: "University of Moratuwa, Sri Lanka",
      program: "BSc (Hons) Mechanical Engineering — Aeronautical Engineering Specialisation",
      period: "2022 — 2026",
      classification: "First Class Division | CGPA: 3.77/4.00",
      highlights: [
        "Dean’s List recognition in Semesters 2, 4, 6, and 7.",
        "Final-year research focused on parametric sensitivity analysis and fine-tuning of fixed-wing UAV flight dynamics.",
        "Academic and project experience in CFD, FEA, CAD, MATLAB, flight testing, structural analysis, and propulsion systems.",
      ],
    },
    {
      level: "Advanced Level",
      institution: "Bandaranayake College, Gampaha",
      program: "G.C.E. Advanced Level — Physical Science Stream",
      period: "2018 — 2020",
      classification: "2 A’s and 1 B | Z-score: 2.1187 | Island Rank: 684",
      highlights: [
        "Subjects: Combined Mathematics, Physics, and Chemistry.",
      ],
    },
    {
      level: "Ordinary Level",
      institution: "Bandaranayake College, Gampaha",
      program: "G.C.E. Ordinary Level",
      period: "2016 — 2017",
      classification: "9 A’s",
      highlights: [
        "Completed the G.C.E. Ordinary Level examination with nine A grades.",
      ],
    },
  ],

  // Skills grouped by category with dummy proficiency levels (0-100).
  skills: [
    {
      category: "CAD & Design",
      items: [
        { name: "SolidWorks", level: 92 },
        { name: "AutoCAD", level: 85 },
        { name: "Technical Drawing", level: 88 },
        { name: "Mechanical Design", level: 87 },
        { name: "Manufacturing", level: 76 },
      ],
    },
    {
      category: "Simulation & Analysis",
      items: [
        { name: "ANSYS", level: 80 },
        { name: "CFD", level: 78 },
        { name: "FEA", level: 82 },
        { name: "MATLAB", level: 75 },
      ],
    },
    {
      category: "Programming & Management",
      items: [
        { name: "Python", level: 70 },
        { name: "Project Management", level: 72 },
      ],
    },
  ],

  // Work / research / volunteer experience — timeline style.
  experience: [
    {
      id: "temporary-instructor",
      type: "Academic Experience",
      position: "Temporary Instructor",
      organisation: "Department of Mechanical Engineering, University of Moratuwa",
      period: "July 2026 — Present",
      summary: [
        "I currently work full-time as a Temporary Instructor in the Department of Mechanical Engineering at the University of Moratuwa, supporting undergraduate teaching, practical sessions, tutorials, laboratory activities, student assessments, and technical guidance across core mechanical engineering subjects.",
        "I am assigned to ME2024 – Manufacturing Processes, ME1823 – Basic Engineering Thermodynamics, ME2093 – Mechanics of Machines I, and ME4220 – Principles of Naval Architecture.",
        "This experience has strengthened my technical knowledge, communication, teaching, and problem-solving skills while allowing me to guide students in applying theoretical engineering concepts to practical problems.",
      ],
      responsibilities: [
        "Support undergraduate teaching, practical sessions, tutorials, laboratory activities, student assessments, and technical guidance.",
        "Assigned modules: ME2024 Manufacturing Processes, ME1823 Basic Engineering Thermodynamics, ME2093 Mechanics of Machines I, and ME4220 Principles of Naval Architecture.",
        "Guide students in applying theoretical engineering concepts to practical problems.",
      ],
      achievements: [
        "Strengthened my technical communication, teaching, organisation, and engineering problem-solving skills.",
      ],
    },
    {
      id: "srilankan-airlines",
      detailPage: "srilankan-airlines.html",
      detailPageLabel: "View Full Experience",
      type: "Industrial Training",
      position: "Trainee Aeronautical Engineer",
      organisation: "SriLankan Airlines Engineering",
      period: "December 2024 — May 2025",
      summary: [
        "Completed a six-month industrial training placement at SriLankan Airlines Engineering, gaining practical knowledge across seven specialised workshops, including the Engine Module, NDT, and Paint and Composite Workshops, as well as base-maintenance and battery facilities supporting Airbus A320-family and A330 aircraft.",
        "The training strengthened my understanding of aircraft systems, inspection methods, technical documentation, quality control, and aviation safety procedures, while developing my attention to detail, experimental discipline, teamwork, and practical engineering awareness.",
      ],
      responsibilities: [
        "Completed six months of industrial training across seven specialised workshops, base-maintenance hangars, and aircraft battery facilities supporting Airbus A320-family and A330 aircraft.",
        "Gained practical knowledge of aircraft systems, inspection methods, technical documentation, quality control, and aviation safety procedures.",
      ],
      details: [
        {
          title: "Training Overview",
          paragraphs: [
            "Completed a six-month industrial training placement at SriLankan Airlines Engineering, gaining practical exposure to aircraft maintenance, component overhaul, inspection, repair, engineering documentation, and aviation safety. The training covered line and base maintenance operations, specialised component workshops, and maintenance practices used for Airbus A320-family and A330 aircraft.",
          ],
        },
        {
          title: "Wheels and Brakes Workshop",
          bullets: [
            "Participated in the disassembly and assembly of aircraft wheel units from main and nose landing-gear systems.",
            "Recorded wheel-hub part numbers, serial numbers, tyre conditions, and visible defects before maintenance.",
            "Assisted with tyre deflation, bearing and circlip removal, bead separation, wheel-hub dismantling, component cleaning, lubrication, and reassembly.",
            "Applied high-temperature bearing grease and graphite-based lubricant to wheel bolts, washers, and threaded areas.",
            "Gained experience with torque-controlled assembly procedures and nitrogen inflation of aircraft tyres.",
            "Studied thermal plugs, overpressure relief valves, tyre-pressure sensors, wire-locking mechanisms, and self-locking wheel-hub nuts.",
            "Examined carbon brake assemblies, including rotors, stators, hydraulic pistons, and independent hydraulic systems providing braking redundancy.",
          ],
        },
        {
          title: "Safety Workshop",
          bullets: [
            "Assisted with the inspection and maintenance of cabin safety equipment, including slide rafts, life jackets, seat belts, fire extinguishers, and emergency equipment.",
            "Observed the rapid inflation and leakage inspection of an Airbus aircraft slide raft.",
            "Supported the folding, air removal, compression, vacuum packing, and repacking of slide-raft assemblies and their gas cylinders.",
            "Inspected, folded, labelled, and vacuum-packed inflatable safety jackets according to workshop procedures.",
            "Assisted with cleaning and inspecting aircraft seat belts before their return to service.",
            "Developed an understanding of inspection intervals, traceability requirements, serial-number recording, and expiry-date documentation used for safety equipment.",
          ],
        },
        {
          title: "Engine Module Workshop",
          bullets: [
            "Gained exposure to CFM56, LEAP, V2500, and Rolls-Royce Trent 700 gas turbine engines used within the SriLankan Airlines fleet.",
            "Studied two-spool and three-spool turbofan engine operation, including compressor stages, combustors, turbines, bypass flow, and shaft arrangements.",
            "Learned how aircraft engines are started using pneumatic power supplied by the auxiliary power unit, another operating engine, or ground equipment.",
            "Observed a complete Rolls-Royce Trent 700 fan-blade replacement on an Airbus A330 engine.",
            "Observed engine and APU borescope inspections used to identify cracks, corrosion, wear, and foreign-object damage.",
            "Became familiar with the Aircraft Maintenance Manual, particularly ATA Chapter 72 relating to engine maintenance.",
            "Studied engine fuel and oil-system components, including low- and high-pressure fuel pumps, the fuel-cooled oil cooler, air–oil heat exchanger, fuel-metering unit, and electronic engine controller.",
            "Developed an understanding of active clearance-control systems, compressor bleed systems, stall and surge prevention, and accessory gearbox operation.",
          ],
        },
        {
          title: "Paint and Composite Workshop",
          bullets: [
            "Observed carbon- and glass-fibre component repairs using vacuum-bagging and wet-layup methods.",
            "Studied the functions of peel ply, perforated release film, bleeder fabric, separator film, breather layers, heat blankets, and vacuum systems.",
            "Observed the repair of an aircraft belly panel using a carbon-fibre repair patch and controlled curing procedures.",
            "Assisted with surface preparation, sanding, painting, resin application, corrosion protection, and the repair of non-structural cabin components.",
            "Gained exposure to plastic-welding methods used to repair damaged cabin and lavatory components.",
            "Supported modification work for the installation of a cabin Wi-Fi module and the replacement of a cockpit USB connection with a USB Type-C port.",
            "Observed the preparation and repainting of flap-track fairings and the repair of emergency-slide casings.",
          ],
        },
        {
          title: "Structural Workshop",
          bullets: [
            "Gained exposure to structural inspection, damage assessment, component fabrication, and repair of aircraft ribs, spars, stringers, skin panels, brackets, and control surfaces.",
            "Observed the permanent repair of an Airbus A321 nose-section dent caused by a bird strike.",
            "Followed the repair process from visual inspection and Structural Repair Manual consultation to damaged-material removal, doubler fabrication, riveting, corrosion protection, and repainting.",
            "Learned how rivet pitch, edge distance, rivet size, and repair geometry are determined using approved structural-repair documentation.",
            "Observed the replacement of an engine C-duct fairing bracket and the repair of an aircraft slat.",
            "Gained familiarity with sheet-metal rolling, drilling, bending, hydraulic pressing, welding, riveting, and structural-forming equipment.",
            "Studied aircraft fasteners including solid-shank, blind, tubular, CherryMAX, and CherryLOCK rivets.",
            "Received exposure to cockpit flight controls, flight displays, flight computers, and electronic equipment located below the cockpit deck.",
          ],
        },
        {
          title: "Non-Destructive Testing Workshop",
          bullets: [
            "Developed practical knowledge of liquid penetrant testing, eddy-current testing, and magnetic-particle inspection.",
            "Observed the inspection of aircraft wheel hubs, wheel bolts, engine-mounting bolts, torque bars, turbine blades, landing-gear parts, and structural components.",
            "Learned the surface preparation, penetrant application, dwell time, cleaning, drying, developer application, ultraviolet inspection, and post-cleaning stages of fluorescent liquid penetrant testing.",
            "Observed eddy-current inspections used to detect surface and near-surface defects in conductive materials.",
            "Became familiar with rotating probes used to inspect wheel-hub bolt holes and rotating platforms used for wheel-hub examination.",
            "Studied magnetic flux leakage and magnetic particles used to identify discontinuities in ferromagnetic components.",
            "Gained an understanding of how NDT results are interpreted and documented before components are approved for further maintenance or service.",
          ],
        },
        {
          title: "Accessories Workshop",
          bullets: [
            "Assisted with the cleaning and servicing of aircraft environmental-control-system heat exchangers.",
            "Gained exposure to alkaline cleaning, high-pressure washing, steam cleaning, compressed-air drying, surface cleaning, and oven drying.",
            "Assisted with the calibration of a rudder actuator using a hydraulic test rig and compared measured displacement values with manufacturer specifications.",
            "Participated in the disassembly, cleaning, O-ring replacement, reassembly, and preparation of cargo-bay roller assemblies.",
            "Gained an understanding of the repair, calibration, and overhaul of line-replaceable units, hydraulic components, lavatory equipment, and cargo-handling devices.",
          ],
        },
        {
          title: "Base Maintenance and Hangar Operations",
          bullets: [
            "Observed scheduled aircraft maintenance activities inside narrow-body and wide-body hangars.",
            "Gained exposure to A-check and C-check procedures, aircraft jacking, engine inspections, borescope inspections, aircraft washing, paint removal, structural work, and cabin maintenance.",
            "Observed an ongoing 2C-check maintenance programme on an Airbus A330 aircraft.",
            "Learned how engineering teams, workshops, planners, technicians, and inspectors coordinate during heavy-maintenance activities.",
            "Developed an understanding of hangar access control, work-area safety, component traceability, approved documentation, and certification requirements.",
          ],
        },
        {
          title: "Aircraft Battery Maintenance",
          bullets: [
            "Gained exposure to the maintenance of aircraft Nickel–Cadmium batteries used for APU starting and emergency electrical power.",
            "Studied battery inspection, condition recording, charging, controlled discharging, capacity testing, electrolyte servicing, terminal inspection, and cell replacement.",
            "Learned about battery construction, charging procedures, workshop safety, and the importance of following the Component Maintenance Manual.",
          ],
        },
        {
          title: "Engineering Operations and Professional Development",
          bullets: [
            "Developed an understanding of line maintenance, base maintenance, Approved Maintenance Organisation operations, and Continuing Airworthiness Management Organisation responsibilities.",
            "Followed aviation safety practices involving personal protective equipment, restricted-area access, chemical handling, compressed gases, equipment operation, and waste disposal.",
            "Gained experience working with Aircraft Maintenance Manuals, Structural Repair Manuals, Component Maintenance Manuals, part numbers, serial numbers, and maintenance records.",
            "Strengthened communication, teamwork, adaptability, time management, attention to detail, and professional discipline through interaction with engineers, technicians, supervisors, and maintenance planners.",
          ],
        },
      ],
    },
    {
      id: "falcon-e-racing",
      detailPage: "falcon-e-racing.html",
      detailPageLabel: "View Full Experience",
      type: "Engineering Team",
      position: "Aerodynamics Engineer",
      organisation: "Falcon E Racing | Sri Lanka’s First Formula Student Car Project",
      period: "University Project",
      summary: [
        "Served as an Aerodynamics Engineer for Falcon E Racing, Sri Lanka’s first Formula Student car project, leading the aerodynamic package development for the team’s second vehicle, E2. My work covered CFD-based aerodynamic optimisation, composite manufacturing, wing construction, assembly, and vehicle integration.",
      ],
      responsibilities: [
        "Led the aerodynamic package development for E2, the second vehicle developed by Sri Lanka’s first Formula Student car project.",
        "Covered CFD-based optimisation, composite manufacturing, front and rear wing construction, assembly, and vehicle integration.",
      ],
      details: [
        {
          title: "Aerodynamic Development",
          paragraphs: [
            "Served as an Aerodynamics Engineer for Falcon E Racing, Sri Lanka’s first Formula Student car project, and led the aerodynamic package development for the team’s second vehicle, E2. My role covered the complete development cycle, from aerodynamic concept generation and CFD-based optimisation to composite manufacturing, assembly, and vehicle integration.",
            "A major part of my work involved leading the aerodynamic design and optimisation of a four-element front wing using two-dimensional steady-state CFD simulations in ANSYS Fluent. The computational domain incorporated the front section of the tyre with a rotating-wall boundary condition to represent the interaction between the front-wing wake and tyre flow field more accurately.",
            "I applied Multi-Objective Genetic Algorithm optimisation to investigate the influence of key design variables, including angle of attack, ground clearance, element gaps, and overlaps. The optimisation aimed to maximise downforce and aerodynamic efficiency while directing airflow over and around the front tyre to reduce wake formation and tyre-induced drag. The simulation results supported data-driven decisions throughout the front-wing development process.",
            "I also led the design and development of the wider aerodynamic package, including the front wing, rear wing, aerodynamic body elements, and their integration with the vehicle. The designs were evaluated by considering downforce generation, drag, aerodynamic balance, structural feasibility, manufacturing limitations, ground clearance, and Formula Student regulations.",
          ],
        },
        {
          title: "Manufacturing, Construction, and Assembly",
          paragraphs: [
            "My responsibilities extended beyond simulation and design. I led the manufacturing and assembly activities, including:",
          ],
          bullets: [
            "Fabrication and preparation of fibreglass moulds.",
            "Mould surface preparation and application of release systems.",
            "Carbon-fibre layup and composite component fabrication.",
            "Production of 3D-printed aerofoil ribs.",
            "Construction of the front and rear wing elements.",
            "Alignment and assembly of multi-element wing sections.",
            "Installation and integration of the completed aerodynamic package with the vehicle.",
          ],
        },
        {
          title: "Skills Developed",
          paragraphs: [
            "This experience gave me responsibility for the complete aerodynamic development cycle: conceptual design, CAD modelling, CFD simulation, numerical optimisation, composite manufacturing, assembly, and vehicle integration. It strengthened my expertise in computational aerodynamics, ANSYS Fluent, CAD, composite fabrication, design optimisation, technical leadership, teamwork, and multidisciplinary engineering decision-making.",
          ],
        },
      ],
    },
    {
      id: "aeronautical-society",
      type: "Student Society",
      position: "Senior Member of the Aeronautical Society",
      organisation: "Bandaranayake College, Gampaha",
      period: "2017 — 2020",
      summary: [
        "Served as a Senior Member of the Aeronautical Society at Bandaranayake College from 2017 to 2020, gaining foundational experience in RC aircraft flying, basic aerodynamics, flight controls, and electronics. During this period, I independently built an F450 quadcopter using a DJI NAZA-M Lite flight controller and fabricated RC aircraft models, including an F-22 Raptor and Blu Baby.",
      ],
      responsibilities: [
        "Learned the fundamentals of RC aircraft flying, basic aerodynamics, flight controls, and electronics.",
        "Independently built an F450 quadcopter using a DJI NAZA-M Lite flight controller.",
        "Fabricated RC aircraft models including an F-22 Raptor and Blu Baby.",
      ],
      achievements: [
        "These early hands-on projects played an important role in developing my interest in aeronautical engineering and practical aircraft systems.",
      ],
    },
  ],

  // Projects grouped by category. Each project supports a detailed modal view.
  // REPLACE-ME: swap `image` / `gallery` and copy with real project material.
  projectCategories: [
    {
      category: "Design & Manufacturing",
      projects: [
        {
          id: "dm-1",
          title: "Modular Workbench Fixture System",
          summary:
            "A reconfigurable fixture platform designed to cut changeover time between small-batch production runs.",
          tools: ["SolidWorks", "DFM", "Sheet Metal"],
          image: placeholderImage("Fixture System", 210, 172),
          objectives: [
            "Design a fixture platform reconfigurable across 5 part families.",
            "Minimise changeover time between production batches.",
          ],
          challenges:
            "Balancing rigidity for machining loads against the need for tool-less reconfiguration was the core design tension — early prototypes flexed under clamping force.",
          methodology:
            "Iterated through 3 SolidWorks concepts, used FEA to validate stiffness under worst-case clamping load, then produced a sheet-metal + modular T-slot base for a 3D-printed proof-of-concept.",
          technologies: ["SolidWorks", "FEA (simulation study)", "Sheet Metal Design", "3D Printing"],
          outcomes:
            "Sample results: changeover time reduced from ~25 minutes to ~7 minutes across the tested part families in a lab demonstration.",
          gallery: [
            placeholderImage("Concept Sketch", 210, 172),
            placeholderImage("FEA Result", 172, 210),
            placeholderImage("Prototype", 200, 260),
          ],
        },
        {
          id: "dm-2",
          title: "Lightweight Bicycle Frame Redesign",
          summary:
            "Topology-optimised frame geometry exploring weight reduction while preserving stiffness targets.",
          tools: ["SolidWorks", "Topology Optimisation", "Aluminium 6061"],
          image: placeholderImage("Bike Frame", 190, 260),
          objectives: [
            "Reduce frame mass by at least 10% versus a baseline reference design.",
            "Maintain torsional stiffness within 5% of baseline.",
          ],
          challenges:
            "Topology-optimised organic shapes are difficult to manufacture with standard tube-and-lug methods, requiring a manufacturability pass after optimisation.",
          methodology:
            "Baseline model built in SolidWorks, topology optimisation study run to identify material-efficient regions, then manually re-interpreted into manufacturable tube profiles.",
          technologies: ["SolidWorks Simulation", "Topology Optimisation", "Aluminium 6061-T6"],
          outcomes:
            "Sample results: 12% mass reduction achieved with stiffness within 3% of the baseline target.",
          gallery: [
            placeholderImage("Baseline Model", 190, 260),
            placeholderImage("Optimised Shape", 190, 150),
          ],
        },
        {
          id: "dm-3",
          title: "Precision Gearbox Housing",
          summary:
            "A compact two-stage gearbox housing designed for a robotics drivetrain, optimised for assembly.",
          tools: ["AutoCAD", "SolidWorks", "GD&T"],
          image: placeholderImage("Gearbox Housing", 172, 210),
          objectives: [
            "Design a two-stage reduction housing within a 90x90x60mm envelope.",
            "Simplify assembly to fewer than 10 fasteners.",
          ],
          challenges:
            "Maintaining shaft alignment tolerances across a split-housing design while keeping the part count low.",
          methodology:
            "Developed GD&T scheme for bearing bore alignment, validated with a tolerance stack-up analysis, then produced full manufacturing drawings.",
          technologies: ["SolidWorks", "GD&T", "Tolerance Stack Analysis"],
          outcomes:
            "Sample results: final design used 8 fasteners and passed a simulated alignment tolerance check.",
          gallery: [placeholderImage("Housing Exploded View", 172, 210)],
        },
      ],
    },
    {
      category: "Fluid Dynamics",
      projects: [
        {
          id: "fd-1",
          title: "Finned Heat Sink Airflow Study",
          summary:
            "CFD investigation comparing airflow and thermal performance across three fin geometries.",
          tools: ["ANSYS Fluent", "CFD", "MATLAB"],
          image: placeholderImage("Heat Sink CFD", 200, 300),
          objectives: [
            "Compare thermal performance of straight, pin, and wavy fin geometries.",
            "Identify the geometry with the best performance-to-pressure-drop ratio.",
          ],
          challenges:
            "Mesh independence was difficult to achieve near fin boundary layers without excessive cell count and simulation time.",
          methodology:
            "Built parametric fin geometries, ran steady-state CFD in ANSYS Fluent with k-omega SST turbulence model, post-processed results in MATLAB.",
          technologies: ["ANSYS Fluent", "MATLAB", "Mesh Convergence Study"],
          outcomes:
            "Sample results: wavy fin geometry showed 18% better heat dissipation at a comparable pressure drop.",
          gallery: [
            placeholderImage("Mesh View", 200, 300),
            placeholderImage("Velocity Contours", 300, 200),
            placeholderImage("Temperature Field", 300, 200),
          ],
        },
        {
          id: "fd-2",
          title: "Centrifugal Pump Performance Analysis",
          summary:
            "Numerical modelling of a centrifugal pump impeller to predict head-flow performance curves.",
          tools: ["ANSYS CFX", "CFD", "Python"],
          image: placeholderImage("Pump Analysis", 300, 220),
          objectives: [
            "Predict pump head-flow curve numerically and compare against sample manufacturer data.",
            "Identify recirculation zones at off-design flow rates.",
          ],
          challenges:
            "Capturing rotor-stator interaction accurately required careful interface setup between rotating and stationary domains.",
          methodology:
            "Modelled impeller and volute in CAD, simulated using a multiple reference frame approach in ANSYS CFX, automated post-processing with a Python script.",
          technologies: ["ANSYS CFX", "Python", "Turbomachinery CFD"],
          outcomes:
            "Sample results: predicted head-flow curve within 6% of reference data across the tested flow range.",
          gallery: [
            placeholderImage("Impeller Model", 300, 220),
            placeholderImage("Streamlines", 300, 220),
          ],
        },
      ],
    },
    {
      category: "Mechanical Simulations",
      projects: [
        {
          id: "ms-1",
          title: "Vehicle Chassis Crash Simulation",
          summary:
            "Explicit dynamics simulation estimating chassis deformation under a simplified frontal impact.",
          tools: ["ANSYS Explicit Dynamics", "FEA"],
          image: placeholderImage("Crash Simulation", 300, 190),
          objectives: [
            "Estimate peak deformation and energy absorption under a simplified frontal impact load case.",
            "Compare two frame-rail thicknesses for crashworthiness.",
          ],
          challenges:
            "Explicit dynamics solves are computationally heavy — balancing mesh resolution with available compute time was a constant trade-off.",
          methodology:
            "Simplified chassis model built in SolidWorks, simulated in ANSYS Explicit Dynamics with a rigid-wall frontal impact boundary condition.",
          technologies: ["ANSYS Explicit Dynamics", "SolidWorks", "FEA"],
          outcomes:
            "Sample results: thicker frame rail reduced peak intrusion by 22% at the cost of 9% added mass.",
          gallery: [placeholderImage("Deformation Plot", 300, 190)],
        },
        {
          id: "ms-2",
          title: "Rotating Shaft Fatigue Life Estimation",
          summary:
            "Fatigue analysis of a stepped shaft under cyclic bending load using stress-life methods.",
          tools: ["ANSYS", "MATLAB", "FEA"],
          image: placeholderImage("Shaft Fatigue", 300, 200),
          objectives: [
            "Estimate fatigue life of a stepped shaft under a sample cyclic bending load.",
            "Evaluate the effect of fillet radius on stress concentration.",
          ],
          challenges:
            "Accurately capturing the stress concentration at the shaft step required local mesh refinement without destabilising the global solution.",
          methodology:
            "Static FEA in ANSYS to extract stress concentration factors, fatigue life estimated using stress-life (S-N) approach scripted in MATLAB.",
          technologies: ["ANSYS", "MATLAB", "Stress-Life Fatigue Method"],
          outcomes:
            "Sample results: increasing fillet radius by 2mm extended estimated fatigue life by roughly 3x.",
          gallery: [
            placeholderImage("Stress Contour", 300, 200),
            placeholderImage("S-N Curve", 300, 200),
          ],
        },
      ],
    },
    {
      category: "Academic Projects",
      projects: [
        {
          id: "ac-1",
          title: "Solar-Assisted Water Pumping System",
          summary:
            "Final-year coursework project sizing and modelling a small-scale solar water pumping setup.",
          tools: ["MATLAB", "System Modelling"],
          image: placeholderImage("Solar Pump", 300, 200),
          objectives: [
            "Size a solar PV array and pump combination for a sample rural irrigation case.",
            "Model daily output against sample regional solar irradiance data.",
          ],
          challenges:
            "Matching pump characteristic curves against variable solar input required an iterative sizing approach rather than a single calculation.",
          methodology:
            "Built a MATLAB model combining PV output estimation with pump performance curves, iterated component sizing against a sample demand profile.",
          technologies: ["MATLAB", "Renewable Energy Systems", "System Sizing"],
          outcomes:
            "Sample results: proposed system met 92% of sample daily water demand across a modelled dry season.",
          gallery: [placeholderImage("System Diagram", 300, 200)],
        },
        {
          id: "ac-2",
          title: "Low-Cost Prosthetic Hand Mechanism",
          summary:
            "Group coursework project designing a tendon-driven mechanism for an affordable prosthetic hand.",
          tools: ["SolidWorks", "3D Printing", "Mechanism Design"],
          image: placeholderImage("Prosthetic Hand", 300, 220),
          objectives: [
            "Design an underactuated tendon-driven gripping mechanism.",
            "Keep bill-of-materials cost within a sample low-cost target.",
          ],
          challenges:
            "Achieving adaptive grip across irregular object shapes with a minimal number of actuators was the central mechanism-design challenge.",
          methodology:
            "Designed an underactuated linkage in SolidWorks, 3D-printed functional prototype fingers, tested grip on a sample set of household objects.",
          technologies: ["SolidWorks", "3D Printing", "Underactuated Mechanisms"],
          outcomes:
            "Sample results: prototype successfully grasped 8 of 10 sample test objects in initial trials.",
          gallery: [
            placeholderImage("Hand Prototype", 300, 220),
            placeholderImage("Linkage Diagram", 300, 220),
          ],
        },
      ],
    },
  ],

  awards: [
    {
      title: "Dean's List Honours",
      organisation: "University of Moratuwa (Sample)",
      year: "2023",
      description:
        "Recognised for academic excellence, ranking in the top percentile of the Mechanical Engineering cohort (sample achievement).",
    },
    {
      title: "Best Final Year Project — Runner Up",
      organisation: "Dept. of Mechanical Engineering (Sample)",
      year: "2024",
      description:
        "Runner-up award for the CFD-based heat exchanger optimisation project at the departmental symposium (sample achievement).",
    },
    {
      title: "Inter-University CAD Design Challenge",
      organisation: "Sample National Engineering Association",
      year: "2022",
      description:
        "Placed 2nd nationally for a rapid CAD design and manufacturing-feasibility challenge (sample achievement).",
    },
    {
      title: "STEM Outreach Recognition Award",
      organisation: "Sample STEM for Schools Initiative",
      year: "2022",
      description:
        "Awarded for outstanding volunteer contribution mentoring school students in robotics and CAD (sample achievement).",
    },
  ],

  interests: [
    { name: "Automotive Engineering", icon: "car" },
    { name: "Robotics", icon: "robot" },
    { name: "Renewable Energy", icon: "sun" },
    { name: "Product Design", icon: "cube" },
    { name: "3D Printing", icon: "printer" },
    { name: "Aerodynamics", icon: "wind" },
    { name: "Photography", icon: "camera" },
    { name: "Hiking", icon: "mountain" },
  ],
};
