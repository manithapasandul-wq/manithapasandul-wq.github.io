/* ==========================================================================
   PORTFOLIO CONTENT DATA
   --------------------------------------------------------------------------
   All site content lives in this single file so it can be edited without
   touching markup or logic.

   Profile text, education, experience, projects, awards, and interests are
   real, sourced from the project portfolio document.

   Project images come from the supplied image set: the fabricated UAV and
   its flight tests, the ANSYS Fluent S809 study, the Formula Student
   front-wing CFD, and the SolidWorks propeller model. The gas turbine and
   wing-stress cards still borrow a related photograph, as no images of
   those rigs were supplied.

   >>> REPLACE-ME markers point to what is still outstanding: contact email
   >>> and phone, LinkedIn / Twitter / Instagram URLs, and the CV file.
   ========================================================================== */

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
    // REPLACE-ME: this still points at the sample CV carried over from the
    // source repo — drop your real CV into assets/cv/ and update this path.
    cvUrl: "assets/cv/Manitha_Pasandul_Sample_CV.pdf",
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
      { value: "3.8", label: "Final CGPA" },
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
      classification: "First Class Division | GPA: 3.8/4.00",
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
      id: "srilankan-airlines",
      images: [
        { src: "assets/images/experience/srilankan/cockpit.webp", caption: "Airbus cockpit familiarisation" },
        { src: "assets/images/experience/srilankan/training-team.webp", caption: "Engineering training team" },
        { src: "assets/images/experience/srilankan/training-centre.webp", caption: "SriLankan Airlines training centre" },
        { src: "assets/images/experience/srilankan/engine-module.webp", caption: "Beside a turbofan engine in the Engine Module Workshop" },
      ],
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
      images: [
        { src: "assets/images/experience/falcon/e2-night.webp", caption: "E2 with its completed aerodynamic package" },
        { src: "assets/images/experience/falcon/vehicle-launch.webp", caption: "E2 vehicle launch — Unleashed 2G" },
        { src: "assets/images/experience/falcon/e2-track.webp", caption: "E2 during track testing" },
        { src: "assets/images/experience/falcon/e2-runway.webp", caption: "E2 at the runway test venue" },
      ],
      detailPage: "falcon-e-racing.html",
      detailPageLabel: "View Full Experience",
      type: "Engineering Team",
      position: "Aerodynamics Engineer",
      organisation: "Falcon E Racing | Sri Lanka’s First Formula Student Car Project",
      period: "University Project",
      summary: [
        "Served as an Aerodynamics Engineer for Falcon E Racing, Sri Lanka’s first Formula Student car project, leading the aerodynamic package development for the team’s second vehicle, E2. My work covered CFD-based aerodynamic optimisation, composite manufacturing, wing construction, assembly, and vehicle integration.",
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
      id: "temporary-instructor",
      images: [
        { src: "assets/images/experience/moratuwa/instructor-portrait.webp", caption: "Department of Mechanical Engineering, University of Moratuwa" },
      ],
      type: "Academic Experience",
      position: "Temporary Instructor",
      organisation: "Department of Mechanical Engineering, University of Moratuwa",
      period: "July 2026 — Present",
      summary: [
        "I currently work full-time as a Temporary Instructor in the Department of Mechanical Engineering at the University of Moratuwa, supporting undergraduate teaching, practical sessions, tutorials, laboratory activities, student assessments, and technical guidance across core mechanical engineering subjects.",
        "I am assigned to the following modules:",
      ],
      responsibilities: [
        "ME2024 – Manufacturing Processes",
        "ME1823 – Basic Engineering Thermodynamics",
        "ME2093 – Mechanics of Machines I",
        "ME4220 – Principles of Naval Architecture",
      ],
      closing: [
        "This experience has strengthened my technical knowledge, communication, teaching, and problem-solving skills while allowing me to guide students in applying theoretical engineering concepts to practical problems.",
      ],
      achievements: [
        "Strengthened my technical communication, teaching, organisation, and engineering problem-solving skills.",
      ],
    },
    {
      id: "aeronautical-society",
      images: [
        { src: "assets/images/experience/society/bcas-crest.webp", caption: "Bandaranayake College Aeronautical Society" },
      ],
      type: "Student Society",
      position: "Senior Member of the Aeronautical Society",
      organisation: "Bandaranayake College, Gampaha",
      period: "2017 — 2020",
      summary: [
        "Served as a Senior Member of the Aeronautical Society at Bandaranayake College from 2017 to 2020, gaining foundational experience in RC aircraft flying, basic aerodynamics, flight controls, and electronics.",
      ],
      responsibilities: [
        "Built an F450 quadcopter using a DJI NAZA-M Lite flight controller.",
        "Fabricated RC aircraft models including an F-22 Raptor and Blu Baby.",
      ],
      achievements: [
        "These early hands-on projects played an important role in developing my interest in aeronautical engineering and practical aircraft systems.",
      ],
    },
  ],

  // Projects grouped by category. Each project supports a detailed modal view.
  // Content sourced from the project portfolio document.
  projectCategories: [
    {
      category: "Flight Dynamics & Simulation",
      // Single full-width card \u2014 the write-up is long enough to need the room.
      layout: "single",
      projects: [
        {
          id: "fyp-uav",
          title:
            "Design and Development of a Framework for Flight Dynamics and Control for Small Conventional Surveillance UAVs",
          summary:
            "Final-year research connecting UAV geometric design to real flight-dynamic behaviour through parametric sensitivity analysis, fabrication, flight testing, and modal identification.",
          // Shown on the home-page card in place of the one-line summary.
          cardSummary: [
            "Developed and experimentally validated a flight-dynamics framework for small conventional fixed-wing UAVs by combining AVL-based stability analysis, geometric sensitivity studies, aircraft fabrication, onboard flight-data acquisition, and system-identification techniques. The project evaluated key dynamic modes, investigated how aircraft design parameters influence stability, and compared predicted responses with flight-test data obtained from instrumented UAV platforms.",
            "The work included automating aerodynamic and dynamic analyses, designing and fabricating a 2.5 m wingspan UAV, integrating an APM 2.8 flight controller, and developing an Arduino-based IMU and SD-card data-logging system. Flight responses were processed using FFT and Prony analysis to estimate modal characteristics and validate the predicted short-period behaviour using experimental flight data with the use of MATLAB.",
          ],
          tools: ["Python", "AVL", "ArduPilot", "Arduino", "MATLAB", "Prony\u2019s Method"],
          image: "assets/images/projects/fyp/g1.webp",
          // Wide shot \u2014 fit it whole rather than cropping to fill the panel.
          imageFit: "contain",
          detailPage: "final-year-project.html",
          detailPageLabel: "Explore the full project",
          // Card button opens the detail page instead of the modal.
          cardLinksToPage: true,
          objectives: [
            "Identify how geometric and mass-related design parameters influence the short-period, phugoid, Dutch-roll, roll-subsidence, and spiral modes.",
            "Improve inherent stability through airframe geometry before relying on stability-augmentation systems.",
            "Fabricate, instrument, and flight-test a fixed-wing UAV to validate the numerical framework against measured flight data.",
          ],
          challenges:
            "The fabricated UAV showed roll-related instability and needed frequent corrective pilot inputs, making a clean natural response after an elevator doublet hard to capture. Structural vibration affecting the IMU, control-surface backlash, servo delay, wind disturbance, a limited flying area and take-off distance, and damage during repeated test attempts all reduced the reliability of the modal identification. The APM 2.8 sampling rate and onboard memory were also insufficient for resolving rapid short-period oscillations.",
          methodology:
            "A Python-based flight-dynamics framework automatically updated the UAV geometry, generated AVL input files, executed AVL, extracted stability derivatives and eigenvalues, identified the dynamic modes, and computed natural frequencies, damping ratios, and time constants for every configuration \u2014 allowing many geometries to be swept without preparing separate models by hand. Normalised sensitivity, the percentage change in a dynamic characteristic per one-percent change in a parameter, was used to compare parameters with different units and ranges. A 2.5 m-span UAV was then fabricated using carbon-fibre spar tubes, laser-cut plywood ribs, a welded aluminium wing box, and a 3D-printed fuselage pod, and integrated with an APM 2.8 running ArduPilot fixed-wing firmware. After the APM logging proved insufficient, an independent Arduino Nano, IMU, and SD-card system with Kalman filtering and a toggle-switch input marker was developed, and a stable Blu-Baby RC aircraft was added as a second validation platform. Recorded pitch-angle and pitch-rate responses were windowed and analysed using FFT and Prony\u2019s method.",
          technologies: [
            "Python",
            "AVL (Athena Vortex Lattice)",
            "ArduPilot / Mission Planner",
            "Arduino Nano + IMU",
            "Kalman Filtering",
            "FFT and Prony\u2019s Method",
            "Composite and 3D-Printed Fabrication",
          ],
          outcomes:
            "Horizontal tail volume ratio proved the most effective short-period tuning parameter \u2014 a 1% increase raised short-period natural frequency by roughly 1.03% and damping ratio by roughly 0.68%. Wing dihedral dominated the spiral mode: increasing it from about 0\u00b0 to 8\u00b0 cut the spiral time constant from roughly 40.2 s to 3.0 s, a reduction greater than 92%. A 1% increase in wing aspect ratio raised phugoid natural frequency by about 0.2429%. The short-period response was successfully identified from the Blu-Baby flight data and compared against the numerical prediction, while the slower phugoid mode could not be reliably extracted within the available undisturbed flight time.",
          gallery: [
            "assets/images/projects/fyp/uav-field.webp",
            "assets/images/projects/fyp/uav-front.webp",
            "assets/images/projects/fyp/wing-ribs.webp",
            "assets/images/projects/fyp/printed-pod.webp",
            "assets/images/projects/fyp/printed-parts.webp",
            "assets/images/projects/fyp/blubaby-flight.webp",
            "assets/images/projects/fyp/team-presentation.webp",
            "assets/images/projects/fyp/poster.webp",
          ],
        },
      ],
    },
    {
      category: "Aerodynamics & CFD",
      // Single full-width cards, matching the other project sections.
      layout: "single",
      projects: [
        {
          id: "nrel-s809",
          title: "CFD Analysis and Validation of the NREL S809 Aerofoil",
          summary:
            "Two-dimensional ANSYS Fluent study of the NREL S809 wind-turbine aerofoil from 0\u00b0 to 20\u00b0 angle of attack, validated against published research data.",
          tools: ["ANSYS Fluent", "CFD", "Structured Meshing"],
          image: "assets/images/projects/cfd/velocity-contour.webp",
          objectives: [
            "Establish a validated baseline CFD model of the unslotted NREL S809 aerofoil that can later be extended to passive flow-control concepts.",
            "Evaluate lift, drag, lift-to-drag ratio, pressure distribution, and flow separation from 0\u00b0 to 20\u00b0 angle of attack.",
            "Compare the predicted aerodynamic coefficients against published reference data.",
          ],
          challenges:
            "Obtaining stable convergence at higher angles of attack was the main difficulty, because separated flow is highly unsteady and a steady-state solver cannot fully represent it \u2014 more iterations were needed near stall. Developing the structured near-wall mesh was also challenging, as the required y+ condition had to be balanced against skewness and orthogonality, and several bias factors were tested before an acceptable first-layer height and overall mesh quality were reached.",
          methodology:
            "A large C-type domain was built around a 600 mm chord aerofoil at a Reynolds number of 1 \u00d7 10\u2076, corresponding to an inlet velocity of 24.34 m/s, and meshed with structured quadrilaterals concentrated near the surface and in the downstream wake. The final mesh contained approximately 234,400 elements with a measured first-layer height of about 0.736 mm, selected after a grid-independence study showed the aerodynamic coefficients stabilising beyond roughly 200,000 elements. The standard k\u2013\u03b5 turbulence model with standard wall functions was used alongside a velocity inlet, pressure outlet, no-slip aerofoil wall, coupled pressure\u2013velocity solution, second-order pressure and momentum discretisation, least-squares cell-based gradients, and convergence criteria of 10\u207b\u2074. Angle of attack was varied in 2\u00b0 increments by resolving the constant inlet velocity into horizontal and vertical components.",
          technologies: [
            "ANSYS Fluent",
            "Structured C-Type Meshing",
            "k\u2013\u03b5 Turbulence Model",
            "Grid-Independence Study",
          ],
          outcomes:
            "Lift increased with angle of attack to a maximum coefficient of approximately 1.20 near 14\u00b0 before separation developed and the aerofoil entered stall, with the maximum lift-to-drag ratio occurring at approximately 6\u00b0. Lift predictions agreed well with the published reference across most of the tested range, while larger drag deviations appeared at some intermediate and high angles \u2014 attributed mainly to mesh distribution, near-wall treatment, turbulence modelling, and the limits of a steady-state model close to stall. The study recommended the k\u2013\u03c9 SST model with a finer near-wall mesh at y+ close to one, and rotating the aerofoil geometry rather than the inlet-velocity direction, for future work.",
          gallery: [
            "assets/images/projects/cfd/pressure-contour.webp",
            "assets/images/projects/cfd/velocity-contour-high-aoa.webp",
            "assets/images/projects/cfd/mesh-overview.webp",
            "assets/images/projects/cfd/mesh-near-wall.webp",
            "assets/images/projects/cfd/domain-boundary-conditions.webp",
            "assets/images/projects/cfd/cl-convergence.webp",
            "assets/images/projects/cfd/cd-convergence.webp",
            "assets/images/projects/cfd/ld-convergence.webp",
            "assets/images/projects/cfd/residuals.webp",
          ],
        },
        {
          id: "fs-front-wing",
          title: "Four-Element Formula Student Front Wing Optimisation",
          summary:
            "CFD-driven aerodynamic design of a four-element front wing for Falcon E Racing\u2019s E2 vehicle, optimised using a Multi-Objective Genetic Algorithm.",
          cardSummary: [
            "Aerodynamically designed and optimised a four-element front wing for the Formula Student car using two-dimensional steady-state CFD simulations in ANSYS Fluent, developed within the regulation-defined 250 mm height limit for aerodynamic devices ahead of the front tyre. The computational domain included the front section of the tyre with a rotating-wall boundary condition, capturing the interaction between the front-wing wake, ground effect, and tyre flow field. The k\u2013\u03c9 SST turbulence model was used so the boundary layer across each slot gap was resolved rather than modelled.",
            "A staged Multi-Objective Genetic Algorithm process optimised ground clearance and angles of attack, then the element gaps, then the overlaps, repeating until the downforce converged. The final configuration generated 227.49 N/m of downforce against 44.9 N/m of drag \u2014 an aerodynamic efficiency of C\u2097/C\u2094 = 5.066 \u2014 while directing airflow over the front tyre to reduce wake formation and tyre-induced drag.",
          ],
          tools: ["ANSYS Fluent", "MOGA", "k\u2013\u03c9 SST", "CAD", "Carbon Fibre"],
          image: "assets/images/projects/falcon-aero/cfd-multi-element.webp",
          imageFit: "contain",
          detailPage: "falcon-e-racing.html#aerodynamic-design",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
          objectives: [
            "Maximise downforce and aerodynamic efficiency from a four-element front wing within Formula Student regulations.",
            "Direct airflow over and around the front tyre to reduce wake formation and tyre-induced drag.",
            "Carry the design through composite manufacture to integration with the vehicle.",
          ],
          challenges:
            "Representing the interaction between the front-wing wake and the tyre flow field meant including the front section of the tyre in the computational domain with a rotating-wall boundary condition. The geometry also had to remain feasible for hand-layup composite manufacture and compliant with Formula Student ground-clearance and packaging rules.",
          methodology:
            "Two-dimensional steady-state CFD simulations in ANSYS Fluent, with the tyre represented by a rotating-wall boundary condition, were driven by Multi-Objective Genetic Algorithm optimisation across angle of attack, ground clearance, element gaps, and overlaps. The resulting geometry was taken through fibreglass mould fabrication, mould preparation and release systems, carbon-fibre layup, production of 3D-printed aerofoil ribs, wing-element construction, multi-element alignment and assembly, and final integration with the vehicle.",
          technologies: [
            "ANSYS Fluent",
            "Multi-Objective Genetic Algorithm",
            "CAD",
            "Carbon-Fibre Composite Manufacturing",
          ],
          outcomes:
            "The simulation results supported data-driven decisions throughout front-wing development, and the wider aerodynamic package \u2014 front wing, rear wing, and aerodynamic body elements \u2014 was manufactured and integrated onto E2, the second vehicle built by Sri Lanka\u2019s first Formula Student car project.",
          gallery: [
            "assets/images/projects/falcon-aero/cfd-wing-tyre.webp",
            "assets/images/projects/falcon-aero/cfd-wing-contour.webp",
            "assets/images/projects/falcon-aero/cfd-tyre-domain.webp",
            "assets/images/projects/falcon-aero/front-wing-cad.webp",
            "assets/images/projects/falcon-aero/moga-design-table.webp",
            "assets/images/projects/falcon-aero/downforce-convergence.webp",
            "assets/images/experience/falcon/wing-assembly.webp",
          ],
        },
      ],
    },
    {
      category: "Propulsion & Thermofluids",
      // Single full-width cards, matching the other project sections.
      layout: "single",
      projects: [
        {
          id: "propeller-bet",
          title: "Propeller Design Using Blade Element Theory",
          summary:
            "Design of a twin two-bladed propeller system for a 1,500 kg aircraft, sized with an iterative MATLAB Blade Element Theory model and modelled in SolidWorks.",
          cardSummary: [
            "Designed a twin two-bladed propeller system for a 1,500 kg aircraft using Blade Element Theory. Developed a MATLAB-based iterative model to determine blade chord, twist, thrust, torque, and efficiency, selected the NACA 6415 aerofoil, and created the final 3D propeller model in SolidWorks. The completed design achieved the required take-off thrust with an estimated efficiency of approximately 75.9%.",
          ],
          tools: ["MATLAB", "Blade Element Theory", "SolidWorks", "NACA 6415", "Momentum Theory"],
          image: "assets/images/projects/propeller/p1.webp",
          imageFit: "contain",
          detailPage: "propeller-design.html",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
          objectives: [
            "Size a twin two-bladed propeller system to take a 1,500 kg aircraft to a 220 km/h take-off speed within a 1 km sea-level runway.",
            "Determine blade chord, twist, thrust, torque, and efficiency distributions along the span.",
            "Produce a manufacturable 3D propeller model from the calculated geometry.",
          ],
          challenges:
            "Blade-tip speed had to be limited to Mach 0.74 to avoid excessive compressibility effects, noise, and efficiency loss. That capped the propeller radius at roughly 0.78 m, so the required blade loading had to be met through the chord and twist distributions rather than through diameter.",
          methodology:
            "Total thrust demand was derived from aircraft acceleration, aerodynamic drag, and the assumed climb angle at take-off, giving approximately 8.1 kN overall and about 4.05 kN per propeller. With a 6,000 rpm engine and a 1:2 reduction gearbox producing 3,000 rpm at the propeller, the aerodynamic portion of each blade was divided into 20 radial elements. A MATLAB routine seeded axial and tangential induction velocities, computed the local flow conditions, thrust, and torque for each element, then updated the inductions using momentum-theory relationships until successive values fell within a convergence tolerance of 10\u207b\u2075. NACA 6415 was selected after comparing several sections, producing a high lift coefficient at comparatively low drag (C_L = 1.791, C_D = 0.02515 at roughly 13\u00b0 angle of attack). The final geometry was lofted in SolidWorks through aerofoil sections scaled to the local chord and rotated to the calculated pitch angle, then patterned into a two-bladed hub.",
          technologies: [
            "MATLAB",
            "Blade Element Theory",
            "Momentum Theory",
            "SolidWorks",
            "NACA 6415 Aerofoil",
          ],
          outcomes:
            "The first blade element converged after 12 iterations and most others within 7 to 11. Each propeller produced approximately 4,134 N of thrust and 1,059 Nm of torque, giving about 8,264 N and 2,118 Nm for the pair \u2014 slightly above the 8.1 kN requirement. The design achieved an advance ratio of about 0.783, thrust coefficient 0.228, torque coefficient 0.0374, power coefficient 0.235, propeller efficiency of approximately 75.9%, and a required engine power of about 332.7 kW.",
          gallery: [
            "assets/images/projects/propeller/propeller-hub.webp",
          ],
        },
        {
          id: "gas-turbine-biodiesel",
          title: "Gas Turbine Performance on Biodiesel Blends",
          summary:
            "Current research refurbishing a small gas turbine model to investigate how biodiesel blends affect its output power and overall performance.",
          tools: ["Gas Turbines", "Combustion", "Experimental Testing"],
          image: "assets/images/experience/srilankan/engine-module.webp",
          objectives: [
            "Refurbish a small gas turbine model and return it to a serviceable, repeatable test condition.",
            "Investigate how biodiesel blends affect the engine\u2019s output power and overall performance.",
          ],
          challenges:
            "Differences in performance between fuel blends can only be attributed to the fuel once the rig itself runs consistently, so restoring the gas turbine model to a reliable test condition is a prerequisite for the comparison.",
          methodology:
            "Refurbishment of the small gas turbine model, followed by experimental running across biodiesel blends with output power and overall engine performance compared between fuels.",
          technologies: [
            "Gas Turbine Engines",
            "Combustion",
            "Alternative Aviation Fuels",
            "Experimental Propulsion Testing",
          ],
          outcomes:
            "Ongoing research. The work is strengthening my interest in gas turbine engines, combustion, alternative aviation fuels, and experimental propulsion research.",
        },
      ],
    },
    {
      category: "Structures & FEA",
      // Single full-width cards — both write-ups need the room.
      layout: "single",
      projects: [
        {
          id: "sailplane-wing",
          title: "Design of a Sailplane with a Semi-Monocoque Wing",
          summary:
            "Aerodynamic, structural, and manufacturing design of a high-performance sailplane wing for a 300 kg aircraft, taken from aerofoil selection through to a complete SolidWorks assembly.",
          cardSummary: [
            "Designed a high-performance sailplane wing by integrating aerodynamic optimization, analytical structural design, material selection, and manufacturing planning. XFLR5 and MATLAB were used to compare aerofoils, optimize the aspect and taper ratios, evaluate glide performance and longitudinal stability, and determine spanwise lift, drag, shear, bending, and torsional loads.",
            "Analytical methods were then applied to size the dual-spar wing structure and assess spar stresses, deflection, shear flow, skin buckling, ribs, and stringers. The project also included a Design for X phase covering material availability, manufacturability, component fabrication, joining methods, assembly sequence, and the development of the complete wing model in SolidWorks.",
          ],
          tools: ["XFLR5", "MATLAB", "SolidWorks", "Semi-Monocoque", "Aluminium Alloys"],
          image: "assets/images/projects/sailplane/wing2.webp",
          imageFit: "contain",
          detailPage: "sailplane-wing.html",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
          objectives: [
            "Size a high-performance sailplane wing for a 300 kg aircraft from aerofoil selection through to a manufacturable assembly.",
            "Establish the spanwise load distributions and size the dual-spar structure against them.",
            "Carry the design through material selection, buckling evaluation, and a manufacturing and assembly plan.",
          ],
          challenges:
            "Aerodynamic efficiency, structural mass, and manufacturability pull against each other: a high aspect ratio improves glide performance but raises root bending moments and tip deflection, while the thin skins that keep mass down are the panels most at risk of compression buckling.",
          methodology:
            "Seven glider aerofoils were compared in XFLR5 before selecting the WORTMANN FX 76-MP-120. MATLAB programs swept aspect and taper ratios through the finite-wing lift slope and Oswald efficiency factor, then produced the spanwise lift, weight, drag, shear, bending, and torsional distributions. The dual-spar wing box was sized using the lumped-area method, with plate-buckling equations setting stringer spacing.",
          technologies: ["XFLR5", "MATLAB", "SolidWorks", "Lumped-Area Method", "Aluminium 5056-H18", "Aluminium 2024-T3"],
          outcomes:
            "The selected aerofoil reached a two-dimensional lift-to-drag ratio of about 192.6, with the finite wing peaking near 18.83 at 5.5°. Best-glide speed came out at roughly 17.94 m/s against a theoretical 17.98 m/s. The two spars weighed about 41.71 kg before lightening holes, with a predicted tip deflection of 0.5848 m against a 0.8 m limit.",
        },
        {
          id: "fs-front-wing-structure",
          title: "Structural Design and Fabrication of a Four-Element Front Wing",
          summary:
            "Lightweight carbon-composite structure for the Formula Student front wing, designed to hold the optimised aerofoil geometry under aerodynamic load.",
          cardSummary: [
            "Designed and fabricated the structural members of the four-element front wing with the objective of achieving a lightweight yet sufficiently stiff assembly capable of maintaining the optimised aerodynamic shape under load. Each aerofoil element combined upper and lower carbon-fibre skins, internal 3D-printed PLA ribs, and 3 mm laser-cut aluminium spars acting as the primary spanwise load-bearing members.",
            "The skins were produced through a purpose-developed wet-layup process using 3D-printed moulds sanded to 1200 grit, combined fast- and slow-curing resin systems, and vacuum bagging to consolidate the laminate and hold the aerofoil profile through cure. PVC-board endplates with laser-cut honeycomb patterns and acrylic collars at the bolted joints completed the assembly.",
          ],
          tools: ["Carbon Fibre", "Wet Layup", "Vacuum Bagging", "SolidWorks", "3D Printing"],
          image: "assets/images/projects/falcon-aero/fw1.webp",
          imageFit: "contain",
          detailPage: "falcon-e-racing.html#front-wing-structure",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
        },
        {
          id: "fs-rear-wing-structure",
          title: "Structural Design and Fabrication of the Rear Wing",
          summary:
            "Four-element rear wing built as a lightweight semi-monocoque assembly with sandwich-panel endplates and integrated mounting ribs.",
          cardSummary: [
            "Designed the rear wing as a lighter and less structurally complex assembly than the front wing, while retaining enough stiffness to hold the required aerodynamic geometry under load. Four aerofoil elements were connected by two endplates, each element built from internal spars, ribs, and skin panels to form a lightweight semi-monocoque structure that transfers load into the vehicle mounting system.",
            "Mounting loads were carried by the first element, whose outer ribs were 3D-printed in PLA while the two inner ribs were laser cut from 6 mm aluminium to stiffen the bracket interfaces. The endplates were built as sandwich panels — two carbon-fibre skins over a honeycomb-patterned PVC core — which cut mass against the previous solid-core design while increasing section stiffness.",
          ],
          tools: ["Carbon Fibre", "Sandwich Panel", "Semi-Monocoque", "SolidWorks", "3D Printing"],
          image: "assets/images/projects/falcon-aero/rw1.webp",
          imageFit: "contain",
          detailPage: "falcon-e-racing.html#rear-wing-structure",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
        },
        {
          id: "wing-stress",
          title: "Experimental and Numerical Stress Analysis of a Rectangular Wing",
          summary:
            "Strain-gauge testing and ANSYS Static Structural modelling of a rectangular wing under front- and rear-spar tip loads, used to select a landing-gear mounting location.",
          cardSummary: [
            "Investigated how the location of a concentrated landing-gear-type load affects the stress distribution within a rectangular wing structure, comparing a 133.45 N load applied at the front-spar tip against the same load at the rear-spar tip. The structural response was studied using both experimental strain measurements and finite element analysis, to compare load transfer through the spars, ribs, and skin panels.",
            "Strain-gauge and rosette readings were processed through strain-transformation relationships and Mohr’s circle, while a simplified SolidWorks model was analysed in ANSYS Static Structural after a mesh-independence study. Moving the load aft reduced the maximum measured stress by about 16.5%, and the rear spar was recommended as the more suitable landing-gear mounting location.",
          ],
          tools: ["ANSYS Static Structural", "SolidWorks", "Strain Gauges", "Mohr’s Circle", "Aluminium 6061-T6"],
          image: "assets/images/projects/wing-stress/fea-5.webp",
          imageFit: "contain",
          detailPage: "wing-stress-analysis.html",
          detailPageLabel: "Explore the full project",
          cardLinksToPage: true,
          objectives: [
            "Compare how a concentrated landing-gear-type load transfers through the spars, ribs, and skin when applied at the front- versus rear-spar tip.",
            "Validate a finite element model of the wing against experimental strain measurements.",
            "Recommend the more suitable spar for landing-gear attachment.",
          ],
          challenges:
            "The two methods sample the structure very differently: strain gauges measure local normal strains only at the points where they are installed, while ANSYS reports the maximum equivalent stress anywhere in the model \u2014 including near bolt holes, edges, or concentrated load points where no gauge existed. Reconciling those results was the main source of deviation, particularly for the rear-spar case.",
          methodology:
            "The wing prototype was mounted as a cantilever using the TrueStructures strain measurement system, with uniaxial gauges on the front-spar flanges and rear-spar web and three rectangular rosettes on the front-spar web and the upper and lower skins. Unloaded and loaded voltages were recorded for a 30 lb (133.45 N) load applied at each spar tip and converted into strain and stress using the gauge factor and aluminium material properties; rosette data were processed through strain-transformation relationships and Mohr\u2019s circle to obtain principal strains, principal stresses, principal directions, and maximum in-plane shear stress. A detailed SolidWorks model \u2014 front and rear spars, upper and lower skins, internal ribs, lightening holes, spar flanges, and root mounting holes, with rivets and non-structural details removed \u2014 was assigned Aluminium 6061-T6, imported into ANSYS Static Structural, and meshed with tetrahedral elements after a mesh-independence study, settling at approximately 171,817 elements. The root bolt holes were modelled as fixed supports to represent the experimental clamping arrangement.",
          technologies: [
            "ANSYS Static Structural",
            "SolidWorks",
            "Strain-Gauge Rosettes",
            "Mohr\u2019s Circle",
            "Aluminium 6061-T6",
          ],
          outcomes:
            "The highest measured stress occurred at gauge B on the lower flange of the front spar in both load cases: approximately 69.62 MPa for front-spar loading and 58.16 MPa for rear-spar loading, a reduction of about 16.5% when the load moved aft. The FEA gave 2.422 mm deformation and 74.694 MPa equivalent stress for front-spar loading against 2.491 mm and 77.411 MPa for rear-spar loading, agreeing with experiment to within approximately 7.3% for the front spar and 33.1% for the rear. The rear spar was recommended as the more suitable landing-gear mounting location, with a load-spreading bracket and local reinforcement around the attachment region to control stress concentration.",
        },
      ],
    },
  ],

  // Photo gallery — every image supplied in the source image set.
  photoGallery: [
    { src: "assets/images/experience/srilankan/cockpit.webp", caption: "Airbus cockpit familiarisation", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/training-centre.webp", caption: "SriLankan Airlines training centre", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/training-team.webp", caption: "Engineering training team", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/hangar.webp", caption: "Wide-body base-maintenance hangar", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/engine-shop.webp", caption: "Engines under overhaul in the engine workshop", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/engine-module.webp", caption: "Beside a turbofan engine", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/engine-module-work.webp", caption: "Technicians working on an engine module", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/engine-inspection.webp", caption: "Borescope inspection of an engine", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/trent-fan-work.webp", caption: "Rolls-Royce Trent 700 fan blades removed for replacement", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/borescope.webp", caption: "Borescope inspection display", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/wheel-stand.webp", caption: "Aircraft wheel unit on the assembly stand", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/wheel-assembly.webp", caption: "Assembling the wheel hub onto the tyre", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/tyre-fitting.webp", caption: "Fitting the wheel hub into an aircraft tyre", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/wheel-hub.webp", caption: "Dismantled wheel hub with drive keys", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/bearing-grease.webp", caption: "High-temperature bearing grease application", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/tyre-store.webp", caption: "Aircraft tyres awaiting fitment", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/slide-raft.webp", caption: "Slide raft inflated for leakage inspection", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/life-jackets.webp", caption: "Life jackets folded for inspection and vacuum packing", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/safety-label.webp", caption: "Serviceable label recording part number, serial number and expiry", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/composite-repair.webp", caption: "Vacuum-bagging a composite repair", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/composite-patch.webp", caption: "Carbon-fibre repair patch bonded and taped for curing", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/structural-repair.webp", caption: "Riveted doubler repair masked for corrosion protection", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/structural-doubler.webp", caption: "Fuselage skin repair pinned out with clecos", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/sheet-metal-equipment.webp", caption: "Sheet-metal forming equipment", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/hydraulic-press.webp", caption: "Hydraulic press in the structural workshop", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/ndt-wheel.webp", caption: "Eddy-current inspection of a wheel hub", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/ndt-uv.webp", caption: "Fluorescent penetrant indications under ultraviolet light", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/penetrant-booth.webp", caption: "Wheel hub under ultraviolet examination in the penetrant booth", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/magnetic-particle.webp", caption: "Magnetic-particle inspection coil fixture", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/actuator-test-rig.webp", caption: "Rudder actuator hydraulic test rig", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/accessories-bench.webp", caption: "Line-replaceable unit test bench", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/battery-maintenance.webp", caption: "Battery charging and analysing rack", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/srilankan/battery-cells.webp", caption: "Aircraft Nickel–Cadmium battery cells", group: "SriLankan Airlines Engineering" },
    { src: "assets/images/experience/falcon/e2-night.webp", caption: "E2 with its completed aerodynamic package", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/e2-track.webp", caption: "E2 during track testing", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/e2-rear-view.webp", caption: "Rear aerodynamic package on track", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/e2-display.webp", caption: "E2 on public display", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/vehicle-launch.webp", caption: "E2 vehicle launch — Unleashed 2G", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/aero-component.webp", caption: "Carbon-composite aerodynamic element", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/wing-assembly.webp", caption: "Multi-element wing assembly with 3D-printed ribs", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/carbon-body.webp", caption: "Carbon-composite body panel", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/mould-team.webp", caption: "Aerodynamics team with the fibreglass moulds", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/fibreglass-mould.webp", caption: "Prepared fibreglass mould", group: "Falcon E Racing" },
    { src: "assets/images/experience/falcon/fibreglass-layup.webp", caption: "Fibreglass layup during mould fabrication", group: "Falcon E Racing" },
    { src: "assets/images/projects/falcon-aero/cfd-multi-element.webp", caption: "Velocity contours around the four-element front wing", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/cfd-wing-tyre.webp", caption: "Front-wing wake interacting with the rotating tyre", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/cfd-wing-contour.webp", caption: "Velocity field across the wing elements", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/cfd-tyre-domain.webp", caption: "Full computational domain with the tyre", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/front-wing-cad.webp", caption: "Dimensioned four-element front-wing geometry", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/moga-design-table.webp", caption: "Multi-Objective Genetic Algorithm design points", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/falcon-aero/downforce-convergence.webp", caption: "Downforce convergence history", group: "Formula Student Aerodynamics" },
    { src: "assets/images/projects/fyp/uav-flight.webp", caption: "The fabricated UAV in flight", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/uav-field.webp", caption: "The completed 2.5 m span UAV before a test flight", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/uav-front.webp", caption: "UAV front view on the test field", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/wing-ribs.webp", caption: "Laser-cut plywood ribs on the carbon-fibre spar", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/printed-pod.webp", caption: "3D-printed fuselage pod", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/printed-parts.webp", caption: "3D-printed airframe components", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/blubaby-flight.webp", caption: "Blu-Baby validation aircraft in flight", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/test-flight.webp", caption: "Flight testing in progress", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/team-presentation.webp", caption: "Project presentation with the UAV", group: "Final Year Project" },
    { src: "assets/images/projects/fyp/poster.webp", caption: "Final-year project research poster", group: "Final Year Project" },
    { src: "assets/images/projects/cfd/velocity-contour.webp", caption: "Velocity magnitude around the NREL S809 aerofoil", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/pressure-contour.webp", caption: "Static pressure distribution around the aerofoil", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/velocity-contour-high-aoa.webp", caption: "Velocity field approaching stall", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/pressure-contour-high-aoa.webp", caption: "Static pressure field approaching stall", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/mesh-overview.webp", caption: "Structured C-type mesh around the aerofoil", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/mesh-near-wall.webp", caption: "Near-wall mesh refinement at the aerofoil surface", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/domain-boundary-conditions.webp", caption: "Computational domain and boundary conditions", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/cl-convergence.webp", caption: "Lift-coefficient convergence history", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/cd-convergence.webp", caption: "Drag-coefficient convergence history", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/ld-convergence.webp", caption: "Lift-to-drag ratio convergence history", group: "CFD Analysis" },
    { src: "assets/images/projects/cfd/residuals.webp", caption: "Solution residuals", group: "CFD Analysis" },
    { src: "assets/images/projects/propeller/propeller-render.webp", caption: "SolidWorks model of the two-bladed propeller", group: "Propeller Design" },
    { src: "assets/images/projects/propeller/propeller-hub.webp", caption: "Propeller hub and blade root geometry", group: "Propeller Design" },
  ],

  awards: [
    {
      title: "First Class Division",
      organisation: "University of Moratuwa",
      year: "2026",
      description:
        "BSc (Hons) Mechanical Engineering, specialised in the Aeronautical stream, completed with a First Class Division and a GPA of 3.8/4.00.",
    },
    {
      title: "Dean\u2019s List Recognition",
      organisation: "Faculty of Engineering, University of Moratuwa",
      year: "2022 \u2014 2026",
      description:
        "Named to the Dean\u2019s List for academic performance in Semesters 2, 4, 6, and 7.",
    },
    {
      title: "Island Rank 684 \u2014 G.C.E. Advanced Level",
      organisation: "Bandaranayake College, Gampaha",
      year: "2020",
      description:
        "Two A grades and a B in Combined Mathematics, Physics, and Chemistry, with a Z-score of 2.1187 and an island rank of 684.",
    },
    {
      title: "Nine A Grades \u2014 G.C.E. Ordinary Level",
      organisation: "Bandaranayake College, Gampaha",
      year: "2017",
      description:
        "Completed the G.C.E. Ordinary Level examination with nine A grades.",
    },
    {
      title: "Aerodynamics Lead, Sri Lanka\u2019s First Formula Student Car",
      organisation: "Falcon E Racing, University of Moratuwa",
      year: "E2 Programme",
      description:
        "Led the aerodynamic package development for E2, the second vehicle of Sri Lanka\u2019s first Formula Student car project, from CFD optimisation through composite manufacture to vehicle integration.",
    },
  ],

  interests: [
    { name: "High-Speed & Hypersonic Aerodynamics", icon: "wind" },
    { name: "Aeroelasticity", icon: "cube" },
    { name: "Propulsion & Combustion Systems", icon: "sun" },
    { name: "Flight Dynamics & Control", icon: "send" },
    { name: "Experimental Aerospace Testing", icon: "camera" },
    { name: "Design, Fabrication & Flight Testing", icon: "printer" },
  ],
};
