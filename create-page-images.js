const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function createPageImage(filename, title, subtitle, color = '#1e40af', width = 800, height = 400) {
  console.log(`🎨 Creating image: ${filename}...`);
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.6, '#3b82f6');
  gradient.addColorStop(1, '#60a5fa');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle pattern/texture
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 4 + 1;
    ctx.fillRect(x, y, size, size);
  }
  
  // Add geometric shapes based on page type
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  
  // Different shapes for different page types
  if (filename.includes('truck') || filename.includes('flatbed')) {
    // Truck-like rectangles
    ctx.fillRect(width * 0.7, height * 0.4, width * 0.25, height * 0.2);
    ctx.fillRect(width * 0.65, height * 0.35, width * 0.08, height * 0.25);
  } else if (filename.includes('team') || filename.includes('owner') || filename.includes('culture')) {
    // People/building shapes
    for (let i = 0; i < 3; i++) {
      const x = width * (0.6 + i * 0.1);
      const y = height * 0.3;
      ctx.fillRect(x, y, 20, height * 0.4);
      ctx.fillRect(x - 5, y - 15, 30, 15);
    }
  } else if (filename.includes('contact')) {
    // Building/office shape
    ctx.fillRect(width * 0.6, height * 0.2, width * 0.3, height * 0.6);
    // Windows
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        ctx.fillRect(width * 0.65 + col * 30, height * 0.3 + row * 30, 15, 20);
      }
    }
  } else {
    // Default logistics shapes
    ctx.fillRect(width * 0.1, height * 0.7, width * 0.8, 8);
    ctx.fillRect(width * 0.1, height * 0.5, width * 0.8, 8);
    ctx.fillRect(width * 0.1, height * 0.3, width * 0.8, 8);
  }
  
  // Title text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Handle long titles by wrapping
  const words = title.split(' ');
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
  
  // Draw title lines
  const titleY = height * 0.35;
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, titleY + index * 60);
  });
  
  // Subtitle
  if (subtitle) {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText(subtitle, width / 2, height * 0.7);
  }
  
  // Save image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(__dirname, 'public', 'images', filename);
  fs.writeFileSync(outputPath, buffer);
  
  console.log(`✅ Created: ${filename} (${width}x${height})`);
}

function createAllPageImages() {
  console.log('🎨 Creating custom images for all pages...');
  
  const pageImages = [
    {
      filename: 'page-who-we-are.png',
      title: 'Who We Are',
      subtitle: 'Learn about FAK Logistics',
      color: '#1e40af'
    },
    {
      filename: 'page-our-culture.png',
      title: 'Our Culture',
      subtitle: 'Values that drive us forward',
      color: '#7c3aed'
    },
    {
      filename: 'page-meet-owner.png',
      title: 'Meet the Owner',
      subtitle: 'Leadership you can trust',
      color: '#059669'
    },
    {
      filename: 'page-meet-fakers.png',
      title: 'Meet the FAKers',
      subtitle: 'Our dedicated team',
      color: '#dc2626'
    },
    {
      filename: 'page-truckload.png',
      title: 'Truckload Services',
      subtitle: 'Full trailer solutions',
      color: '#ea580c'
    },
    {
      filename: 'page-flatbed.png',
      title: 'Flatbed & Specialized',
      subtitle: 'Heavy & oversized cargo',
      color: '#0891b2'
    },
    {
      filename: 'page-freight-management.png',
      title: 'Freight Management',
      subtitle: 'Complete logistics solutions',
      color: '#be123c'
    },
    {
      filename: 'page-intermodal.png',
      title: 'Intermodal Transport',
      subtitle: 'Rail and truck combined',
      color: '#a21caf'
    },
    {
      filename: 'page-ltl.png',
      title: 'LTL Services',
      subtitle: 'Less than truckload shipping',
      color: '#16a34a'
    },
    {
      filename: 'page-testimonials.png',
      title: 'Customer Testimonials',
      subtitle: 'What our clients say',
      color: '#ca8a04'
    },
    {
      filename: 'page-contact.png',
      title: 'Contact Us',
      subtitle: 'Get in touch today',
      color: '#9333ea'
    }
  ];
  
  pageImages.forEach(image => {
    createPageImage(image.filename, image.title, image.subtitle, image.color);
  });
  
  console.log('🎉 All page images created!');
  console.log(`📁 Images saved to: public/images/`);
}

// Run if called directly
if (require.main === module) {
  createAllPageImages();
}

module.exports = { createAllPageImages, createPageImage };