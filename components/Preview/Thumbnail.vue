<template>
  <div @dblclick="dblClick" :class="{ 'border-b-4 border-t-0 border-l-0 border-r-0 border-violet-600': selected }" @click="select" class="w-full rounded-lg border">
    <div class="">
      <img :src="image.url" :class="{ '': selected }" class="object-scale-down bg-center h-full w-full overflow-hidden rounded-t-lg object-center" />
      <div :class="`bg-[url('${image.url.slice(5)}')]`" class=" bg-center h-full relative ring-1 ring-black/10 ring-inset rounded-md shadow-lg w-full z-10" 
      :style="`background-image:url('${image.url}')`"
      
      ></div>
    </div>
    <div  :class="{ ' border-t-0 border-l-1 border-r-1 border': selected }" class="p-auto flex h-10 items-center justify-between border-t-transparent rounded-b-lg p-2 align-middle">
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
import { Image,useImageStore } from '@/stores/image'
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
