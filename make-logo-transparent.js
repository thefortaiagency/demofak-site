const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeLogoTransparent() {
  console.log('🎨 Making FAK logo transparent...');
  
  const inputPath = path.join(__dirname, 'public', 'images', 'faklogo.jpg');
  const outputPath = path.join(__dirname, 'public', 'images', 'faklogo-transparent.png');
  
  if (!fs.existsSync(inputPath)) {
    console.error('❌ Logo file not found:', inputPath);
    return;
  }
  
  try {
    // Convert JPG to PNG with transparent background
    // This removes white/light backgrounds and makes them transparent
    await sharp(inputPath)
      .png()
      .composite([{
        input: Buffer.from([255, 255, 255, 0]), // Transparent white
        raw: { width: 1, height: 1, channels: 4 },
        tile: true,
        blend: 'dest-out' // Remove white pixels
      }])
      .toFile(outputPath);
      
    console.log('✅ Transparent logo created:', outputPath);
    
    // Also create a version with better transparency handling
    await sharp(inputPath)
      .png()
      .threshold(240) // Convert light colors to transparent
      .negate() // Invert to make dark parts visible
      .negate() // Invert back but with transparency applied
      .toFile(path.join(__dirname, 'public', 'images', 'faklogo-clean.png'));
      
    console.log('✅ Clean logo version created: faklogo-clean.png');
    
  } catch (error) {
    console.error('❌ Error processing logo:', error.message);
    
    // Fallback: Create a simple transparent version using Canvas
    const { createCanvas, loadImage } = require('canvas');
    
    try {
      console.log('🔄 Using Canvas fallback...');
      
      const image = await loadImage(inputPath);
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      
      // Draw image
      ctx.drawImage(image, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Make white/light pixels transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If pixel is close to white, make it transparent
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }
      
      // Put modified data back
      ctx.putImageData(imageData, 0, 0);
      
      // Save as PNG
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(outputPath, buffer);
      
      console.log('✅ Transparent logo created with Canvas fallback');
      
    } catch (canvasError) {
      console.error('❌ Canvas fallback failed:', canvasError.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  makeLogoTransparent().catch(console.error);
}

module.exports = { makeLogoTransparent };