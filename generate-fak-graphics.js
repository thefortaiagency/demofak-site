const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(imagesDir, filename), () => {});
      reject(err);
    });
  });
}

async function generateFAKGraphics() {
  console.log('🎨 Generating custom F.A.K. Logistics graphics with DALL-E...');
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const graphics = [
    {
      filename: 'hero-truck.png',
      prompt: 'Professional logistics truck on highway at sunset, modern semi-truck with trailer, clean corporate style, high quality, photorealistic',
      description: 'Hero section truck image'
    },
    {
      filename: 'truckload-service.png', 
      prompt: 'Professional freight truck loading dock, workers loading cargo, modern logistics facility, corporate photography style',
      description: 'Truckload service image'
    },
    {
      filename: 'flatbed-specialized.png',
      prompt: 'Flatbed truck carrying heavy machinery, construction equipment transport, professional logistics photography',
      description: 'Flatbed & specialized transport'
    },
    {
      filename: 'freight-management.png',
      prompt: 'Modern logistics control center, multiple monitors showing freight tracking, professional office environment, technology focused',
      description: 'Freight management solutions'
    },
    {
      filename: 'intermodal-transport.png',
      prompt: 'Container being transferred from truck to train, intermodal shipping yard, cranes and logistics equipment, industrial photography',
      description: 'Intermodal transportation'
    },
    {
      filename: 'ltl-warehouse.png',
      prompt: 'Warehouse with organized pallets and sorting areas, LTL freight facility, workers organizing shipments, clean industrial setting',
      description: 'LTL warehouse operations'
    },
    {
      filename: 'about-us-team.png',
      prompt: 'Professional logistics team in modern office, diverse group of employees, corporate photography, friendly and approachable',
      description: 'About us team photo'
    },
    {
      filename: 'contact-office.png',
      prompt: 'Modern logistics office building exterior, professional corporate headquarters, clean architecture, daytime photography',
      description: 'Contact us office building'
    }
  ];

  for (const graphic of graphics) {
    try {
      console.log(`🎨 Generating: ${graphic.description}...`);
      
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: graphic.prompt,
        n: 1,
        size: "1792x1024",
        quality: "hd",
        style: "natural"
      });

      const imageUrl = response.data[0].url;
      console.log(`⬬ Downloading: ${graphic.filename}...`);
      
      await downloadImage(imageUrl, graphic.filename);
      console.log(`✅ Saved: ${graphic.filename}`);
      
      // Wait between requests to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`❌ Error generating ${graphic.filename}:`, error.message);
    }
  }

  console.log('🎉 Graphics generation complete!');
  console.log('📁 Images saved to: public/images/');
  
  // List generated files
  const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png'));
  console.log('Generated files:');
  files.forEach(file => console.log(`  - ${file}`));
}

// Run if called directly
if (require.main === module) {
  generateFAKGraphics().catch(console.error);
}

module.exports = { generateFAKGraphics };