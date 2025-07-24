import Image from 'next/image'

export default function MeettheOwner() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-meet-owner.png"
            alt="Meet the Owner"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet the Owner</h1>
          <p className="text-xl text-blue-100">Leadership you can trust</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Alex Haggard kicked off his career as a sales leader in the automotive industry, quickly becoming a top-performing finance manager in northeast Indiana. But the rigid schedule didn’t align with his family values, sparking a shift fueled by his entrepreneurial spirit.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Making the leap into transportation, Alex became a managing partner at MAD Logistics, a third-party agent for Echo Global. There, he gained invaluable insights into the freight management landscape and rose to the role of VP of Operations. This journey ignited his passion to launch his own venture.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                In 2012, Alex founded FAK Logistics with a mission to create a freight management company that truly prioritizes customer satisfaction and builds strong partnerships with carriers. Over the years, he’s assembled a fantastic team of experienced account specialists, many of whom have been with him since day one.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Alex's dedication to the community shines through his involvement with local organizations like the YMCA, The Salvation Army, and Community Harvest Food Bank. FAK takes pride in giving back and promoting family values by supporting school groups and sports clubs. The success of FAK is rooted in Alex’s genuine care for people and his unwavering integrity in everything he does. With Alex at the helm, FAK Logistics is not just a business; it's a community-driven family!
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