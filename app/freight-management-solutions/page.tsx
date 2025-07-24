import Image from 'next/image'

export default function FreightManagementSolutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/page-freight-management.png"
            alt="Freight Management Solutions"
            width={800}
            height={400}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Freight Management Solutions</h1>
          <p className="text-xl text-blue-100">Complete logistics solutions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our Intermodal services seamlessly integrate multiple transportation modes, including port, rail, over-the-road (OTR), air, and sea, to optimize your shipping operations. By leveraging the strengths of each mode, we deliver flexible and cost-effective solutions tailored to your logistics needs. Our comprehensive approach ensures that your cargo remains secure and continuously monitored throughout its journey, whether it’s traversing highways, navigating rail networks, or moving through air and sea routes. Trust our Intermodal services to enhance efficiency and reliability in your supply chain, providing you with a cohesive and streamlined shipping experience.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our Global Freight Solutions facilitate the process of shipping internationally, linking you to a variety of markets across the globe. We take care of all elements of international logistics, emphasizing intermodal transport and cross-border management. Our team ensures efficient customs clearance and meticulous documentation, providing you with a smooth and straightforward shipping journey, so your shipments traverse borders and transport modes seamlessly.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our warehousing and cross-docking services streamline your supply chain by minimizing storage time and enhancing efficiency.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We enable quick transfers from incoming to outgoing transport, reducing handling times and maximizing productivity. With secure storage options available, we ensure safe inventory management while optimizing product flow. Trust our services for a cohesive logistics solution that keeps your supply chain moving smoothly.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Our drop trailer custom freight management service offers a flexible and efficient solution for your shipping needs.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                By utilizing drop trailers, we enable quick loading and unloading, minimizing downtime and maximizing productivity. Our dedicated team manages every detail, from scheduling to logistics coordination, ensuring that your freight moves seamlessly. With a focus on tailored solutions, we adapt to your specific requirements, providing a reliable and cost-effective approach to freight management.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                For the transport of biohazardous materials, our specialized hazmat services offer a comprehensive solution tailored to ensure safety and compliance.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                We adhere to stringent safety protocols and regulatory frameworks, including DOT and EPA guidelines, to facilitate the secure movement of hazardous materials. Our trained professionals utilize specialized containment systems and follow industry best practices to mitigate risks during transit. With a focus on regulatory compliance and risk management, you can trust our Hazmat services for the responsible transportation of your sensitive cargo.
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