<template>
  <div @dblclick="dblClick"  @click="select" class="w-48 h-48 rounded-lg border">
    <div class="">
      <img :src="image.thumbnail" :class="{'border-2 border-violet-600':selected}" class="h-full w-full overflow-hidden rounded-lg bg-center object-scale-down object-center" />
    </div>
    <div  class="bg-gradient-to-t from-[#000000cf] to-transparent text-white/80 p-auto flex h-10 overflow-clip justify-between rounded-lg border-t-transparent p-2 align-middle relative bottom-10">
      <span class="truncate  text-ellipsis">
        {{ image.name }}
      </span>
      <div class="-mr-[6px] w-9 flex items-center fill-current hover:fill-violet-700">
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
