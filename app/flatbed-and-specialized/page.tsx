import Image from 'next/image'

export default function FlatbedSpecialized() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-flatbed.png"
            alt="Flatbed & Specialized"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Flatbed & Specialized</h1>
          <p className="text-xl text-blue-100">Heavy & oversized cargo</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Conestoga services combine the flexibility of flatbed transportation with the enhanced protection of a tarpaulin cover.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                This solution is perfect for shipping cargo that necessitates safeguarding against adverse weather conditions while still facilitating straightforward loading and unloading. The design allows for quick access to the cargo, making it an excellent choice for businesses that value both efficiency and protection. Trust our Conestoga services to deliver your goods safely and securely, regardless of the elements.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Step Deck services are specifically engineered to accommodate tall or oversized loads that surpass conventional height limits.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Featuring a lower deck height, this transportation solution ensures a safe and efficient method for moving heavy cargo while adhering to regulatory requirements. This design minimizes the risk of height-related issues during transit, making it an ideal choice for businesses needing to transport substantial equipment or materials. Trust our Step Deck services to deliver your oversized freight securely and in compliance with all regulations.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our Reverse Gooseneck (RGN) services are specifically tailored for the transportation of exceptionally heavy or oversized machinery.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                The unique design features a removable neck that facilitates straightforward ground-level loading, ensuring a safe and efficient process for moving heavy construction equipment and industrial machinery. This specialized approach minimizes the risk associated with loading and unloading, making it an optimal choice for businesses requiring reliable transport solutions for their most demanding cargo. Trust our RGN services to handle your heavy loads with the utmost care and efficiency.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Have a question or concern? Reach out to our team using the form below and we will get back with you as soon as possible.
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