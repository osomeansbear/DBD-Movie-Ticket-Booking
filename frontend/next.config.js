/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['in.bmscdn.com', 'assets-in.bmscdn.com'] //Add the hostnames of the images you want to load
  },
};

module.exports = nextConfig
