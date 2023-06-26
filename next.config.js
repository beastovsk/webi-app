/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: true,
    styledComponents: {
      minify: true,
      displayName: false
    }
  },
  experimental: {
    appDir: true
  },
  sassOptions: {
    // eslint-disable-next-line quotes
    prependData: `@use 'src/styles/mixins' as *;`
  },
  reactStrictMode: false,
  images: {
    domains: [''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
