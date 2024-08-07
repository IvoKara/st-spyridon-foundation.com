import { content } from './config/content'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    // '@nuxtjs/fontaine',
    '@nuxt/content',
    '@nuxt/image',
    // "@nuxthub/core"
  ],

  content,

  experimental: {
    sharedPrerenderData: true,
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/app.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    preset: 'cloudflare-pages-static',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
    //   crawlLinks: false,
      routes: ['/sitemap.xml', '/', '/blog', '/blog/idea', '/blog/slipper'],
      autoSubfolderIndex: false,
    //   ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/foundation-logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  // pwa,

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  compatibilityDate: '2024-07-09',
})
