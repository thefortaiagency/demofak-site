export default function Intermodal() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Intermodal</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Intermodal transportation combines the efficiency of rail with the flexibility of trucking for long-distance freight movement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cost-effective for long distances</li>
                <li>• Environmentally friendly</li>
                <li>• Reduced road congestion</li>
                <li>• Reliable transit times</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Coast-to-coast shipping</li>
                <li>• Major rail corridors</li>
                <li>• Port-to-inland connections</li>
                <li>• Cross-border transport</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}