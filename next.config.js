/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/auth/:path*',
  //       destination: '/api/auth',
  //     },
  //   ];
  // },


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
