export default function FlatbedSpecialized() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Flatbed & Specialized</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            When standard trailers won't cut it, FAK gives you options. Our specialized equipment can handle oversized loads, heavy machinery, and unique cargo requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Specialized Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Heavy machinery transport</li>
                <li>• Construction equipment</li>
                <li>• Oversized load handling</li>
                <li>• Custom securing solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cargo Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Building materials</li>
                <li>• Steel and metals</li>
                <li>• Vehicles and machinery</li>
                <li>• Industrial components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}