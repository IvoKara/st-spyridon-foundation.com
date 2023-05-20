<script setup lang="ts">
import { foundationNameBg } from '~/constants'
</script>

<template>
  <h1 text-3xl font-cyrillic md:text-4xl>
    {{ foundationNameBg }}
  </h1>
  <img
    src="/st_spyridon_ikon.jpg"
    mx-auto mt mt-10 max-w-120 w-full rounded-4
    drop-shadow="lg color-black/25"
    alt="Икона на св. Спиридон"
  >

  <p mt-10 text-2xl font-alegreya>
    Още предстои скоро...
  </p>
</template>
