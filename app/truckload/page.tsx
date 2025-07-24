import Image from 'next/image'

export default function TruckloadServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-truckload.png"
            alt="Truckload Services"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Truckload Services</h1>
          <p className="text-xl text-blue-100">Full trailer solutions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                When your shipment requires a full 48' or 53’ trailer, our Truckload/Dedicated option is the ideal choice. We offer a variety of shipping methods, including Flatbed, Dry Van, and Reefer (Temp-Controlled) transport.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our experienced team is committed to ensuring that your goods are transported safely and delivered on time. With a focus on reliability and efficiency, we tailor our services to meet your specific needs, providing peace of mind throughout the shipping process.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our Dry Van/FTL offerings deliver dedicated transportation solutions tailored for large shipments, ensuring seamless direct door-to-door service.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                This shipping method stands out as one of the most reliable and efficient options in the industry. We take pride in managing the entire logistics process, from pickup to delivery, to guarantee that your cargo arrives on time. With our comprehensive approach, you can trust that your goods will be handled with care and precision, providing you with the confidence and assurance you need for your shipping needs.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our Reefer service partners excel in the transportation of temperature-sensitive goods, particularly perishables that require careful handling.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We implement meticulous temperature control throughout the entire shipping journey, ensuring that your products arrive in peak freshness and optimal condition. Our capacity includes both refrigerated and freezer reefers, allowing us to accommodate a diverse range of temperature requirements. With our commitment to quality and reliability, you can trust us to protect the integrity of your sensitive cargo from start to finish.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our flatbed transportation options are perfectly designed for carrying oversized, heavy, or uniquely shaped freight that may not fit into standard enclosed trailers.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                With our open trailer configurations, we enable easy and efficient loading and unloading, providing you with versatile shipping choices that cater to your unique requirements. We place a strong emphasis on the safety and security of your cargo throughout the entire journey, ensuring it arrives at its destination in pristine condition. Trust us to deliver efficient and dependable service, regardless of the complexity of your shipment.
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