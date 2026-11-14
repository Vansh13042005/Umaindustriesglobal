  /* =========================================================
    PRODUCT IMAGE DATA
  ========================================================= */


  /* =========================================================
    TUBE FITTINGS IMAGES
  ========================================================= */

  const tubeFittingImages = Object.entries(
    import.meta.glob("../assets/tube-fittings/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    ACCESSORIES IMAGES
  ========================================================= */

  const accessoryImages = Object.entries(
    import.meta.glob("../assets/accessories/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    DIAPHRAGM SEAL IMAGES
  ========================================================= */

  const diaphragmSealImages = Object.entries(
    import.meta.glob(
      "../assets/diaphragm-seal-images/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        query: "?url",
        import: "default",
      }
    )
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    INSTRUMENTATION MANIFOLD VALVE IMAGES
  ========================================================= */

  const instrumentationManifoldValveImages = Object.entries(
    import.meta.glob(
      "../assets/Instrumentation manifold valve/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        query: "?url",
        import: "default",
      }
    )
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    DOUBLE BLOCK AND BLEED VALVE IMAGES
  ========================================================= */

  const instrumentDoubleBlockAndBleedValveImages = Object.entries(
    import.meta.glob(
      "../assets/Instrument double block and bleed valve/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        query: "?url",
        import: "default",
      }
    )
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    INSTRUMENTATION NEEDLE VALVE IMAGES
  ========================================================= */

  const instrumentationNeedleValveFiles = Object.entries(
    import.meta.glob(
      "../assets/Instrumentation needle valve/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        query: "?url",
        import: "default",
      }
    )
  ).sort(([a], [b]) => a.localeCompare(b));


  /* =========================================================
    BALL VALVE IMAGES
  ========================================================= */

  const Ballvalve = Object.entries(
    import.meta.glob("../assets/Ballvalve/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));


  /* =========================================================
    TEST PUMP IMAGES
  ========================================================= */

  const Testpump = Object.entries(
    import.meta.glob("../assets/Testpump/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => ({
      path,
      image,
    }));



  /* =========================================================
    TUBE FITTING NAMES
  ========================================================= */

  const tubeFittingNames = [
    "Male Connector",
    "Male Elbow 90 Deg",
    "Male Elbow 45 Deg",
    "Male Run Tee",
    "Male Branch Tee",
    "Male Bulkhead Connector",
    "Male Tube Adaptor",
    "Female Connector",
    "Female Elbow 90 Deg",
    "Female Run Tee",
    "Female Branch Tee",
    "Female Bulkhead Connector",
    "Female Tube Adaptor",
    "Union Tube Straight",
    "Elbow Union 90 Deg",
    "Tee Union 90 Deg",
    "Cross Union",
    "Bulkhead Union Tube",
    "Reducer Tube",
    "Pipe Butt Weld Connector",
    "End Closure for Tube",
    "End Closure for Fittings",
    "Spare Nut",
    "Spare Ferrule Set",
  ];


  /* =========================================================
    INSTRUMENTATION NEEDLE VALVE NAMES
  ========================================================= */

  const instrumentationNeedleValveNames = [
    "Instrumentation Needle Valve",
    "Needle Valve Tube X Tube",
    "Needle Valve Angle",
    "Needle Valve With Drain",
    "Multi Part Needle Valve",
    "Block And Bleed Valve",
  ];


  /* =========================================================
    ACCESSORY NAMES
  ========================================================= */

  const accessoryNames = [
    "AIR  HEADER(AIR MANIFOLD)",
    "THERMOWELL  FLANGED",
    "CONDENSATE/SEAL POT(CP)",
    "BAR  STOCK  THERMOWELL",
    "COOLING  TOWER (CLT)",
    "FABRICATED  THERMOWELL  THREADED",
    "Pressure Connection",
    "Mounting Flange",
  ];


  /* =========================================================
    DIAPHRAGM SEAL NAMES
  ========================================================= */

  const diaphragmSealNames = [
    "QUICK CLAMP CONNECTION TYPE(TC)",
    "Diaphragm Seal Assembly",
    "SANDWICH FLUSH DIAPHRAGM(SDS)",
    "HEAVY DUTY MINI SEAL(DHM)",
    "THREADED FLUSH SEAL(FDT)",
    "FLUSH DIAPHRAGM WITH ROTATABLE FLANGE",
    "DIRECT COUPLED TYPE SEAL(DDS)",
    "DIRECT FLUSH FLANGE SEAL(DFF)",
  ];


  /* =========================================================
    INSTRUMENTATION MANIFOLD VALVE NAMES
  ========================================================= */

  /* =========================================================
    INSTRUMENTATION MANIFOLD VALVE NAMES
  ========================================================= */

  const instrumentationManifoldValveNames = [
    "Pressure Relief Valve",
    "2 Valve Manifold R Type",
    "2 Valve Manifold T Type",
    "3 Valve Manifold R Type",
    "3 Valve Manifold T Type",
    "3 Valve Manifold H Type",
    "5 Valve Manifold R Type",
    "5 Valve Manifold T Type",
    "5 Valve Manifold H Type",
    "Mono Flange (MF1)",
    "Mono Flange (MF2)",
    "Mono Flange (MF3)",
  ];


  /* =========================================================
    DOUBLE BLOCK AND BLEED NAMES
  ========================================================= */

  const doubleBlockAndBleedNames = [
    "Instrument Double Block and Bleed Valve",
    "Double Block Valve",
    "Double Block and Bleed Assembly",
    "Instrument Isolation Valve",
    "Compact Double Block and Bleed",
  ];


  /* =========================================================
    TEST PUMP NAMES
  ========================================================= */

  const testPumpNames = [
    "Hand Test Pump",
    "PRESSURE TEST PUMP / TESTER(CT2)",
    "PRESSURE TEST PUMP / TESTER (CT3)",
    "PRESSURE TEST PUMP/ TESTER (CTI)",
    "POINTER  PULLER (PP)",
  ];



  /* =========================================================
    BUILD TUBE FITTING DATA
  ========================================================= */

  const tubeFittingProducts = tubeFittingImages.map(
    ({ path, image }, index) => ({
      code: `TF-${String(index + 1).padStart(2, "0")}`,
      name:
        tubeFittingNames[index] ||
        `Tube Fitting ${index + 1}`,
      image,
      path,
    })
  );


  /* =========================================================
    BUILD INSTRUMENTATION NEEDLE VALVE DATA
  ========================================================= */

  const instrumentationNeedleValveProducts =
    instrumentationNeedleValveFiles.map(
      ([path, image], index) => ({
        code: `NV-${String(index + 1).padStart(2, "0")}`,
        name:
          instrumentationNeedleValveNames[index] ||
          `Instrumentation Needle Valve ${index + 1}`,
        image,
        path,
      })
    );
/* =========================================================
   BALL VALVE NAMES
========================================================= */

const ballValveNames = [
  "Ball Valve (BV)",
  "Ball Valve High Pressure (BVHP)",
  "Ball Valve Panel Mounting (BVPM)",
  "Three Way Ball Valve (3BVP)",
  "Gauge Cock 2 Way (GC2)",
  "Gauge Cock 3 Way (GC3)",
];


/* =========================================================
   BUILD BALL VALVE DATA
========================================================= */

const ballValveProducts = Ballvalve.map(
  ({ path, image }, index) => ({
    code:
      ballValveNames[index]
        ?.match(/\(([^)]+)\)/)?.[1] ||
      `BV-${String(index + 1).padStart(2, "0")}`,

    name:
      ballValveNames[index]
        ?.replace(/\s*\([^)]*\)/, "") ||
      `Ball Valve ${index + 1}`,

    image,
    path,
  })
);

  /* =========================================================
    BUILD ACCESSORY DATA
  ========================================================= */

  const accessoryProducts = accessoryImages.map(
    ({ path, image }, index) => ({
      code: `ACC-${String(index + 1).padStart(2, "0")}`,
      name:
        accessoryNames[index] ||
        `Accessory ${index + 1}`,
      image,
      path,
    })
  );


  /* =========================================================
    BUILD DIAPHRAGM SEAL DATA
  ========================================================= */

  const diaphragmSealProducts = diaphragmSealImages.map(
    ({ path, image }, index) => ({
      code: `DS-${String(index + 1).padStart(2, "0")}`,
      name:
        diaphragmSealNames[index] ||
        `Diaphragm Seal ${index + 1}`,
      image,
      path,
    })
  );


  /* =========================================================
    BUILD INSTRUMENTATION MANIFOLD DATA
  ========================================================= */

  const instrumentationManifoldValveProducts =
    instrumentationManifoldValveImages.map(
      ({ path, image }, index) => ({
        code: `IMV-${String(index + 1).padStart(2, "0")}`,

        name:
          instrumentationManifoldValveNames[index] ||
          `Instrumentation Manifold Valve ${index + 1}`,

        image,
        path,
      })
    );


  /* =========================================================
    BUILD DOUBLE BLOCK AND BLEED DATA
  ========================================================= */

  const doubleBlockAndBleedProducts =
    instrumentDoubleBlockAndBleedValveImages.map(
      ({ path, image }, index) => ({
        code: `DBBV-${String(index + 1).padStart(2, "0")}`,
        name:
          doubleBlockAndBleedNames[index] ||
          `Double Block and Bleed Valve ${index + 1}`,
        image,
        path,
      })
    );


  /* =========================================================
    BUILD TEST PUMP DATA
  ========================================================= */

  const testPumpProducts = Testpump.map(
    ({ path, image }, index) => ({
      code: `TP-${String(index + 1).padStart(2, "0")}`,
      name:
        testPumpNames[index] ||
        `Test Pump ${index + 1}`,
      image,
      path,
    })
  );



  /* =========================================================
    PRODUCTS
  ========================================================= */

  export const PRODUCTS = [

    /* =======================================================
      01. INSTRUMENTATION NEEDLE VALVE
    ======================================================= */

    {
      code: "NV-01",
      name: "Instrumentation Needle Valve",

      image:
        instrumentationNeedleValveProducts[0]?.image,

      gallery:
        instrumentationNeedleValveProducts,

      category: "Valves",

      summary:
        "Precision flow-control valve with a fine-threaded stem for smooth, accurate regulation in instrumentation and high-pressure applications.",

      related: [
        "5VMT",
        "BV-02",
        "MPN-03",
        "IMV-04",
      ],
    },


    /* =======================================================
      02. 5 VALVE MANIFOLD
    ======================================================= */

    {
      code: "5VMT",

      name: "5 Valve Manifold Type",

      image:
        "https://static.wixstatic.com/media/a0c39b_976965f92c6841a0a7683edab9e5f5d6~mv2.jpeg/v1/fill/w_980,h_826,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%204_14_39_PM.jpeg",

      category: "Manifolds",

      summary:
        "Compact, robust manifold built for accurate isolation, pressure measurement and controlled fluid flow in instrumentation systems.",

      related: [
        "NV-01",
        "3VMH",
        "IMV-04",
        "MF-1",
      ],
    },


    /* =======================================================
      03. MONO FLANGE
    ======================================================= */

    {
      code: "MF-1",

      name: "Mono Flange",

      image:
        "https://static.wixstatic.com/media/a0c39b_96a919ee15cf466aa23a32c6acbeb916~mv2.jpeg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%204_18_05_PM.jpeg",

      category: "Flanges",

      summary:
        "Direct-mount flange for instrument isolation, engineered for excellent sealing and dependable performance under high pressure.",

      related: [
        "5VMT",
        "IMV-04",
        "PGA-05",
      ],
    },


    /* =======================================================
      04. BALL VALVE
    ======================================================= */

   {
  code: "BV-02",

  name: "Ball Valve",

  image:
    ballValveProducts[0]?.image,

  gallery:
    ballValveProducts,

  category: "Valves",

  summary:
    "Precision-engineered ball valves designed for reliable flow control, tight shut-off and dependable operation in industrial applications.",

  related: [
    "NV-01",
    "MPN-03",
    "TF-06",
    "IMV-04",
  ],
},


    /* =======================================================
      05. 3 VALVE MANIFOLD
    ======================================================= */

    {
      code: "3VMH",

      name: "3 Valve Manifold – H Type",

      image:
        "https://static.wixstatic.com/media/a0c39b_783364b119eb4f4fab37e319454e6c7c~mv2.jpeg/v1/fill/w_980,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%204_52_29_PM.jpeg",

      category: "Manifolds",

      summary:
        "Built for reliable pressure measurement and isolation on differential pressure instruments and process systems.",

      related: [
        "5VMT",
        "NV-01",
        "IMV-04",
      ],
    },


    /* =======================================================
      06. MULTI PART NEEDLE VALVE
    ======================================================= */

    {
      code: "MPN-03",

      name: "Multi Part Needle Valve",

      image:
        "https://static.wixstatic.com/media/a0c39b_3a9501f849e14f5ea5324854579e4302~mv2.jpeg/v1/fill/w_980,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%204_53_16_PM.jpeg",

      category: "Valves",

      summary:
        "Accurate flow regulation with durable, leak-resistant construction for demanding process and instrumentation duty.",

      related: [
        "NV-01",
        "BV-02",
        "TF-06",
      ],
    },


    /* =======================================================
      07. TUBE FITTINGS
    ======================================================= */

    {
      code: "TF-06",

      name: "Tube Fittings",

      image:
        tubeFittingProducts[0]?.image,

      gallery:
        tubeFittingProducts,

      category: "Tube Fittings",

      summary:
        "Compression and flare fittings engineered for leak-tight tube connections across instrumentation piping runs.",

      related: [
        "NV-01",
        "BV-02",
        "MPN-03",
      ],
    },


    /* =======================================================
      08. ACCESSORIES
    ======================================================= */

    {
      code: "ACC-01",

      name: "Accessories",

      image:
        accessoryProducts[0]?.image,

      gallery:
        accessoryProducts,

      category: "Accessories",

      summary:
        "Precision-engineered instrumentation accessories designed for reliable industrial and process applications.",

      related: [
        "TF-06",
        "NV-01",
        "BV-02",
      ],
    },


    /* =======================================================
      09. DIAPHRAGM SEAL
    ======================================================= */

    {
      code: "DS-07",

      name: "Diaphragm Seal",

      image:
        diaphragmSealProducts[0]?.image,

      gallery:
        diaphragmSealProducts,

      category: "Diaphragm Seal",

      summary:
        "Precision-engineered diaphragm seals designed to protect pressure instruments from corrosive, viscous and high-temperature process media.",

      related: [
        "TF-06",
        "NV-01",
        "BV-02",
      ],
    },


    /* =======================================================
      10. INSTRUMENTATION MANIFOLD VALVE
    ======================================================= */

    {
      code: "IMV-04",

      name: "Instrumentation Manifold Valve",

      image:
        instrumentationManifoldValveProducts[0]?.image,

      gallery:
        instrumentationManifoldValveProducts,

      category: "Instrumentation Manifold Valve",

      summary:
        "Precision-engineered instrumentation manifold valves designed for reliable isolation, pressure measurement and controlled process instrumentation applications.",

      related: [
        "NV-01",
        "5VMT",
        "3VMH",
        "BV-02",
      ],
    },


    /* =======================================================
      11. DOUBLE BLOCK AND BLEED VALVE
    ======================================================= */

    {
      code: "DBBV-08",

      name:
        "Instrument Double Block and Bleed Valve",

      image:
        doubleBlockAndBleedProducts[0]?.image,

      gallery:
        doubleBlockAndBleedProducts,

      category:
        "Instrument Double Block and Bleed Valve",

      summary:
        "Precision-engineered instrument double block and bleed valves designed for reliable isolation, pressure control and safe bleeding in instrumentation and process applications.",

      related: [
        "IMV-04",
        "NV-01",
        "BV-02",
        "5VMT",
      ],
    },


    /* =======================================================
      12. TEST PUMP
    ======================================================= */

    {
      code: "TP-09",

      name: "Test Pump",

      image:
        testPumpProducts[0]?.image,

      gallery:
        testPumpProducts,

      category: "Test Pump",

      summary:
        "Precision-engineered test pumps designed for accurate pressure testing, calibration and verification of pressure instruments in industrial applications.",

      related: [
        "IMV-04",
        "DBBV-08",
        "DS-07",
      ],
    },
  ];



  /* =========================================================
    INDUSTRIES
  ========================================================= */

  export const INDUSTRIES = [
    {
      name: "Oil & Gas",
      desc:
        "Reliable flow-control and instrumentation solutions for upstream and downstream operations.",
    },

    {
      name: "Power",
      desc:
        "Dependable instrumentation and flow-control solutions for power generation applications.",
    },

    {
      name: "Petrochemical",
      desc:
        "Process control solutions designed for demanding petrochemical environments.",
    },

    {
      name: "Pharmaceutical",
      desc:
        "Precision-engineered components for reliable and controlled pharmaceutical processes.",
    },

    {
      name: "Chemical",
      desc:
        "Precision components suitable for safe and reliable chemical processing systems.",
    },

    {
      name: "Water Treatment",
      desc:
        "Reliable valves and instrumentation components for water and treatment systems.",
    },
  ];



  /* =========================================================
    STATS
  ========================================================= */

  export const STATS = [
    {
      num: "10+",
      label: "Years of Experience",
    },

    {
      num: "50+",
      label: "Products",
    },

    {
      num: "100+",
      label: "Industrial Clients",
    },

    {
      num: "10+",
      label: "Industries Served",
    },
  ];



  /* =========================================================
    CONTACT
  ========================================================= */

  export const CONTACT = {
    address:
      "39, Omkar Estate, Near Mahadev Estate, CTM Ramol Road, Ramol, Ahmedabad, 382449",

    email:
      "umaindustries0626@gmail.com",

    phones: [
      "+91-7227977917",
      "+91-8200520855",
    ],

    saleExport:
      "+91-7265940710",
  };