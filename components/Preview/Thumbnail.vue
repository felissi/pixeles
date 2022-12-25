<template>
  <div @dblclick="dblClick" :class="{ 'border-b-4 border-t-0 border-l-0 border-r-0 border-violet-600': selected }" @click="select" class="w-full rounded-lg border">
    <div class="">
      <img :src="image.url" :class="{ '': selected }" class="h-full w-full overflow-hidden rounded-t-lg bg-center object-scale-down object-center" />
      <div :class="`bg-[url('${image.url.slice(5)}')]`" class="relative z-10 h-full w-full rounded-md bg-center shadow-lg ring-1 ring-inset ring-black/10" :style="`background-image:url('${image.url}')`"></div>
    </div>
    <div :class="{ ' border-l-1 border-r-1 border border-t-0': selected }" class="p-auto flex h-10 items-center justify-between rounded-b-lg border-t-transparent p-2 align-middle">
      <span>
        {{ image.name }}
      </span>
      <div class="-mr-[6px] w-9">
        <TableMoreButton />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Image, useImageStore } from '@/stores/image'
const imageStore = useImageStore()
interface Props {
  image: Image
}
var { image } = defineProps<Props>()
let selected = ref(false)
function select() {
  imageStore.select(image)
  imageStore.pendingDelete(image.id)
  selected.value = !selected.value
}
function dblClick() {
  window.open(image.url)
}
</script>
