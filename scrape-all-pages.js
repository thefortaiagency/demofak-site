const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeAllPages() {
  console.log('🕷️ Scraping content from all FAK pages...');
  
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/who-we-are', name: 'Who We Are' },
    { path: '/our-culture', name: 'Our Culture' },
    { path: '/meet-the-owner', name: 'Meet the Owner' },
    { path: '/meet-the-fakers', name: 'Meet the FAKers' },
    { path: '/truckload', name: 'Truckload' },
    { path: '/flatbed-and-specialized', name: 'Flatbed & Specialized' },
    { path: '/freight-management-solutions', name: 'Freight Management Solutions' },
    { path: '/intermodal', name: 'Intermodal' },
    { path: '/ltl', name: 'LTL' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/contact-us', name: 'Contact Us' }
  ];
  
  const scrapedContent = {};
  
  try {
    const page = await browser.newPage();
    
    for (const pageInfo of pages) {
      try {
        console.log(`📄 Scraping: ${pageInfo.name}...`);
        
        const url = `https://fakshipping.com${pageInfo.path}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Extract main content
        const content = await page.evaluate(() => {
          // Remove navigation, footer, and scripts
          const elementsToRemove = [
            'nav', 'header', 'footer', 'script', 'style', 
            '.navigation', '.nav', '.header', '.footer',
            '#navigation', '#nav', '#header', '#footer'
          ];
          
          elementsToRemove.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.remove());
          });
          
          // Get main content area
          const mainContent = document.querySelector('main') || 
                            document.querySelector('#main') ||
                            document.querySelector('.main-content') ||
                            document.querySelector('.content') ||
                            document.body;
          
          // Extract text content
          const textContent = mainContent ? mainContent.innerText : document.body.innerText;
          
          // Extract headings
          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
            .map(h => ({ level: h.tagName, text: h.innerText.trim() }))
            .filter(h => h.text);
          
          // Extract paragraphs
          const paragraphs = Array.from(document.querySelectorAll('p'))
            .map(p => p.innerText.trim())
            .filter(p => p && p.length > 10);
          
          // Extract lists
          const lists = Array.from(document.querySelectorAll('ul, ol'))
            .map(list => Array.from(list.querySelectorAll('li')).map(li => li.innerText.trim()))
            .filter(list => list.length > 0);
          
          return {
            title: document.title,
            textContent: textContent.trim(),
            headings,
            paragraphs,
            lists,
            url: window.location.href
          };
        });
        
        scrapedContent[pageInfo.path] = {
          name: pageInfo.name,
          ...content
        };
        
        console.log(`✅ Scraped ${pageInfo.name}: ${content.paragraphs.length} paragraphs, ${content.headings.length} headings`);
        
      } catch (error) {
        console.error(`❌ Error scraping ${pageInfo.name}:`, error.message);
        scrapedContent[pageInfo.path] = {
          name: pageInfo.name,
          error: error.message
        };
      }
    }
    
    // Save scraped content to file
    fs.writeFileSync('scraped-content.json', JSON.stringify(scrapedContent, null, 2));
    console.log('💾 Scraped content saved to scraped-content.json');
    
    // Create summary
    console.log('\n📊 SCRAPING SUMMARY:');
    Object.entries(scrapedContent).forEach(([path, content]) => {
      if (content.error) {
        console.log(`❌ ${content.name}: ERROR - ${content.error}`);
      } else {
        console.log(`✅ ${content.name}: ${content.paragraphs?.length || 0} paragraphs, ${content.headings?.length || 0} headings`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error during scraping:', error);
  } finally {
    await browser.close();
  }
  
  return scrapedContent;
}

scrapeAllPages().catch(console.error);