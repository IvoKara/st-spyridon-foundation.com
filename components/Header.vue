<script setup lang="ts" generic="Item extends HeaderItem">
import type { HeaderItem } from '~/types'

defineProps<{
  items: Item[]
}>()
const isOpen = ref(false)
</script>

<template>
  <header
    sticky left-0 right-0 top-0 isolate z-10 min-h-18
  >
    <nav
      relative flex items-center justify-between px-14 py-8 lg:px-24 md:px-20
      class="blur-mask"
    >
      <NuxtLink to="/" grid class="cols-[auto_auto]" place-items-center gap-4>
        <img src="/foundation-logo.svg" alt="Foundation logo" aspect-square max-w-14 w-full>
        <span font-cyrillic lt-lg:sr-only>Фондация "Св. Спиридон <br> Тримитунтски Чудотворец"</span>
      </NuxtLink>
      <ul
        flex items-center justify-end gap-10 text-lg font-cyrillic lt-md:hidden
        class="hover:*:text-brick *:transition-colors-300"
      >
        <li v-for="item in items" :key="item.label">
          <NuxtLink :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <button i-carbon:menu aspect-square h-auto w-8 md:hidden @click="isOpen = true" />
    </nav>
  </header>
  <div
    fixed
    bottom-0 right-0 top-0 z-20 h-screen max-w-80 min-w-50 w-full bg-antique p-10 transition-transform-300 ease-in-out
    :class="[isOpen ? 'translate-x-0' : 'translate-x-110%']"
  >
    <div mb-6 flex justify-end>
      <button i-carbon:close aspect-square h-auto w-8 md:hidden @click="isOpen = false" />
    </div>
    <ul
      flex flex-col items-start gap-2 text-lg font-cyrillic
      class="hover:*:text-brick *:transition-colors-300"
    >
      <li v-for="item in items" :key="item.label">
        <NuxtLink :to="item.to" @click="isOpen = false">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
  <div v-if="isOpen" id="overlay" bg-black="/30" fixed inset-0 z-19 @click="isOpen = false" />
</template>

<style scoped>
.blur-mask:after {
  --uno: absolute inset-0 z--1 bg-antique/30 backdrop-blur-sm;
  content: '';
  mask: linear-gradient(to top, transparent 5%, black 42%);
}
</style>
