<template>
  <div class="flex w-full flex-col sm:p-4 p-1">
    <div class="-mb-2 overflow-x-auto">
      <div class="m-0 inline-block min-w-full p-0">
        <div class="max-h-screen overflow-y-auto lg:max-h-min">
          <div class=" gap-4 flex flex-wrap">
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
