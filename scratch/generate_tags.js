const fs = require('fs');
const path = require('path');

const sectors = [
  'Sector 49', 'Sohna Road', 'Golf Course Road', 'Golf Course Extension',
  'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5',
  'Sushant Lok 1', 'Sushant Lok 2', 'Nirvana Country', 'Orchid Petals',
  'Sarswati Kunj', 'South City 1', 'South City 2', 'Vatika City', 'Malibu Towne',
  'Sector 56', 'Sector 57', 'Sector 50', 'Sector 51', 'Sector 47', 'Sector 48',
  'Sector 45', 'Sector 46', 'Sector 65', 'Sector 66', 'Sector 69', 'Sector 70',
  'Sector 71', 'Sector 14', 'Sector 15', 'Sector 29', 'Sector 31', 'Cyber City',
  'Palam Vihar', 'Udyog Vihar'
];

// 1. ALSO KNOWN AS & BRAND ALIASES (70 tags)
const alsoKnownAsTags = [
  'NCR Cooling Centre', 'NCR Cooling Center', 'NCR Cooling Centre Gurgaon', 'NCR Cooling Centre Gurugram',
  'NCR Cooling Centre Sector 49', 'NCR Cooling Centre Sohna Road', 'NCR Cooling Centre Orchid Petals',
  'NCR Cooling Centre Sarswati Kunj', 'NCR Cooling Centre Golf Course Road', 'NCR Cooling Centre DLF',
  'NCR Cooling Centre Nirvana Country', 'NCR Cooling Centre Sushant Lok', 'NCR Cooling Centre South City',
  'NCR Cooling Centre Cyber City', 'NCR Cooling Centre Sector 56', 'NCR Cooling Centre Sector 57',
  'NCR Cooling Centre Sector 48', 'NCR Cooling Centre Sector 50', 'NCR Cooling Centre Sector 65',
  'NCR AC Repair Centre', 'NCR AC Service Centre Gurgaon', 'NCR Appliance Repair Centre',
  'NCR Home Appliance Care', 'NCR Refrigerator Service Centre', 'NCR Washing Machine Repair Centre',
  'NCR Geyser Service Centre', 'NCR Microwave Repair Centre', 'NCR Cooler Repair Service',
  'Near Me Cooling Centre', 'Near Me Service Center Gurgaon', 'Near Me AC Repair Gurgaon',
  'Cooling Centre Near Me', 'Cooling Center Near Me Sector 49', 'Cooling Center Near Me Sohna Road',
  'Cooling Centre Near Me DLF', 'Cooling Centre Near Me Golf Course Road', 'Best Cooling Centre in Gurgaon',
  'Top Rated Cooling Centre Gurugram', 'Doorstep NCR Cooling Centre', 'NCR Cooling Centre Helpline',
  'NCR Cooling Centre Contact Number', 'NCR Cooling Centre Customer Care', 'NCR Cooling Centre 9053653619',
  'NCR Cooling Centre Booking', 'NCR Cooling Centre Official', 'NCR Cooling Centre 5 Star Rated',
  'NCR Cooling Centre Google Reviews', 'Gurgaon Cooling Centre', 'Gurugram Cooling Centre',
  'Cooling Center Gurgaon Sector 49', 'Sarswati Kunj Cooling Centre', 'Orchid Petals Cooling Centre',
  'Wazirabad Cooling Centre Gurgaon', 'Cooling Service Center Gurgaon', 'All Appliance Cooling Centre',
  'NCR Cooling System Services', 'NCR Air Conditioning Centre', 'NCR Cooling Solutions Gurgaon',
  'NCR Doorstep Appliance Service', 'NCR Appliance Repair Experts', 'NCR Cooling Center Phone Number',
  'NCR AC Mechanic Near Me', 'NCR Fridge Service Gurgaon', 'NCR Washing Machine Care',
  'NCR Geyser Repair Experts', 'NCR Microwave Service Team', 'Cooling Center in Gurgaon Near Me',
  'Top 10 Appliance Service Gurgaon', 'NCR Cooling Centre 24 Hours', 'NCR Cooling Centre Reviews 5.0'
];

