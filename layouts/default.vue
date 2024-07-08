<template>
  <header
    sticky left-0 right-0 top-0 isolate z-10 min-h-18
  >
    <nav
      relative flex items-center justify-between px-24 py-8
      class="blur-mask"
    >
      <NuxtLink to="/" grid class="cols-[auto_auto]" place-items-center gap-4>
        <img src="/foundation-logo.svg" alt="Foundation logo" aspect-square max-w-14 w-full>
        <span font-cyrillic>Фондация "Св. Спиридон <br> Тримитунтски Чудотворец"</span>
      </NuxtLink>
      <ul
        flex items-center justify-end gap-10 text-lg font-cyrillic
        class="hover:*:text-brick *:transition-colors-300"
      >
        <li>
          <NuxtLink to="/">
            Начало
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            За нас
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            Блог
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts">
            Контакти
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="p-10 pb-14 text-center">
    <slot />
  </main>
</template>

<style scoped>
.blur-mask:after {
  --uno: absolute inset-0 z--1 bg-antique/30 backdrop-blur-sm;
  content: '';
  mask: linear-gradient(to top, transparent 5%, black 42%);
}
</style>
