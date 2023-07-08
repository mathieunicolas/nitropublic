// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    public: 'static'
  },
  nitro: {
    output: {
        publicDir: 'public'
      }
  },
})
