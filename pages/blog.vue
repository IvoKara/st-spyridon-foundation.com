<script setup lang="ts">

</script>

<template>
  <H1 mb-12>
    Блог
  </H1>

  <ContentList v-slot="{ list }" path="/blog">
    <div grid mx-auto max-w-110 place-items-stretch gap-6 lg:cols-3 md:cols-2 lg:max-w-350 md:max-w-200>
      <BlogCard
        v-for="article in list" :key="article._path"
        :title="article.title"
        :image="article.image"
        :description="article.description"
        :to="article.to"
      />
    </div>
  </ContentList>
</template>

<style>

</style>
