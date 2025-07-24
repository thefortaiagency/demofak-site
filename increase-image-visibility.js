const fs = require('fs');
const path = require('path');

function increaseImageVisibility() {
  console.log('🔆 Increasing visibility of all custom graphics...');
  
  const pageFiles = [
    'app/who-we-are/page.tsx',
    'app/our-culture/page.tsx',
    'app/meet-the-owner/page.tsx',
    'app/meet-the-fakers/page.tsx',
    'app/truckload/page.tsx',
    'app/flatbed-and-specialized/page.tsx',
    'app/freight-management-solutions/page.tsx',
    'app/intermodal/page.tsx',
    'app/ltl/page.tsx',
    'app/testimonials/page.tsx',
    'app/contact-us/page.tsx'
  ];
  
  pageFiles.forEach(filePath => {
    try {
      const fullPath = path.join(__dirname, filePath);
      
      if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Replace opacity-30 with opacity-60 for better visibility
        const updated = content.replace(/opacity-30/g, 'opacity-60');
        
        if (updated !== content) {
          fs.writeFileSync(fullPath, updated);
          console.log(`✅ Updated opacity in: ${filePath}`);
        } else {
          console.log(`⚪ No opacity changes needed in: ${filePath}`);
        }
      } else {
        console.log(`❌ File not found: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error.message);
    }
  });
  
  console.log('\n🎨 Creating enhanced visibility version of service images...');
  
  // Also let's create some more prominent service images for the homepage
  const { createCanvas } = require('canvas');
  
  const serviceImages = [
    {
      filename: 'truckload-service-enhanced.png',
      title: 'Truckload',
      color: '#ea580c',
      width: 400,
      height: 300
    },
    {
      filename: 'flatbed-specialized-enhanced.png', 
      title: 'Flatbed & Specialized',
      color: '#0891b2',
      width: 400,
      height: 300
    },
    {
      filename: 'ltl-warehouse-enhanced.png',
      title: 'LTL Services',
      color: '#16a34a',
      width: 400,
      height: 300
    }
  ];
  
  serviceImages.forEach(image => {
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // Create vibrant gradient background
    const gradient = ctx.createLinearGradient(0, 0, image.width, image.height);
    gradient.addColorStop(0, image.color);
    gradient.addColorStop(0.5, '#3b82f6');
    gradient.addColorStop(1, '#60a5fa');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, image.width, image.height);
    
    // Add truck silhouette
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    
    // Main truck body
    ctx.fillRect(image.width * 0.6, image.height * 0.4, image.width * 0.35, image.height * 0.25);
    
    // Truck cab
    ctx.fillRect(image.width * 0.55, image.height * 0.35, image.width * 0.1, image.height * 0.3);
    
    // Wheels
    ctx.beginPath();
    ctx.arc(image.width * 0.62, image.height * 0.68, 12, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(image.width * 0.82, image.height * 0.68, 12, 0, 2 * Math.PI);
    ctx.fill();
    
    // Title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Handle text wrapping
    const words = image.title.split(' ');
    if (words.length > 1) {
      ctx.fillText(words[0], image.width / 2, image.height / 2 - 20);
      ctx.fillText(words.slice(1).join(' '), image.width / 2, image.height / 2 + 20);
    } else {
      ctx.fillText(image.title, image.width / 2, image.height / 2);
    }
    
    // Save
    const buffer = canvas.toBuffer('image/png');
    const outputPath = path.join(__dirname, 'public', 'images', image.filename);
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`✅ Created enhanced: ${image.filename}`);
  });
  
  console.log('\n🎉 All image visibility improvements complete!');
}

// Run if called directly
if (require.main === module) {
  increaseImageVisibility();
}

module.exports = { increaseImageVisibility };