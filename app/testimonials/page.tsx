export default function Testimonials() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Testimonials</h1>
        <div className="max-w-4xl">
          <p className="text-lg text-gray-600 mb-12">
            Hear what our customers have to say about their experience with FAK Logistics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "FAK Logistics has been our trusted partner for over 5 years. Their proactive approach and transparency 
                  have made them an invaluable part of our supply chain."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500">Supply Chain Manager, Manufacturing Corp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The FAK team goes above and beyond to ensure our shipments arrive on time. 
                  Their money-back guarantee gives us complete confidence."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-gray-500">Logistics Director, Retail Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "From dry van to specialized flatbed, FAK handles all our freight needs with professionalism 
                  and expertise. Highly recommended!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Jennifer Davis</p>
                  <p className="text-gray-500">Operations Manager, Construction Co</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The Haggard family values really show in every interaction. 
                  FAK Logistics treats our business like it's their own."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">David Thompson</p>
                  <p className="text-gray-500">CEO, Regional Distribution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
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
    </div>
  )
}