// 2. AC REPAIR & GAS REFILLING (250+ tags)
const acTags = new Set([
  'AC repair near me', 'AC service near me', 'AC gas filling near me', 'AC mechanic near me',
  'AC technician near me', 'AC repair Gurgaon', 'AC service Gurgaon', 'AC gas filling Gurgaon',
  'AC gas refill cost Gurgaon', 'Split AC repair near me', 'Window AC repair near me',
  'Inverter AC repair near me', 'AC jet pump service near me', 'AC foam wash near me',
  'AC installation near me', 'AC uninstallation near me', 'AC compressor repair Gurgaon',
  'AC PCB repair Gurgaon', 'AC water leakage repair near me', 'AC not cooling repair Gurgaon',
  'AC low cooling problem fix', 'AC gas leak repair Gurgaon', 'R32 AC gas filling Gurgaon',
  'R410A AC gas charging Gurgaon', 'R22 AC gas refill Gurgaon', 'AC copper pipe brazing near me',
  'Emergency AC repair Gurgaon', '24x7 AC service near me Gurgaon', 'Same day AC repair Gurgaon',
  '30 min AC service near me', 'AC blowing hot air fix Gurgaon', 'AC outdoor unit not working fix',
  'AC indoor unit water leakage fix', 'AC ice formation on pipe fix', 'AC bad smell problem fix',
  'AC tripping MCB breaker fix', 'AC error code repair Gurgaon', 'AC remote sensor not working fix',
  'AC fan motor replacement Gurgaon', 'AC capacitor replacement Gurgaon', 'AC copper coil replacement Gurgaon',
  'AC expansion valve repair Gurgaon', 'AC gas leak testing with nitrogen', 'AC vacuuming before gas filling',
  'AC deep jet chemical foam wash', 'Commercial cassette AC repair Gurgaon', 'Tower AC repair service Gurgaon',
  'Ductable AC repair near me Gurgaon'
]);

sectors.forEach(s => {
  acTags.add(`AC repair ${s}`);
  acTags.add(`AC service ${s}`);
  acTags.add(`AC gas filling ${s}`);
  acTags.add(`Split AC service ${s}`);
  acTags.add(`Inverter AC repair ${s}`);
  acTags.add(`AC mechanic ${s}`);
});

['Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Mitsubishi', 'Carrier', 'Blue Star', 'Lloyd', 'Panasonic', 'Godrej', 'Haier', 'Whirlpool', 'O General', 'Toshiba'].forEach(b => {
  acTags.add(`${b} AC repair near me`);
  acTags.add(`${b} AC service Gurgaon`);
  acTags.add(`${b} AC gas filling Gurgaon`);
  acTags.add(`${b} inverter AC repair Gurgaon`);
});

// 3. REFRIGERATOR & FRIDGE (180+ tags)
const fridgeTags = new Set([
  'Fridge repair near me', 'Refrigerator repair near me', 'Fridge mechanic near me',
  'Refrigerator technician near me', 'Fridge repair Gurgaon', 'Refrigerator repair Gurgaon',
  'Fridge service center near me', 'Refrigerator service center Gurgaon', 'Fridge gas filling near me',
  'Refrigerator gas charging Gurgaon', 'Fridge gas refill cost Gurgaon', 'Double door fridge repair near me',
  'Single door fridge repair near me', 'Side by side refrigerator repair Gurgaon',
  'French door fridge repair Gurgaon', 'Inverter refrigerator repair near me',
  'Commercial deep freezer repair Gurgaon', 'Visi cooler repair near me Gurgaon',
  'Fridge not cooling repair Gurgaon', 'Fridge freezer working bottom not cooling',
  'Refrigerator cooling coil ice choked fix', 'Fridge compressor not starting fix',
  'Refrigerator compressor replacement Gurgaon', 'Fridge thermostat replacement near me',
  'Refrigerator defrost timer repair', 'Fridge bimetal sensor replacement',
  'Refrigerator door gasket replacement', 'Fridge water leakage on floor fix',
  'Fridge making clicking noise repair', 'Fridge tripping electricity MCB fix',
  'Emergency fridge repair Gurgaon', 'Same day refrigerator repair near me',
  'Fridge deep freezer gas charging Gurgaon', 'Inverter fridge PCB board repair'
]);

