const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const i18nConfig = require('./i18nConfig');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig, // <--- این خط حیاتی بود که جا افتاده بود
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'], // دامنه‌های مجاز عکس
    unoptimized: true, // برای جلوگیری از برخی ارورهای بیلد
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = withPWA(nextConfig);
