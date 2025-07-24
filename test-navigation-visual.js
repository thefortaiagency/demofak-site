const puppeteer = require('puppeteer');
const fs = require('fs');

async function testNavigationVisual() {
  console.log('🚀 Testing Navigation Visual Match...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Test main site with navigation
    console.log('📸 Taking screenshot of updated navigation...');
    await page.goto('https://demofak.thefortaiagency.ai', { waitUntil: 'networkidle0' });
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'navigation-updated.png', 
      fullPage: true 
    });
    
    // Test dropdown hover functionality
    console.log('🖱️ Testing dropdown menus...');
    
    // Hover over About Us dropdown
    await page.hover('button:has-text("About Us")');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: 'dropdown-about-us.png',
      fullPage: false 
    });
    
    // Hover over Services dropdown
    await page.hover('button:has-text("Services")');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: 'dropdown-services.png',
      fullPage: false 
    });
    
    // Test clicking navigation links
    console.log('🔗 Testing navigation links...');
    const links = [
      '/who-we-are', 
      '/our-culture', 
      '/meet-the-owner', 
      '/meet-the-fakers',
      '/truckload',
      '/flatbed-and-specialized',
      '/freight-management-solutions',
      '/intermodal',
      '/ltl',
      '/testimonials',
      '/contact-us'
    ];
    
    for (const link of links) {
      try {
        await page.goto(`https://demofak.thefortaiagency.ai${link}`, { waitUntil: 'networkidle0' });
        console.log(`✅ ${link} - Page loads successfully`);
      } catch (error) {
        console.log(`❌ ${link} - Error: ${error.message}`);
      }
    }
    
    console.log('📋 Navigation Testing Complete!');
    console.log('Screenshots saved:');
    console.log('- navigation-updated.png (full page)');
    console.log('- dropdown-about-us.png (About Us dropdown)');
    console.log('- dropdown-services.png (Services dropdown)');
    
  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    await browser.close();
  }
}

testNavigationVisual().catch(console.error);