sectors.forEach(s => {
  fridgeTags.add(`Fridge repair ${s}`);
  fridgeTags.add(`Refrigerator repair ${s}`);
  fridgeTags.add(`Fridge service ${s}`);
  fridgeTags.add(`Refrigerator mechanic ${s}`);
});

['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'Hitachi', 'Panasonic', 'Siemens', 'Kelvinator', 'Voltas Beko'].forEach(b => {
  fridgeTags.add(`${b} refrigerator repair near me`);
  fridgeTags.add(`${b} double door fridge service Gurgaon`);
  fridgeTags.add(`${b} fridge compressor repair Gurgaon`);
});

// 4. WASHING MACHINE (170+ tags)
const wmTags = new Set([
  'Washing machine repair near me', 'Washing machine service near me', 'Washing machine mechanic near me',
  'Washing machine technician near me', 'Washing machine repair Gurgaon', 'Washing machine service Gurgaon',
  'Washing machine service center near me', 'Front load washing machine repair near me',
  'Top load washing machine repair near me', 'Fully automatic washing machine repair',
  'Semi automatic washing machine repair', 'Washing machine drum not spinning fix',
  'Washing machine not draining water fix', 'Washing machine making loud noise fix',
  'Washing machine shaking vibrating fix', 'Washing machine water leaking fix',
  'Washing machine door lock error fix', 'Washing machine error code repair OE UE dE',
  'Washing machine drum bearing replacement', 'Washing machine drain pump repair Gurgaon',
  'Washing machine inlet water valve fix', 'Washing machine drive belt replacement',
  'Washing machine motor repair Gurgaon', 'Washing machine PCB board repair Gurgaon',
  'Washing machine spider arm replacement', 'Washing machine shock absorber fix',
  'Automatic washer doorstep service Gurgaon', 'Washer dryer repair Gurgaon'
]);

sectors.forEach(s => {
  wmTags.add(`Washing machine repair ${s}`);
  wmTags.add(`Washing machine service ${s}`);
  wmTags.add(`Front load repair ${s}`);
  wmTags.add(`Washing machine mechanic ${s}`);
});

['LG', 'Samsung', 'IFB', 'Bosch', 'Whirlpool', 'Godrej', 'Panasonic', 'Siemens', 'Haier'].forEach(b => {
  wmTags.add(`${b} washing machine repair near me`);
  wmTags.add(`${b} front load service center Gurgaon`);
  wmTags.add(`${b} washer drum repair Gurgaon`);
});

// 5. GEYSER & WATER HEATER (150+ tags)
const geyserTags = new Set([
  'Geyser repair near me', 'Geyser service near me', 'Geyser mechanic near me',
  'Geyser technician near me', 'Water heater repair near me', 'Geyser repair Gurgaon',
  'Geyser service Gurgaon', 'Water heater service Gurgaon', 'Instant geyser repair near me',
  'Storage geyser repair near me', 'Geyser not heating water fix', 'Geyser tripping MCB breaker fix',
  'Geyser water leaking from bottom fix', 'Geyser heating element replacement Gurgaon',
  'Geyser thermostat replacement near me', 'Geyser thermal cut out reset fix',
  'Geyser descaling hard water service', 'Geyser magnesium anode rod replacement',
  'Geyser safety valve leaking fix', 'Geyser installation near me Gurgaon',
  'Geyser uninstallation service Gurgaon', 'Electric water heater repair near me',
  'Gas geyser repair near me Gurgaon', 'Solar water heater repair Gurgaon',
  'Geyser copper coil replacement cost', 'Emergency geyser repair Gurgaon'
]);

