import Image from 'next/image'

export default function WhoWeAre() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-who-we-are.png"
            alt="Who We Are - FAK Logistics"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-blue-100">Learn about FAK Logistics</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Welcome to FAK Logistics, where experience and reliability meet the road. Based in the heart of Fort Wayne, Indiana, we are a proud minority-owned freight management company dedicated to making your shipping experience hassle-free, and downright enjoyable! We run a well-oiled machine, which makes all the difference for our clients' shipping. We understand that every client has unique needs - think of us as your logistics tailor, crafting customized freight management solutions that fit just right.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our knowledgeable team is here to provide personalized support and keep the lines of communication wide open, ensuring that you never feel left in the dark.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-lg text-gray-700 mb-4">
                  The world of freight can be a bit of a maze. That's where our proactive approach shines! Our commitment to transparency ensures you'll know where your shipments are at every turn. We anticipate challenges before they arise and deploy innovative strategies, giving you the confidence to navigate the complexities of your shipments.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                We're not just managing logistics, we're transforming your freight experience into something seamless and reliable. So, let's embark on this journey together. Your freight is in good hands with FAK Logistics: where we give a ship!
              </p>

              {/* Call to Action */}
              <div className="bg-gray-50 rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the FAK Difference?</h3>
                <p className="text-gray-600 mb-6">
                  Let us craft a customized freight management solution that fits your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact-us" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Contact Us Today
                  </a>
                  <a 
                    href="/testimonials" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Read What Our Partners Say
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