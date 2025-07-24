import Image from 'next/image'

export default function LTLLessThanTruckload() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-ltl.png"
            alt="LTL (Less Than Truckload)"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">LTL (Less Than Truckload)</h1>
          <p className="text-xl text-blue-100">Less than truckload shipping</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                LTL offers an economical option for transporting smaller shipments throughout the US and Canada.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                By choosing LTL, you only pay for the portion of the trailer your cargo occupies, rather than the entire space. We provide a variety of transportation methods, including dedicated sprinter vans, box trucks, and hotshot flatbeds, all designed to accommodate your specific freight requirements. Our team is committed to identifying the optimal solution for your shipping needs, ensuring timely and dependable delivery on every occasion.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our expedited services focus on prioritizing urgent shipments, guaranteeing that your cargo reaches its destination as swiftly as possible.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Utilizing dedicated vehicles and optimized processes, we effectively minimize transit times for time-sensitive deliveries. This commitment to speed and efficiency ensures that your critical shipments are handled with the utmost care, meeting your deadlines and exceeding expectations. Count on our Expedited services to deliver timely solutions for your most pressing logistics needs.
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