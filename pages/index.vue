<script setup lang="ts">
import { bank, bic, iban } from '~/constants'
</script>

<template>
  <h1 text="3xl md:4xl" font-cyrillic>
    Фондация <br>
    "Св. Спиридон <br md:hidden> Тримитунтски Чудотворец"
  </h1>
  <img
    src="/st_spyridon_ikon.jpg"
    mx-auto mt mt-10 max-w-120 w-full rounded-4
    drop-shadow="lg color-black/25"
    alt="Икона на св. Спиридон"
  >

  <div mx-auto mt-10 w-fit text-xl font-alegreya>
    <h4 mb-2 text-2xl font-bold>
      Дарителска сметка
    </h4>
    <div text-start space-y-1>
      <p><b>Банка: </b> {{ bank }}</p>
      <p><b>IBAN: </b> {{ iban }}</p>
      <p><b>BIC: </b> {{ bic }}</p>
    </div>
  </div>

  <p mt-10 text-lg font-alegreya md:text-2xl>
    Още предстои скоро...
  </p>
</template>
