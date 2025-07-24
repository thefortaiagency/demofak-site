const fs = require('fs');
const path = require('path');

// Read scraped content
const scrapedContent = JSON.parse(fs.readFileSync('scraped-content.json', 'utf8'));

// Page configurations
const pageConfigs = [
  {
    path: '/our-culture',
    filename: 'app/our-culture/page.tsx',
    imageName: 'page-our-culture.png',
    title: 'Our Culture',
    subtitle: 'Values that drive us forward'
  },
  {
    path: '/meet-the-owner',
    filename: 'app/meet-the-owner/page.tsx',
    imageName: 'page-meet-owner.png',
    title: 'Meet the Owner',
    subtitle: 'Leadership you can trust'
  },
  {
    path: '/meet-the-fakers',
    filename: 'app/meet-the-fakers/page.tsx',
    imageName: 'page-meet-fakers.png',
    title: 'Meet the FAKers',
    subtitle: 'Our dedicated team'
  },
  {
    path: '/truckload',
    filename: 'app/truckload/page.tsx',
    imageName: 'page-truckload.png',
    title: 'Truckload Services',
    subtitle: 'Full trailer solutions'
  },
  {
    path: '/flatbed-and-specialized',
    filename: 'app/flatbed-and-specialized/page.tsx',
    imageName: 'page-flatbed.png',
    title: 'Flatbed & Specialized',
    subtitle: 'Heavy & oversized cargo'
  },
  {
    path: '/freight-management-solutions',
    filename: 'app/freight-management-solutions/page.tsx',
    imageName: 'page-freight-management.png',
    title: 'Freight Management Solutions',
    subtitle: 'Complete logistics solutions'
  },
  {
    path: '/intermodal',
    filename: 'app/intermodal/page.tsx',
    imageName: 'page-intermodal.png',
    title: 'Intermodal',
    subtitle: 'Rail and truck combined'
  },
  {
    path: '/ltl',
    filename: 'app/ltl/page.tsx',
    imageName: 'page-ltl.png',
    title: 'LTL (Less Than Truckload)',
    subtitle: 'Less than truckload shipping'
  },
  {
    path: '/contact-us',
    filename: 'app/contact-us/page.tsx',
    imageName: 'page-contact.png',
    title: 'Contact Us',
    subtitle: 'Get in touch today'
  }
];

function createPageComponent(config, content) {
  const paragraphs = content.paragraphs || [];
  const headings = content.headings || [];
  
  // Clean and format paragraphs
  const mainParagraphs = paragraphs
    .filter(p => p.length > 20 && !p.includes('CONTACT US') && !p.includes('READ MORE'))
    .slice(0, 8); // Limit to 8 paragraphs max
  
  // Generate JSX content
  const contentSections = mainParagraphs.map((paragraph, index) => {
    if (index === 0) {
      return `              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                ${paragraph}
              </p>`;
    } else if (index === 1 && paragraph.includes('proactive approach')) {
      return `              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-lg text-gray-700">
                  ${paragraph}
                </p>
              </div>`;
    } else {
      return `              <p className="text-lg text-gray-600 mb-6">
                ${paragraph}
              </p>`;
    }
  }).join('\n\n');
  
  return `import Image from 'next/image'

export default function ${config.title.replace(/[^a-zA-Z]/g, '')}() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/${config.imageName}"
            alt="${config.title}"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">${config.title}</h1>
          <p className="text-xl text-blue-100">${config.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
${contentSections}

              {/* Call to Action */}
              <div className="bg-gray-50 rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact FAK Logistics today for your freight management needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact-us" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Your Quote Today
                  </a>
                  <a 
                    href="/testimonials" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    See What Our Clients Say
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}`;
}

function updateAllPages() {
  console.log('📝 Updating all pages with scraped content and custom images...');
  
  pageConfigs.forEach(config => {
    const content = scrapedContent[config.path];
    
    if (!content || content.error) {
      console.log(`❌ Skipping ${config.title}: No content available`);
      return;
    }
    
    const componentCode = createPageComponent(config, content);
    const filePath = path.join(__dirname, config.filename);
    
    try {
      fs.writeFileSync(filePath, componentCode);
      console.log(`✅ Updated: ${config.title} (${content.paragraphs?.length || 0} paragraphs)`);
    } catch (error) {
      console.error(`❌ Error updating ${config.title}:`, error.message);
    }
  });
  
  console.log('\n🎉 All pages updated!');
  console.log('✨ Features added to each page:');
  console.log('  - Custom hero image');
  console.log('  - Scraped original content');
  console.log('  - Professional layout');
  console.log('  - Call-to-action sections');
}

// Run if called directly
if (require.main === module) {
  updateAllPages();
}

module.exports = { updateAllPages };