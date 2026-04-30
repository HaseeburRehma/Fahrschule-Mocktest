import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fahrschule-abgefahrn.de'
      }
    ]
  },
  // R3F's three.js needs to be transpiled in some setups
  transpilePackages: ['three']
};

export default withNextIntl(nextConfig);
