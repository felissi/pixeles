<template>
  <div class="flex -space-x-4 max-w-40" style="">
    <img v-for="i in source.slice(0, most)" class="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800" :src="typeof i == 'string' ? i : i.url" alt="" />
    <a v-if="source.length > most" class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800">{{ `+${source.length - most}` }}</a>
  </div>
</template>
<script setup lang="ts">
import { Image } from '@/stores/image'
interface Props {
  source: Image[] | string[]
  most?: number
}
 withDefaults(defineProps<Props>(), {
  most: 4
})
</script>
