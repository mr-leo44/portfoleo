// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  tailwindcss: {
    cssPath: 'assets/css/tailwind.css'
  },
  app: {
    head: {
      title: "Lionel Kaniki",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Portfolio de lionel Kaniki.",
        },
        { name: "format-detection", content: "telephone-no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  icon: {
    serverBundle: {
      collections: ['ph'],
    },
  },
  modules: ['@nuxt/icon', "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode : {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
})