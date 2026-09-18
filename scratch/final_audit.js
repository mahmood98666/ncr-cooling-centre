const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/services',
  '/blog',
  '/blog/ac-not-cooling-effectively-gurgaon',
  '/blog/ac-gas-filling-guide-gurgaon-r32-r410a',
  '/blog/geyser-not-heating-tripping-mcb-repair',
  '/blog/washing-machine-noise-drain-problem-repair',
  '/blog/refrigerator-not-cooling-freezer-working-repair',
  '/blog/microwave-oven-sparking-not-heating-repair',
  '/reviews',
  '/contact',
  '/directory'
];

const images = [
  '/images/google-profile-card-singleline.png',
  '/images/services/ac-repair.jpg',
  '/images/services/ac-gas-filling.jpg',
  '/images/services/geyser.jpg',
  '/images/services/washing-machine.jpg',
  '/images/services/refrigerator.jpg',
  '/images/services/microwave.jpg',
  '/images/services/ro-purifier.jpg'
];

// Also find all images in public/images/real/
const realDir = path.join(__dirname, '..', 'public', 'images', 'real');
if (fs.existsSync(realDir)) {
  const files = fs.readdirSync(realDir);
  files.forEach(f => {
    if (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp')) {
      images.push('/images/real/' + f);
    }
  });
}

function checkUrl(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:3001' + url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

async function runAudit() {
  console.log('=== CHECKING ALL ROUTES ===');
  for (const r of routes) {
    const res = await checkUrl(r);
    console.log(`${res.status === 200 ? '✅' : '❌'} ${r} -> ${res.status}`);
  }

  console.log('\n=== CHECKING ALL CRITICAL IMAGES ===');
  for (const img of images) {
    const res = await checkUrl(img);
    console.log(`${res.status === 200 ? '✅' : '❌'} ${img} -> ${res.status}`);
  }
}

runAudit();