sectors.forEach(s => {
  geyserTags.add(`Geyser repair ${s}`);
  geyserTags.add(`Geyser service ${s}`);
  geyserTags.add(`Water heater repair ${s}`);
  geyserTags.add(`Geyser mechanic ${s}`);
});

['Bajaj', 'Racold', 'AO Smith', 'Havells', 'Crompton', 'Venus', 'Usha', 'V Guard', 'Orient'].forEach(b => {
  geyserTags.add(`${b} geyser repair near me Gurgaon`);
  geyserTags.add(`${b} water heater element replacement`);
  geyserTags.add(`${b} geyser service center Gurgaon`);
});

// 6. AIR COOLER & COOLING APPLIANCES (100+ tags)
const coolerTags = new Set([
  'Cooler repair near me', 'Cooler service near me', 'Air cooler repair near me',
  'Cooler mechanic near me', 'Desert cooler repair Gurgaon', 'Room cooler repair near me',
  'Symphony cooler repair near me Gurgaon', 'Kenstar cooler repair near me',
  'Bajaj cooler repair near me Gurgaon', 'Cooler water pump replacement near me',
  'Cooler motor winding repair Gurgaon', 'Cooler fan blade replacement near me',
  'Cooler honeycomb pad replacement Gurgaon', 'Cooler not throwing cool air fix',
  'Cooler body leakage repair Gurgaon', 'Commercial duct cooler repair Gurgaon',
  'Tent cooler repair near me Gurgaon', 'Jumbo desert cooler service Gurgaon',
  'Cooling centre near me Gurgaon', 'Cooling center near me Sohna Road',
  'Cooling center near me Sector 49', 'Cooling center near me DLF Gurgaon',
  'Cooling center near me Golf Course Road', 'Cooling service center near me',
  'Cooling equipment repair Gurgaon', 'Appliance cooling repair near me',
  'Cooling appliance mechanic Gurgaon', 'Summer cooling service Gurgaon',
  'NCR cooling service center near me', 'Cooler grass pad change Gurgaon',
  'Duct cooler servicing Gurgaon', 'Industrial cooler repair Gurgaon',
  'Cooler swing motor replacement', 'Cooler electrical wiring repair'
]);

sectors.forEach(s => {
  coolerTags.add(`Cooler repair ${s}`);
  coolerTags.add(`Desert cooler service ${s}`);
});

// 7. MICROWAVE & RO PURIFIER (100+ tags)
const microTags = new Set([
  'Microwave repair near me', 'Microwave oven repair near me', 'Microwave mechanic near me',
  'Microwave technician near me', 'Microwave repair Gurgaon', 'Microwave service center near me',
  'Convection microwave repair Gurgaon', 'Solo microwave oven repair near me',
  'Grill microwave repair Gurgaon', 'Microwave not heating food fix',
  'Microwave sparking inside cavity fix', 'Microwave mica sheet replacement Gurgaon',
  'Microwave magnetron replacement cost', 'Microwave turntable glass plate not rotating fix',
  'Microwave keypad touch panel repair', 'Microwave tripping MCB fuse fix',
  'Microwave door switch latch replacement', 'Microwave high voltage diode fix',
  'Microwave transformer repair Gurgaon', 'RO water purifier repair near me',
  'RO service near me Gurgaon', 'Kent RO repair near me Gurgaon',
  'Aquaguard RO repair near me Gurgaon', 'RO membrane filter replacement Gurgaon',
  'RO booster pump repair near me', 'Water purifier service center Gurgaon',
  'Livpure RO repair near me', 'Pureit water purifier repair Gurgaon',
  'RO water leakage repair Gurgaon', 'RO TDS adjustment service near me'
]);

