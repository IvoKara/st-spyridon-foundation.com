<script setup lang="ts">
import type { HeaderItem } from '~/types'

const items: HeaderItem[] = [
  { label: 'Начало', to: '/' },
  { label: 'Блог', to: '/blog' },
  { label: 'За нас', to: '/about' },
  { label: 'Контакти', to: '/contacts' },
]
</script>

<template>
  <Header :items="items" />
  <main class="p-10 pb-14 text-center">
    <slot />
  </main>
</template>
