import Image from 'next/image'

export default function MeettheFAKers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-meet-fakers.png"
            alt="Meet the FAKers"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Meet the FAKers</h1>
          <p className="text-xl text-blue-100">Our dedicated team</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At FAK, our core values are the foundation of our daily operations. Our team comprises dedicated individuals who work hard both in and out of the office.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We take pride in fostering a culture of health and wellness, actively engaging with our families and prioritizing a balanced lifestyle.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We believe in the importance of teamwork and camaraderie, exemplified through our regular huddles, one-on-one meetings, and Friday Fun Days. We celebrate our achievements with carry-ins, birthday treats, and both individual and group celebrations.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                By prioritizing real-time communication, we empower businesses to navigate the complexities of supply chain logistics with confidence and agility, all while ensuring we work hard and play hard together.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We continually seek "it factor" talent, remaining open to finding a place for the right person, even when we aren’t actively hiring! Is this you?
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