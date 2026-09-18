export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge?: string;
  features: string[];
  commonProblems: { problem: string; solution: string }[];
  process: string[];
  brands: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair & Service',
    badge: 'Same Day Service in Gurgaon',
    shortDesc: 'Split, Window & Inverter AC repair, deep jet pump cleaning, PCB circuit fix, sensor and motor replacement at your doorstep.',
    fullDesc: 'NCR Cooling Centre is Gurugram’s trusted AC repair specialist. We provide complete doorstep diagnostics, indoor unit deep jet cleaning, PCB card repair, cooling coil replacement, blower motor repair, and seasonal maintenance across Sector 49, Golf Course Road, Sohna Road, and all DLF Phases.',
    image: '/images/services/ac-repair.jpg',
    features: [
      'Inverter & Non-Inverter Split AC Repair',
      'Window AC Repair & Servicing',
      'PCB Circuit Board Diagnosis & Repair',
      'High-Pressure Jet Pump Foam Cleaning',
      'Capacitor, Sensor & Fan Motor Replacement',
      'Water Leakage & Drainage Blockage Fix'
    ],
    commonProblems: [
      { problem: 'AC Not Cooling or Blowing Warm Air', solution: 'We check compressor status, capacitor strength, gas pressure, and clean dust clogged cooling fins.' },
      { problem: 'Water Dropping from Indoor Unit', solution: 'Unclog drain pipe blockage, clean condensation tray, and fix indoor unit inclination alignment.' },
      { problem: 'AC Tripping MCB or Not Turning On', solution: 'Diagnose PCB circuit short-circuits, relay faults, and wiring burnouts with genuine replacement parts.' },
      { problem: 'Unusual Noise or Vibration', solution: 'Balance blower wheel, inspect indoor fan motor bushings, and tighten outdoor mounting brackets.' }
    ],
    process: [
      '30-45 Mins Arrival at Doorstep in Gurgaon',
      'Comprehensive Multi-point System Inspection',
      'Upfront Explanation Before Work',
      'Genuine Parts Replacement with Warranty',
      'Post-service Temperature & Performance Check'
    ],
    brands: ['Voltas', 'Daikin', 'Hitachi', 'LG', 'Samsung', 'Carrier', 'Blue Star', 'Lloyd', 'Panasonic', 'Godrej', 'Mitsubishi'],
    faqs: [
      { q: 'How much time does AC repair take?', a: 'Routine servicing and minor repairs take around 45 to 60 minutes. Complex PCB repairs are usually completed on the same day.' },
      { q: 'Do you offer a warranty on AC repair?', a: 'Yes, we provide up to a 90-day warranty on genuine spare parts replaced and 30 days service warranty.' },
      { q: 'Which areas in Gurgaon do you serve for AC repair?', a: 'We serve all localities including Sector 49, Sarswati Kunj, Orchid Petals, Sohna Road, Golf Course Road, DLF Phase 1-5, and New Gurgaon.' }
    ]
  },
  {
    id: 'gas-filling',
    title: 'AC Gas Filling & Leak Repair',
    badge: '100% Genuine Refrigerant Gas',
    shortDesc: 'Certified R32, R410A, and R22 AC gas charging with nitrogen leak testing, vacuumization, and digital manifold gauge pressure testing.',
    fullDesc: 'Low refrigerant gas is the most frequent reason an AC stops cooling. NCR Cooling Centre uses high-accuracy manifold pressure gauges and digital instruments to identify microscopic copper tube leaks, repair flare joints, pull a deep vacuum, and refill pure 100% genuine refrigerant gas (R-32, R-410A, R-22) for maximum cooling efficiency.',
    image: '/images/services/ac-gas-filling.jpg',
    features: [
      'High-Pressure Nitrogen Leak Testing',
      'Brazing & Copper Pipe Joint Leak Seal',
      'Vacuum Pump Evacuation to remove moisture',
      'Digital Manifold Gauge Pressure Calibration',
      'Genuine R32, R410A, and R22 Gas Cylinders',
      'Sub-cooling & Superheat Temperature Verification'
    ],
    commonProblems: [
      { problem: 'Ice Formation on AC Copper Pipes', solution: 'Indicates severe refrigerant shortage; we locate the leak source, braze it, and refill full gas.' },
      { problem: 'AC Running but Room Stays Warm', solution: 'We test running suction pressure with a manifold gauge to verify exact gas level deficiency.' },
      { problem: 'Hissing Sound Near Outdoor Unit', solution: 'Sign of active gas leak at service valve or condenser bend; needs prompt leak brazing.' }
    ],
    process: [
      'Connect Manifold Pressure Gauge to Service Port',
      'Perform Nitrogen Pressure & Soap Leak Detection',
      'Brazing & Tightening Flare Nuts',
      'Deep Vacuumizing with Rotary Vacuum Pump',
      'Weight-Based Gas Charging as per Company Specs'
    ],
    brands: ['All Split ACs', 'All Inverter ACs', 'All Window ACs', 'Cassette ACs', 'Tower ACs'],
    faqs: [
      { q: 'Why is vacuuming necessary before gas filling?', a: 'Vacuuming removes air and moisture from inside the copper coils. Without vacuuming, moisture reacts with oil and burns out the compressor.' },
      { q: 'How do I know if my AC needs gas refilling?', a: 'If your AC compressor is running but air from vents is not chilled, or if thin copper pipes have white frost, gas is deficient.' }
    ]
  },
  {
    id: 'refrigerator',
    title: 'Refrigerator Repair & Service',
    badge: 'All Single & Double Door Fridges',
    shortDesc: 'Doorstep repair for Single Door, Double Door, Side-by-Side & Inverter refrigerators. Compressor, cooling coil, defrost timer, and gas charging.',
    fullDesc: 'Keep your food fresh and healthy with Gurgaon’s trusted fridge repair service. From compressor failure and cooling loss to gas leakage, broken door seals, and defrost issues, NCR Cooling Centre fixes all models with original company spare parts at your doorstep.',
    image: '/images/services/refrigerator.jpg',
    features: [
      'Single Door, Double Door & Triple Door Repair',
      'Side-by-Side French Door Refrigerator Repair',
      'Inverter Linear Compressor Replacement',
      'Defrost Heater, Bimetal & Timer Fixes',
      'Capillary Tube Unclogging & Gas Charging',
      'Thermostat & Temperature Sensor Calibration'
    ],
    commonProblems: [
      { problem: 'Freezer Works but Bottom Fridge Not Cooling', solution: 'Caused by blocked air damper, failed defrost timer, or burnt evaporator fan motor.' },
      { problem: 'Refrigerator Making Clicking or Humming Sound', solution: 'Compressor starter relay or overload protector failure; replaced with genuine OEM relay.' },
      { problem: 'Water Leaking Inside or Under Fridge', solution: 'Drain hole and defrost drainage tube cleaning to remove ice buildup and sludge.' },
      { problem: 'Excessive Frost Buildup in Freezer', solution: 'Defrost thermostat, sensor, or door gasket replacement to ensure airtight seal.' }
    ],
    process: [
      'Comprehensive Compressor & Thermostat Testing',
      'Refrigerant Loop Leakage & Pressure Inspection',
      'Clear Explanation with Zero Hidden Charges',
      'Precision Replacement with Genuine Spare Parts',
      '24-Hour Cooling Stability Assurance'
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'Haier', 'Godrej', 'Bosch', 'Panasonic', 'Hitachi', 'Kelvinator', 'Electrolux'],
    faqs: [
      { q: 'Can you repair refrigerator inverter compressors at home?', a: 'Yes! We carry diagnostic gear and inverter driver testing units directly to your home in Gurgaon.' },
      { q: 'Do you provide gas refilling for refrigerators?', a: 'Yes, we perform complete leak testing, capillary tube flushing, and vacuum gas charging with R134a and R600a eco-friendly gases.' }
    ]
  },
  {
    id: 'washing-machine',
    title: 'Washing Machine Repair & Service',
    badge: 'Front Load & Top Load Experts',
    shortDesc: 'Expert repair for Front Load, Top Load & Semi-Automatic washing machines. Drum noise, spin cycle failure, drain error, and PCB board fixes.',
    fullDesc: 'A malfunctioning washing machine can disrupt your entire household. NCR Cooling Centre provides prompt doorstep solutions in Gurugram for all leading washing machine brands. Whether your machine is vibrating excessively, not draining water, displaying error codes, or having motor issues, our technicians resolve it efficiently.',
    image: '/images/services/washing-machine.jpg',
    features: [
      'Front Load & Top Load Fully Automatic Repair',
      'Semi-Automatic Twin Tub Servicing',
      'Drive Belt, Drum Bearing & Spider Replacement',
      'Drain Pump Unclogging & Water Inlet Valve Repair',
      'Digital Display & Motherboard (PCB) Circuit Repair',
      'Shock Absorber & Suspension Rod Balancing'
    ],
    commonProblems: [
      { problem: 'Drum Not Spinning or Rotating', solution: 'We inspect motor carbon brushes, drive belt tension, drum bearings, and capacitor.' },
      { problem: 'Water Not Draining / OE / 5E / E20 Errors', solution: 'Clean coin filter trap, remove debris from impeller, or replace failed drain pump.' },
      { problem: 'Heavy Shaking or Banging Noise During Spin', solution: 'Replace worn out suspension dampers and check drum counterbalance weights.' },
      { problem: 'Water Constantly Filling or Leaking', solution: 'Replace faulty water inlet solenoid valve and inspect pressure switch sensor tube.' }
    ],
    process: [
      'Electrical & Mechanical Drum Diagnostic Test',
      'Error Code Decoding & Board Analysis',
      'Genuine Spares (Pump, Belt, Bearings, Sensors)',
      'High-Speed Spin & Drain Verification Test'
    ],
    brands: ['LG', 'Samsung', 'IFB', 'Bosch', 'Whirlpool', 'Siemens', 'Haier', 'Panasonic', 'Godrej', 'BPL'],
    faqs: [
      { q: 'Do you fix front load washing machine motherboard / PCB?', a: 'Yes, our certified circuit specialists repair all types of inverter and non-inverter washing machine PCBs.' },
      { q: 'How soon can you visit my home in Gurgaon?', a: 'We typically arrive within 45 to 90 minutes of booking confirmation.' }
    ]
  },
  {
    id: 'geyser',
    title: 'Geyser Repair & Service',
    badge: 'Electric & Gas Water Heater Specialists',
    shortDesc: 'Instant, Storage & Gas geyser repair in Gurgaon. Heating element coil replacement, thermostat repair, tank leakage fix, and descaling.',
    fullDesc: 'Get hot water back fast with NCR Cooling Centre’s specialized geyser service in Gurgaon. During winter, geyser breakdowns cause huge inconvenience. We replace burnt heating elements, faulty thermostats, malfunctioning safety valves, and perform heavy sediment descaling on all major brands like Bajaj, Racold, Havells, AO Smith, and Crompton.',
    image: '/images/services/geyser.jpg',
    features: [
      'Storage Geyser & Instant Water Heater Repair',
      'Gas Geyser Ignition & Burner Servicing',
      'Heavy-Duty Copper / Incoloy Heating Element Change',
      'Dual Thermostat & Thermal Cut-off Replacement',
      'Multi-Function Safety Valve & Tank Leakage Check',
      'Complete Internal Tank Descaling & Anode Rod Renewal'
    ],
    commonProblems: [
      { problem: 'Geyser Not Heating Water at All', solution: 'Heating element coil has burnt out or thermal cut-out switch tripped; tested and replaced.' },
      { problem: 'Water Heating Very Slowly', solution: 'Heavy calcium and hard water scaling inside the tank and coil; requires thorough descaling.' },
      { problem: 'Geyser Tripping Electricity (Earth Leakage / MCB)', solution: 'Water entering heating coil terminals causing current leakage; requires immediate element replacement.' },
      { problem: 'Water Dripping from Geyser Bottom or Valve', solution: 'High pressure safety valve replacement or inlet/outlet pipe gasket sealing.' }
    ],
    process: [
      'Safety Power Disconnection & Voltage Continuity Check',
      'Drain Water & Tank Opening for Internal Inspection',
      'Descaling Hard Water Limescale Sediment',
      'Installation of Genuine High-Efficiency Heating Element',
      'Thermostat Calibration & Safety Temperature Test'
    ],
    brands: ['Bajaj', 'Havells', 'Racold', 'AO Smith', 'Crompton', 'V-Guard', 'Orient', 'Venus', 'Morphy Richards', 'Kenstar'],
    faqs: [
      { q: 'Is it dangerous if a geyser trips the MCB?', a: 'Yes! An MCB trip indicates electrical current is leaking into the water. Turn off the main switch immediately and call our technicians.' },
      { q: 'Why is hard water damaging geysers in Gurgaon?', a: 'Gurgaon groundwater has high TDS and calcium content which coats the heating coil, causing it to overheat and burn out quickly. Routine descaling prevents this.' }
    ]
  },
  {
    id: 'microwave',
    title: 'Microwave Oven Repair & Service',
    badge: 'Solo, Grill & Convection Models',
    shortDesc: 'Microwave repair in Gurgaon. Magnetron replacement, no heating, sparking, touch panel repair, turntable motor, and high voltage diode fixes.',
    fullDesc: 'From everyday reheat to baking and grilling, a broken microwave needs expert attention due to high internal voltages. NCR Cooling Centre provides safe, certified microwave repair across Gurugram. We fix magnetrons, mica sheets, high-voltage transformers, capacitors, door switches, and touch membrane keypads.',
    image: '/images/services/microwave.jpg',
    features: [
      'Solo, Grill & Convection Microwave Servicing',
      'Magnetron Replacement for No-Heating Problems',
      'High Voltage Capacitor & Diode Replacement',
      'Sparking Fix & Waveguide Mica Sheet Renewal',
      'Turntable Glass Plate Motor & Roller Ring Fix',
      'Touch Membrane Panel & PCB Repair'
    ],
    commonProblems: [
      { problem: 'Microwave Runs but Does Not Heat Food', solution: 'Blown high-voltage fuse, failed diode, or burnt magnetron; tested and replaced on-site.' },
      { problem: 'Sparks and Crackling Noise Inside Cavity', solution: 'Burnt mica waveguide cover sheet or metal exposure; cleaned and replaced with new mica cover.' },
      { problem: 'Glass Turntable Plate Not Rotating', solution: 'Replaced synchronised bottom drive turntable motor or cracked coupler.' },
      { problem: 'Buttons or Start Key Not Responding', solution: 'Touchpad membrane keypad replacement or front PCB circuit servicing.' }
    ],
    process: [
      'Safe High-Voltage Discharge Protocol',
      'Multi-meter Component Diagnosis',
      'Original Magnetron & Fuse Replacement',
      'Radiation Leakage Safety Testing & Heat Check'
    ],
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Morphy Richards', 'Godrej', 'Panasonic', 'Bajaj', 'Haier', 'Bosch'],
    faqs: [
      { q: 'Why does my microwave spark inside?', a: 'Grease splatter on the mica sheet cover causes carbon deposits that conduct electricity and spark. Replacing the mica cover fixes it immediately.' },
      { q: 'Can magnetron be replaced at home?', a: 'Yes, our technician carries compatible genuine magnetrons for all top brands to your doorstep.' }
    ]
  },
  {
    id: 'ro-purifier',
    title: 'RO Water Purifier Service & AMC',
    badge: 'Pure & Safe Drinking Water',
    shortDesc: 'Doorstep RO service in Gurgaon. Sediment filter, carbon filter, RO membrane change, UV lamp replacement, pump repair, and TDS testing.',
    fullDesc: 'Given the high TDS groundwater levels in Gurgaon sectors, your RO purifier needs regular maintenance. NCR Cooling Centre provides filter replacement, RO membrane descaling, booster pump repairs, and annual maintenance contracts (AMC) using genuine food-grade filters.',
    image: '/images/services/ro-purifier.jpg',
    features: [
      'Multi-stage RO, UV, UF, and TDS Controller Servicing',
      'RO Membrane & Carbon/Sediment Filter Replacement',
      'Booster Pump Repair & SMPS Power Supply Fix',
      'Water Leakage & Auto-cut Float Valve Adjustment',
      'Digital TDS Level Calibration'
    ],
    commonProblems: [
      { problem: 'Water Taste is Bad or Salty', solution: 'RO membrane pores degraded; membrane replacement and TDS recalibration.' },
      { problem: 'Purifier Water Flow is Very Slow', solution: 'Choked pre-sediment filter or weak booster pump pressure.' },
      { problem: 'Continuous Water Draining Without Stopping', solution: 'Failed auto-shutoff valve or high-pressure switch failure.' }
    ],
    process: [
      'Input Water Pressure & Raw TDS Measurement',
      'Individual Filter Stage Integrity Check',
      'Filter Replacement with Genuine NSF Certified Cartridges',
      'Output Drinking Water TDS Verification'
    ],
    brands: ['Kent', 'Aquaguard / Eureka Forbes', 'Pureit', 'Livpure', 'Havells', 'AO Smith', 'Blue Star', 'LG'],
    faqs: [
      { q: 'How often should RO filters be replaced in Gurgaon?', a: 'Due to Gurgaon’s high hardness, pre-filters should be replaced every 3-4 months, and internal carbon/membrane every 10-12 months.' }
    ]
  }
];
