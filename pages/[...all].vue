<template>
  <div mx-auto max-w-80ch prose>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <h1 mb-10 font-cyrillic>
            {{ doc.title }}
          </h1>
          <ContentRendererMarkdown class="text-(start lg) font-alegreya" :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1 text="3xl" font-alegreya>
          Страницата не е намерена
        </h1>
      </template>
    </ContentDoc>
  </div>
</template>
