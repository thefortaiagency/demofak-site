export default function LTL() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">LTL (Less Than Truckload)</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Less Than Truckload (LTL) shipping is perfect for shipments that don't require a full trailer but are too large for parcel delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-gray-600">Pay only for the space you use, sharing trailer costs with other shippers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Flexible Service</h3>
              <p className="text-gray-600">Multiple pickup and delivery options to fit your schedule.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tracking</h3>
              <p className="text-gray-600">Real-time visibility throughout the entire shipping process.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Typical LTL Shipments</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 150 lbs to 15,000 lbs</li>
              <li>• 1-6 pallets</li>
              <li>• Multiple piece shipments</li>
              <li>• Time-sensitive smaller loads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}