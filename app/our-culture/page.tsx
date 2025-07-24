import Image from 'next/image'

export default function OurCulture() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-our-culture.png"
            alt="Our Culture"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Culture</h1>
          <p className="text-xl text-blue-100">Values that drive us forward</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our commitment to follow through on our promises, building trust and reliability.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We approach challenges with innovative thinking, providing customized and effective solutions that meet specific needs.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We foster a nurturing atmosphere that prioritizes personal growth and teamwork, emphasizing support and collaboration.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                At FAK Logistics, we know that a vibrant company culture fuels employee engagement and teamwork. Our seasonal celebrations not only honor our accomplishments but also deepen our connections. Acknowledging that logistics operates outside the usual hours, we emphasize a healthy work-life balance while encouraging everyone’s contribution to our success.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We also offer professional development and educational opportunities, ensuring our team can grow and excel. Our generous benefits package is a testament to our appreciation for each member. Together, we cultivate a welcoming environment where everyone feels valued and inspired to thrive!
              </p>

              <p className="text-lg text-gray-600 mb-6">
                At FAK Logistics our dedication to community involvement is foundational! Our sponsorships of local events such as the Auburn Cord Duesenberg Festival an EcoFest celebrate our community's heritage and environment.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We also provide significant support to the YMCA, promoting health and youth development.
Each year, our employees choose a children’s activity or sponsorship, deepening their connection to our charitable efforts.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our active participation in school fundraisers empowers and supports local students. We proudly contribute to initiatives like The Salvation Army's Giving Tree, ensuring families in need feel the holiday spirit. These initiatives are just a few examples of our commitment to making a positive impact, and we’re always excited to explore new partnerships to enhance our community engagement.
              </p>

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
}