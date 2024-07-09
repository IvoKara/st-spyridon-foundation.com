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
  shortcuts: [
    { 'rounded-img': 'mx-auto w-full rounded-2 drop-shadow-(lg color-black/25)' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
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
      brown: '#3e2723',
      brick: '#944F34',
    },
    fontFamily: {
      cyrillic: 'Monomachus',
      alegreya: 'Alegreya',
    },
  },
  safelist: [
    'mt-12',
  ],
})
