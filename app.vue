<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  titleTemplate(titleChunk) {
    return titleChunk ? `${titleChunk} | ${appName}` : appName
  },
})
</script>

<template>
  <!-- <VitePwaManifest /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  --uno: min-h-screen m-0 p-0;
}

html {
  --uno: bg-antique text-brick;
}
</style>
