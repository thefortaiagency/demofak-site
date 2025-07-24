const puppeteer = require('puppeteer');

async function testGraphicsAccessibility() {
  console.log('🔍 Testing custom graphics accessibility on live website...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const customGraphics = [
    'hero-truck.png',
    'page-who-we-are.png',
    'page-our-culture.png',
    'page-meet-owner.png',
    'page-meet-fakers.png',
    'page-truckload.png',
    'page-flatbed.png',
    'page-freight-management.png',
    'page-intermodal.png',
    'page-ltl.png',
    'page-testimonials.png',
    'page-contact.png',
    'truckload-service.png',
    'flatbed-specialized.png',
    'freight-management.png',
    'intermodal-transport.png',
    'ltl-warehouse.png',
    'about-us-team.png',
    'contact-office.png',
    'faklogo-small-transparent.png'
  ];
  
  try {
    const page = await browser.newPage();
    
    console.log('📊 Testing direct image access:');
    
    for (const graphic of customGraphics) {
      try {
        const url = `https://demofak.thefortaiagency.ai/images/${graphic}`;
        const response = await page.goto(url, { waitUntil: 'networkidle0' });
        
        if (response.status() === 200) {
          console.log(`✅ ${graphic} - Accessible (${response.status()})`);
        } else {
          console.log(`❌ ${graphic} - Status: ${response.status()}`);
        }
      } catch (error) {
        console.log(`❌ ${graphic} - Error: ${error.message}`);
      }
    }
    
    console.log('\n🌐 Testing images in context on pages:');
    
    // Test Who We Are page
    console.log('📄 Testing Who We Are page...');
    await page.goto('https://demofak.thefortaiagency.ai/who-we-are', { waitUntil: 'networkidle0' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const heroImage = await page.$('img[src="/images/page-who-we-are.png"]');
    if (heroImage) {
      const isVisible = await heroImage.isIntersectingViewport();
      console.log(`🖼️ Who We Are hero image visible: ${isVisible ? '✅ YES' : '❌ NO'}`);
      
      // Check if image loaded successfully
      const naturalWidth = await heroImage.evaluate(img => img.naturalWidth);
      console.log(`📏 Image dimensions: ${naturalWidth > 0 ? `${naturalWidth}px wide ✅` : 'Failed to load ❌'}`);
    } else {
      console.log('❌ Hero image element not found on Who We Are page');
    }
    
    // Test homepage hero
    console.log('\n📄 Testing Homepage hero...');
    await page.goto('https://demofak.thefortaiagency.ai', { waitUntil: 'networkidle0' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const homepageHero = await page.$('img[src="/images/hero-truck.png"]');
    if (homepageHero) {
      const isVisible = await homepageHero.isIntersectingViewport();
      console.log(`🖼️ Homepage hero image visible: ${isVisible ? '✅ YES' : '❌ NO'}`);
      
      const naturalWidth = await homepageHero.evaluate(img => img.naturalWidth);
      console.log(`📏 Image dimensions: ${naturalWidth > 0 ? `${naturalWidth}px wide ✅` : 'Failed to load ❌'}`);
    } else {
      console.log('❌ Homepage hero image element not found');
    }
    
    // Take screenshot showing current state
    await page.screenshot({ 
      path: 'GRAPHICS-TEST-RESULT.png', 
      fullPage: true 
    });
    console.log('📸 Screenshot saved: GRAPHICS-TEST-RESULT.png');
    
  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    await browser.close();
  }
}

testGraphicsAccessibility().catch(console.error);