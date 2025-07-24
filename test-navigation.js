const puppeteer = require('puppeteer');

async function testNavigation() {
  console.log('🔥 NEXUS: Testing FAK website navigation and functionality\n');
  
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
    
    // Take homepage screenshot
    await page.screenshot({ 
      path: '/Users/thefortob/Desktop/current-homepage.png',
      fullPage: true
    });
    console.log('📸 Homepage screenshot saved\n');
    
    // Test navigation links
    console.log('🔗 Testing navigation links...');
    const navLinks = await page.$$eval('nav a', links => 
      links.map(link => ({
        text: link.textContent.trim(),
        href: link.href,
        visible: link.offsetParent !== null
      })).filter(link => link.text && link.text !== 'F.A.K.')
    );
    
    console.log(`Found ${navLinks.length} navigation links:`);
    navLinks.forEach((link, i) => {
      console.log(`  ${i+1}. "${link.text}" → ${link.href}`);
    });
    
    // Test clicking on a few key pages
    const testPages = [
      { text: "Who We Are", href: "/who-we-are" },
      { text: "Truckload", href: "/truckload" }
    ];
    
    for (const testPage of testPages) {
      console.log(`\n🖱️ Testing ${testPage.text} page...`);
      try {
        const link = await page.$(`a[href="${testPage.href}"]`);
        if (link) {
          await link.click();
          await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 });
          console.log(`✅ Successfully navigated to ${testPage.text}`);
          console.log(`   URL: ${page.url()}`);
          
          await page.screenshot({ 
            path: `/Users/thefortob/Desktop/page-${testPage.href.slice(1)}.png`,
            fullPage: true
          });
          console.log(`📸 ${testPage.text} screenshot saved`);
          
          // Go back to homepage
          await page.goto('https://demofak.thefortaiagency.ai');
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          console.log(`❌ ${testPage.text} link not found`);
        }
      } catch (e) {
        console.log(`❌ Error testing ${testPage.text}: ${e.message}`);
      }
    }
    
    console.log('\n✨ Navigation test complete!');
    console.log('📸 Screenshots saved to Desktop');
    
    console.log('\n⏰ Browser will stay open for 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
  } catch (error) {
    console.error('❌ Error during testing:', error.message);
  } finally {
    await browser.close();
  }
}

testNavigation().catch(console.error);