export default function Truckload() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Truckload Services</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Whether it's FTL or LTL; dry van, reefer, flatbed or specialty... we have a way to deliver it.
            Our extensive network of carriers ensures we can handle your truckload needs efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Dry Van</h3>
              <p className="text-gray-600">Standard enclosed trailers for general freight protection.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Refrigerated</h3>
              <p className="text-gray-600">Temperature-controlled shipping for sensitive cargo.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expedited</h3>
              <p className="text-gray-600">Rush shipments with priority handling and tracking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}