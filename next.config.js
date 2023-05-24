/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source:'^/api/auth/$',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // }

};

module.exports = nextConfig;