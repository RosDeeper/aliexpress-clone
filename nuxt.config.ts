// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@nuxt/icon',
    'nuxt-lodash',
  ],
  app: {
    head: {
      title: 'AliExpress Clone',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]
    }
  }
})
