/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kindred-canary-966.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'kindred-canary-966.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
      ]
    }
  };
  
  export default nextConfig;