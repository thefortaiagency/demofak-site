const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function createBetterHeroImage() {
  console.log('🎨 Creating better hero background image...');
  
  const width = 1792;
  const height = 1024;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Create a professional logistics-themed background
  
  // Background gradient (darker blue to lighter blue)
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e3a8a'); // Dark blue
  gradient.addColorStop(0.5, '#3b82f6'); // Blue
  gradient.addColorStop(1, '#60a5fa'); // Light blue
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add some geometric shapes to suggest movement/logistics
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  
  // Draw some road-like lines
  for (let i = 0; i < 8; i++) {
    const y = (height / 8) * i + 50;
    ctx.fillRect(0, y, width, 8);
  }
  
  // Draw truck silhouette-like rectangles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  
  // Main truck body
  ctx.fillRect(width * 0.7, height * 0.4, width * 0.25, height * 0.2);
  
  // Truck cab
  ctx.fillRect(width * 0.65, height * 0.35, width * 0.08, height * 0.25);
  
  // Trailer
  ctx.fillRect(width * 0.73, height * 0.42, width * 0.2, height * 0.16);
  
  // Add some circular elements (wheels)
  ctx.beginPath();
  ctx.arc(width * 0.68, height * 0.62, 15, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(width * 0.78, height * 0.62, 15, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(width * 0.88, height * 0.62, 15, 0, 2 * Math.PI);
  ctx.fill();
  
  // Add some subtle texture
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 3 + 1;
    ctx.fillRect(x, y, size, size);
  }
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(__dirname, 'public', 'images', 'hero-truck.png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ Better hero image created:', outputPath);
  console.log(`📏 Dimensions: ${width} x ${height}`);
}

// Run if called directly
if (require.main === module) {
  createBetterHeroImage();
}

module.exports = { createBetterHeroImage };