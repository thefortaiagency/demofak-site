const puppeteer = require('puppeteer');

async function testAllNavigation() {
  console.log('🔥 NEXUS: Comprehensive navigation test for FAK website\n');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    console.log('🌐 Loading https://demofak.thefortaiagency.ai');
    await page.goto('https://demofak.thefortaiagency.ai', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get all navigation links
    const navLinks = await page.$$eval('nav a', links => 
      links.map(link => ({
        text: link.textContent.trim(),
        href: link.href,
        visible: link.offsetParent !== null
      })).filter(link => link.text && link.text !== 'F.A.K.' && !link.href.includes('#'))
    );
    
    console.log(`🔗 Found ${navLinks.length} navigation pages to test:`);
    navLinks.forEach((link, i) => {
      console.log(`  ${i+1}. "${link.text}" → ${link.href}`);
    });
    
    let successCount = 0;
    let failCount = 0;
    
    // Test each navigation link
    for (const navLink of navLinks) {
      console.log(`\n🖱️ Testing: ${navLink.text}`);
      try {
        await page.goto(navLink.href, { waitUntil: 'networkidle0', timeout: 15000 });
        
        // Check if page loaded successfully
        const title = await page.$eval('h1', el => el.textContent);
        console.log(`✅ Page loaded: "${title}"`);
        console.log(`   URL: ${page.url()}`);
        
        // Take screenshot
        const pageSlug = navLink.href.split('/').pop();
        await page.screenshot({ 
          path: `/Users/thefortob/Desktop/test-${pageSlug}.png`,
          fullPage: false
        });
        console.log(`📸 Screenshot saved: test-${pageSlug}.png`);
        
        successCount++;
        
      } catch (error) {
        console.log(`❌ Failed to load ${navLink.text}: ${error.message}`);
        failCount++;
      }
      
      // Brief pause between tests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`\n📊 Test Results:`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`   📸 Screenshots saved to Desktop`);
    
    if (successCount === navLinks.length) {
      console.log(`\n🎉 ALL NAVIGATION TESTS PASSED! 🎉`);
    } else {
      console.log(`\n⚠️  Some pages need attention`);
    }
    
    console.log('\n⏰ Browser will stay open for 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
  } catch (error) {
    console.error('❌ Error during testing:', error.message);
  } finally {
    await browser.close();
    console.log('\n👋 Testing complete!');
  }
}

testAllNavigation().catch(console.error);