<template>
  <div class="flex h-[450px] min-h-[337px] w-full flex-col p-1 sm:h-[337px] ">
    <div class="overflow-x-auto scrollbar-thin scrollbar-track-slate-100/50 scrollbar-thumb-slate-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div class="m-0 inline-block min-w-full p-0">
        <div class="max-h-screen p-4 lg:max-h-min">
          <div class="flex flex-wrap gap-4">
            <!-- <div class="w-full rounded-lg border" v-for="image in imageStore.allImages">
              <div class="rounded-t-lg"><img :src="image.url" class="h-full w-full overflow-hidden rounded-t-lg object-center" /></div>
              <div class="p-auto flex h-10 items-center justify-between rounded-b-lg p-2 align-middle">
                <span>
                  {{ image.name }}
                </span>
                <div class="w-9">
                  <TableMoreButton />
                </div>
              </div>
            </div> -->
            <PreviewThumbnail :image="image" v-for="image in imageStore.allImages" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin]
}
</script>
