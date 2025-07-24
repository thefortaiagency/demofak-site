const puppeteer = require('puppeteer');

async function testImageFixes() {
  console.log('🔍 Testing hero image and logo transparency fixes...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Test the live site
    console.log('🌐 Loading https://demofak.thefortaiagency.ai...');
    await page.goto('https://demofak.thefortaiagency.ai', { waitUntil: 'networkidle0' });
    
    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take screenshot of hero section specifically
    await page.screenshot({ 
      path: 'hero-section-fixed.png',
      clip: { x: 0, y: 0, width: 1920, height: 600 }
    });
    console.log('✅ Hero section screenshot saved: hero-section-fixed.png');
    
    // Take screenshot of navigation with transparent logo
    await page.screenshot({ 
      path: 'navigation-logo-fixed.png',
      clip: { x: 0, y: 0, width: 1920, height: 80 }
    });
    console.log('✅ Navigation screenshot saved: navigation-logo-fixed.png');
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'FINAL-WEBSITE-WITH-FIXES.png', 
      fullPage: true 
    });
    console.log('✅ Full page screenshot saved: FINAL-WEBSITE-WITH-FIXES.png');
    
    // Check if hero image is loading
    const heroImage = await page.$('section img[alt="Professional truck fleet"]');
    if (heroImage) {
      const isVisible = await heroImage.isIntersectingViewport();
      console.log(`🖼️ Hero image visible: ${isVisible ? '✅ YES' : '❌ NO'}`);
    } else {
      console.log('❌ Hero image element not found');
    }
    
    // Check if logo is loading
    const logoImage = await page.$('img[alt="F.A.K. Logistics, Inc."]');
    if (logoImage) {
      const isVisible = await logoImage.isIntersectingViewport();
      console.log(`🏷️ Logo visible: ${isVisible ? '✅ YES' : '❌ NO'}`);
      
      // Get logo source
      const logoSrc = await logoImage.evaluate(img => img.src);
      console.log(`🔗 Logo source: ${logoSrc}`);
    } else {
      console.log('❌ Logo element not found');
    }
    
    console.log('');
    console.log('🎉 IMAGE FIXES TESTING COMPLETE!');
    console.log('📸 Screenshots saved for review');
    
  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    await browser.close();
  }
}

testImageFixes().catch(console.error);