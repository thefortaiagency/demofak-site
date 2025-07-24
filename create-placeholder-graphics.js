const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function createPlaceholderGraphic(filename, width, height, text, bgColor = '#1e40af', textColor = '#ffffff') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = textColor;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap text
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  words.forEach(word => {
    const testLine = currentLine + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > width - 100 && currentLine !== '') {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  });
  lines.push(currentLine.trim());
  
  // Draw lines
  const lineHeight = 60;
  const startY = height / 2 - (lines.length - 1) * lineHeight / 2;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, startY + index * lineHeight);
  });
  
  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, filename), buffer);
  console.log(`✅ Created: ${filename}`);
}

async function createPlaceholderGraphics() {
  console.log('🎨 Creating professional placeholder graphics...');
  
  const graphics = [
    {
      filename: 'hero-truck.png',
      text: 'Professional Truck Fleet',
      width: 1792,
      height: 1024
    },
    {
      filename: 'truckload-service.png', 
      text: 'Truckload Services',
      width: 800,
      height: 600
    },
    {
      filename: 'flatbed-specialized.png',
      text: 'Flatbed & Specialized Transport',
      width: 800,
      height: 600
    },
    {
      filename: 'freight-management.png',
      text: 'Freight Management Solutions',
      width: 800,
      height: 600
    },
    {
      filename: 'intermodal-transport.png',
      text: 'Intermodal Transportation',
      width: 800,
      height: 600
    },
    {
      filename: 'ltl-warehouse.png',
      text: 'LTL Warehouse Operations',
      width: 800,
      height: 600
    },
    {
      filename: 'about-us-team.png',
      text: 'Professional Team',
      width: 800,
      height: 600
    },
    {
      filename: 'contact-office.png',
      text: 'Our Office',
      width: 800,
      height: 600
    }
  ];

  for (const graphic of graphics) {
    try {
      createPlaceholderGraphic(
        graphic.filename, 
        graphic.width, 
        graphic.height, 
        graphic.text,
        '#1e40af', // Blue background
        '#ffffff'  // White text
      );
    } catch (error) {
      console.error(`❌ Error creating ${graphic.filename}:`, error.message);
    }
  }

  console.log('🎉 Placeholder graphics created!');
  console.log('📁 Images saved to: public/images/');
}

// Run if called directly
if (require.main === module) {
  createPlaceholderGraphics().catch(console.error);
}

module.exports = { createPlaceholderGraphics };