const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createBetterTransparentLogo() {
  console.log('🎨 Creating better transparent FAK logo...');
  
  const inputPath = path.join(__dirname, 'public', 'images', 'faklogo.jpg');
  const outputPath = path.join(__dirname, 'public', 'images', 'faklogo-transparent.png');
  
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Logo file not found:', inputPath);
    return;
  }
  
  try {
    // Load the original image
    const image = await loadImage(inputPath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // Draw the original image
    ctx.drawImage(image, 0, 0);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Make white and light colors transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Calculate brightness
      const brightness = (r + g + b) / 3;
      
      // If pixel is close to white/light gray, make it transparent
      if (brightness > 230) {
        data[i + 3] = 0; // Set alpha to 0 (fully transparent)
      } else if (brightness > 200) {
        // Partially transparent for light grays
        data[i + 3] = Math.max(0, 255 - (brightness - 200) * 10);
      }
    }
    
    // Put modified data back
    ctx.putImageData(imageData, 0, 0);
    
    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log('✅ Better transparent logo created:', outputPath);
    console.log(`📏 Dimensions: ${image.width} x ${image.height}`);
    
    // Also create a smaller version for better performance
    const smallCanvas = createCanvas(200, 60);
    const smallCtx = smallCanvas.getContext('2d');
    
    // Draw the transparent image at smaller size
    const transparentImage = await loadImage(outputPath);
    smallCtx.drawImage(transparentImage, 0, 0, 200, 60);
    
    const smallBuffer = smallCanvas.toBuffer('image/png');
    const smallOutputPath = path.join(__dirname, 'public', 'images', 'faklogo-small-transparent.png');
    fs.writeFileSync(smallOutputPath, smallBuffer);
    
    console.log('✅ Small transparent logo created:', smallOutputPath);
    console.log('📏 Small dimensions: 200 x 60');
    
  } catch (error) {
    console.error('❌ Error creating transparent logo:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  createBetterTransparentLogo().catch(console.error);
}

module.exports = { createBetterTransparentLogo };