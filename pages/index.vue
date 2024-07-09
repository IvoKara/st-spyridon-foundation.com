<script setup lang="ts">
import { bank, bic, blessing, iban } from '~/constants'
</script>

<template>
  <div flex flex-col items-center font-cyrillic>
    <H1>
      Фондация <br>
      "Св. Спиридон <br md:hidden> Тримитунтски Чудотворец"
    </H1>

    <h3
      mt-4 max-w-50ch
      text-orange-9 opacity-82
    >
      {{ blessing }}<br>
      Aмин!
    </h3>

    <div lg:cols-2 grid>
      <img

        src="/st_spyridon_ikon.jpg"
        rounded-img mt-10 max-w-120 lt-lg:order-last
        alt="Икона на св. Спиридон"
      >

      <div text="lg md:xl" mx-auto mt-10 w-fit self-center font-alegreya>
        <h4 mb-2 text="xl md:2xl" font-bold>
          Дарителска сметка
        </h4>
        <div text-start space-y-1>
          <p><b>Банка: </b> {{ bank }}</p>
          <p><b>IBAN: </b> {{ iban }}</p>
          <p><b>BIC: </b> {{ bic }}</p>
        </div>
      </div>
    </div>
  </div>

  <p mt-10 text-lg font-alegreya md:text-2xl>
    Още предстои скоро...
  </p>
</template>
