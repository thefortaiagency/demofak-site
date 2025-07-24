export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          FAK Logistics Demo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          A freight management company who gives a ship
        </p>
        <div className="space-x-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 text-sm text-gray-500">
          <p>🎉 Live at: demofak.thefortaiagency.ai</p>
        </div>
      </div>
    </section>
  );
}