sectors.forEach(s => {
  microTags.add(`Microwave repair ${s}`);
  microTags.add(`RO purifier service ${s}`);
});

['LG', 'Samsung', 'IFB', 'Panasonic', 'Morphy Richards', 'Whirlpool', 'Godrej', 'Bajaj'].forEach(b => {
  microTags.add(`${b} microwave repair near me`);
  microTags.add(`${b} convection oven service Gurgaon`);
});

// 8. DOORSTEP "NEAR ME" SERVICE HUBS (120+ tags)
const nearMeTags = new Set([
  'Emergency doorstep appliance technician Gurgaon', 'Fast 30 min appliance repair near me',
  'Home appliance repair near me', 'Appliance service center near me', 'Doorstep mechanic near me',
  'Home service center near me Gurgaon', 'All appliance repair near me Gurgaon',
  'Verified home appliance repairman Gurgaon', 'Electrician appliance mechanic near me'
]);

sectors.forEach(s => {
  nearMeTags.add(`Home appliance repair near me ${s}`);
  nearMeTags.add(`Appliance service center near me ${s}`);
  nearMeTags.add(`Doorstep mechanic near me ${s}`);
  nearMeTags.add(`Emergency appliance repair ${s}`);
});

const categories = [
  {
    id: 'also-known-as',
    name: 'Also Known As & Brand Aliases',
    description: 'Alternative company names, directory listings, and brand search variations',
    tags: Array.from(new Set(alsoKnownAsTags))
  },
  {
    id: 'ac-gas-repair',
    name: 'AC Repair & Gas Refilling Searches',
    description: 'Air conditioning repair, gas charging (R32, R410A, R22), jet servicing & compressor fixes',
    tags: Array.from(acTags)
  },
  {
    id: 'fridge-refrigerator',
    name: 'Refrigerator & Fridge Repair Searches',
    description: 'Single door, double door, side-by-side, inverter fridge repair & gas charging',
    tags: Array.from(fridgeTags)
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair Searches',
    description: 'Front load, top load, semi-automatic & fully automatic washing machine repairs',
    tags: Array.from(wmTags)
  },
  {
    id: 'geyser-water-heater',
    name: 'Geyser & Water Heater Repair Searches',
    description: 'Instant geysers, storage geysers, heating coil replacements & thermostat fixes',
    tags: Array.from(geyserTags)
  },
  {
    id: 'coolers-cooling-centre',
    name: 'Air Cooler & Cooling Center Searches',
    description: 'Desert cooler, room cooler motor repair, cooling pads & cooling center queries',
    tags: Array.from(coolerTags)
  },
  {
    id: 'microwave-appliances',
    name: 'Microwave & RO Purifier Searches',
    description: 'Microwave oven sparking, not heating, turntable motor repair & RO purifier fixes',
    tags: Array.from(microTags)
  },
  {
    id: 'locality-near-me',
    name: 'Sector-by-Sector "Near Me" Hub',
    description: 'Top localized doorstep repair searches across all major Gurgaon sectors',
    tags: Array.from(nearMeTags)
  }
];

let total = 0;
categories.forEach(c => {
  console.log(`${c.name}: ${c.tags.length} tags`);
  total += c.tags.length;
});
console.log(`TOTAL TAGS: ${total}`);

const content = `// Comprehensive 1,000+ Local SEO Search Tags & "Also Known As" Directory for NCR Cooling Centre Gurgaon
// Total Search Tags: ${total}

export interface SeoTagCategory {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export const seoTagCategories: SeoTagCategory[] = ${JSON.stringify(categories, null, 2)};

export const getTotalSeoTagCount = (): number => {
  return seoTagCategories.reduce((acc, cat) => acc + cat.tags.length, 0);
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'seoTagsData.ts'), content, 'utf8');
console.log('Successfully written lib/seoTagsData.ts!');
