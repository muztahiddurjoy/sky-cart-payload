require('dotenv').config();
const { sizes } = require('./blocks/Image/sizes.json');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      'sky-cart.com'
      // Your domain(s) here
    ],
    deviceSizes: sizes,
    disableStaticImages: true,
  },
  eslint: {
		ignoreDuringBuilds: true
	}
};
