export default function FreightManagement() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Freight Management Solutions</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Our advanced freight management platform gives you complete visibility and control over your shipments with real-time tracking and optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Real-Time Tracking</h3>
              <p className="text-gray-600">GPS-enabled tracking with instant updates on shipment location and status.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Route Optimization</h3>
              <p className="text-gray-600">AI-powered route planning for maximum efficiency and cost savings.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Digital Documentation</h3>
              <p className="text-gray-600">Paperless processes with digital bills of lading and proof of delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}