<script setup lang="ts">
import { bank, bic, blessing, iban } from '~/constants'
</script>

<template>
  <div flex flex-col items-center font-cyrillic>
    <h1 text="3xl md:4xl" font-bold>
      Фондация <br>
      "Св. Спиридон <br md:hidden> Тримитунтски Чудотворец"
    </h1>

    <h3
      mt-4 max-w-50ch
      text-orange-9 opacity-82
      lt-lg="order-last mt-6"
    >
      {{ blessing }}<br>
      Aмин!
    </h3>

    <p mt-5 font-alegreya>
      <NuxtLink to="/saint/slipper" flex items-center gap-2 italic underline>
        Научи повече за пантофката на св. Спиридон
        <i class="i-carbon:arrow-right" inline-block />
      </NuxtLink>
    </p>

    <img
      src="/st_spyridon_ikon.jpg"
      mt-10 max-w-120 rounded-img
      alt="Икона на св. Спиридон"
    >
  </div>

  <div text="lg md:xl" mx-auto mt-10 w-fit font-alegreya>
    <h4 mb-2 text="xl md:2xl" font-bold>
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
