// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],
  buildModules: [
    "@pinia/nuxt",
    '@nuxt/postcss8',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  css: [
    '@/assets/css/main.css',
  ],
  typescript: {
    typeCheck: true
  }
});
