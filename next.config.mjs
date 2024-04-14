/** @type {import('next').NextConfig} */
const nextConfig = {};


import withPWA from 'next-pwa';

const pwaConfig = {
  pwa: {
    dest: 'public' 
    
  }
};


export default {
  ...nextConfig,
  ...withPWA(pwaConfig)
};