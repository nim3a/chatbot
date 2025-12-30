const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

const withPWA = require("next-pwa")({
  dest: "public"
})

// اضافه شده: وارد کردن فایل تنظیمات زبان
const i18nConfig = require("./i18nConfig")

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    // اضافه شده: معرفی تنظیمات زبان به نکست
    i18n: i18nConfig,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost"
        },
        {
          protocol: "http",
          hostname: "127.0.0.1"
        },
        {
          protocol: "https",
          hostname: "**"
        }
      ]
    },
    experimental: {
      serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
    }
  })
)
