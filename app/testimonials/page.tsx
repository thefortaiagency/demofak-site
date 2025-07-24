import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-testimonials.png"
            alt="Customer Testimonials"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-blue-100">What our clients say</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-700 text-center mb-12">
              Hear what our customers have to say about their experience with FAK Logistics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "I've been using FAK Logistics for a couple of years now and they get me trucks when I need them and their customer service is top notch, I highly recommend using them for your trucking needs."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">John Battell</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Awesome company! Dispatch does a great job finding my trucks. They listen and get the particulars correct. Follow ups to delivery times and when the truck is un loaded helps a lot. FAK makes trucking easy!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Tyler Morgan</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Their level of customer service and communication is unparalleled. My requests are immediately acknowledged... I never have to worry about whether or not my transportation needs are being taken care of. They are able to source trucks quickly and have always been fair and honest with their pricing."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Abigail Slaven</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "FAK is a top-notch logistics company with great people and customer service!! I highly recommend FAK for any transportation needs your company may require!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Brian L. Snyder</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Honest with me from the start, never had issues with any loads booked... When we had issues, they were resolved in the best manner."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Armin Borovina</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Great company to work with. We have been working together for couple years, great dispatch service and knowledge of industry."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Flavio Furtado</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "We were always informed with the status of our freight. Double checked to make sure the drivers were on time and polite. Great representative. Great rates. Great company."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Darla Beer</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "FAK Logistics is the BEST! FAK have been my shipper of choice for several years and their customer service is excellent. Rates are very competitive. Highly recommend."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Anita Elliott</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "My go to brokerage provider."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Ken Fox</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Experience the FAK Difference?</h3>
                <p className="text-blue-700 mb-6">
                  Join our satisfied customers and discover why FAK Logistics is the trusted choice for freight transportation.
                </p>
                <a 
                  href="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Your Quote Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}