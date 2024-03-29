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
    { 'rounded-img': 'max-w-120 mx-auto w-full rounded-4 drop-shadow-(lg color-black/25)' },
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
      brick: '#3e2723',
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
