<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  to: string
  image?: string
}>()
</script>

<template>
  <div shadow-brown="/40" max-w-120 cursor-pointer overflow-hidden rounded-4 text-start shadow-md class="group/card" @click="$router.push(to)">
    <div relative h-48 overflow-hidden>
      <slot name="image">
        <img
          v-if="image" :src="image" alt="Blog post image"
          h-full w-full object-cover transition-all-300
          class="group-hover/card:(scale-110 brightness-60)"
        >
      </slot>
      <p class="group-hover/card:opacity-100" absolute inset-0 flex items-center justify-center gap-2 text-antique font-bold font-alegreya opacity-0 transition-all-300>
        <span>Прегледай публикацията</span>
        <span i-carbon:arrow-right />
      </p>
    </div>
    <div flex flex-col items-start gap-2 px-8 py-8>
      <slot name="title">
        <h3 text-balance text-lg font-cyrillic>
          {{ title }}
        </h3>
      </slot>
      <slot name="description">
        <p text-brick font-alegreya italic>
          {{ description }}
        </p>
      </slot>
    </div>
  </div>
</template>

<style>

</style>
