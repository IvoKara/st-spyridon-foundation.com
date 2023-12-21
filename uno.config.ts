import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'

export default defineConfig({
  rules: [
    ['font-cyrillic', { 'font-family': 'Monomachus' }],
    ['font-alegreya', { 'font-family': 'Alegreya' }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extractors: [
    extractorMdc(),
  ],
  theme: {
    colors: {
      antique: '#ffe8cc',
      brick: '#3e2723',
    },
  },
})
