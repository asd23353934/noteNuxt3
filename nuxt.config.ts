// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    //pageTransition - 啟用到所有 pages ，對應 pages 目錄
    pageTransition: { name: "page", mode: "out-in" },
    //layoutTransition - 啟用到所有 layout ，對應 layouts 目錄
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        { rel: "manifest", href: "/manifest.json" },
        { rel: "icon", type: "image/png", href: "/image/icon-192x192.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#000000" },
      ],
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    env: process.env.NUXT_PUBLIC_API_SERVER,
    apiBackend:
      process.env.NUXT_PUBLIC_API_BACKEND || "https://www.sohsin.com/v1",
    public: {
      env: process.env.NUXT_PUBLIC_API_SERVER,
      apiBackend:
        process.env.NUXT_PUBLIC_API_BACKEND || "https://www.sohsin.com/v1",
      appVersion: "1.0.0",
    },
  },
  css: ["@/assets/css/tailwind.css", "@/assets/scss/main.scss"],
  modules: [
    "@hsinhe/nuxtmodule",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "dayjs-nuxt",
    "@pinia/nuxt",
  ],
  hsin: {},
  compatibilityDate: "2024-09-03",
  imports: {
    dirs: [
      // 掃描 composables 目錄頂層
      "composables",
      // 掃描深度一層的特定檔案
      "composables/*/index.{ts,js,mjs,mts}",
      // 掃描整個 composables 目錄下的檔案
      "composables/**",
    ],
  },
  ssr: true,
  routeRules: {
    "/test": { ssr: false },
  },
});
