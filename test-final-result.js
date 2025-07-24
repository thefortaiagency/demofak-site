const puppeteer = require('puppeteer');

async function testFinalResult() {
  console.log('📸 Taking final screenshots of updated FAK website...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Test homepage
    console.log('🏠 Testing homepage with custom graphics...');
    await page.goto('https://demofak.thefortaiagency.ai', { waitUntil: 'networkidle0' });
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'final-homepage-with-graphics.png', 
      fullPage: true 
    });
    console.log('✅ Homepage screenshot saved: final-homepage-with-graphics.png');
    
    // Test navigation with transparent logo
    console.log('🔗 Testing navigation with transparent logo...');
    await page.screenshot({ 
      path: 'navigation-transparent-logo.png',
      clip: { x: 0, y: 0, width: 1920, height: 100 }
    });
    console.log('✅ Navigation screenshot saved: navigation-transparent-logo.png');
    
    // Test a few key pages
    const testPages = [
      { path: '/truckload', name: 'Truckload page' },
      { path: '/flatbed-and-specialized', name: 'Flatbed page' },
      { path: '/ltl', name: 'LTL page' },
      { path: '/contact-us', name: 'Contact page' }
    ];
    
    for (const testPage of testPages) {
      try {
        console.log(`📄 Testing ${testPage.name}...`);
        await page.goto(`https://demofak.thefortaiagency.ai${testPage.path}`, { waitUntil: 'networkidle0' });
        await page.screenshot({ 
          path: `${testPage.path.replace('/', '')}-page.png`,
          fullPage: true 
        });
        console.log(`✅ ${testPage.name} screenshot saved`);
      } catch (error) {
        console.log(`❌ Error testing ${testPage.name}: ${error.message}`);
      }
    }
    
    console.log('🎉 All screenshots completed!');
    console.log('📁 Check the following files:');
    console.log('  - final-homepage-with-graphics.png');
    console.log('  - navigation-transparent-logo.png');
    console.log('  - truckload-page.png');
    console.log('  - flatbed-and-specialized-page.png');
    console.log('  - ltl-page.png');
    console.log('  - contact-us-page.png');
    
  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    await browser.close();
  }
}

testFinalResult().catch(console.error);