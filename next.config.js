/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable build tracing to avoid micromatch issues
  outputFileTracing: false,
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  
  // Reduce build complexity
  swcMinify: false,
  
  // Ignore specific files that might cause issues
  webpack: (config, { isServer }) => {
    // Add fallbacks for node modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Experimental features
  experimental: {
    // Disable features that might cause build issues
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig