import Image from 'next/image'

export default function Intermodal() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-intermodal.png"
            alt="Intermodal"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Intermodal</h1>
          <p className="text-xl text-blue-100">Rail and truck combined</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our drayage services are designed to facilitate the efficient transport of intermodal containers from ports to warehouses or distribution centers.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Emphasizing short-distance logistics, we optimize route planning and utilize specialized equipment to ensure rapid turnaround times for your container shipments. Our experienced team is adept at navigating the complexities of port operations, customs clearance, and local regulations, guaranteeing seamless integration into your supply chain. Trust our Drayage services to enhance your logistics strategy with reliable and timely container movement.
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