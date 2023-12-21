<script setup lang="ts">
import { ProseImg } from '#build/components'

type ComponentProps = InstanceType<typeof ProseImg>['$props']

defineProps<ComponentProps>()
</script>

<template>
  <ProseImg class="rounded-img" />
</template>
