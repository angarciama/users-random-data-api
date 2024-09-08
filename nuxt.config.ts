// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    strict: true,
  },
  head: {
    title: 'USERS RANDOM DATA API',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content: 'width=device-width, initial-scale=1'
        },
    ]
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBackUrl: process.env.API_BACK_URL ?? 'https://random-data-api.com/api/v2/users?size=10&response_type=json'
    }
  }
})