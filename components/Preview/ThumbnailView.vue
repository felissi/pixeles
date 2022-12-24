<template>
  <div class="flex w-full flex-col p-1">
    <div class="-mb-2 overflow-x-auto">
      <div class="m-0 inline-block min-w-full p-0">
        <div class="max-h-screen overflow-y-auto lg:max-h-min">
          <div class="grid  gap-1 grid-cols-2 md:grid-cols-6 xl:grid-cols-8">
            <div class="w-full rounded-lg border " v-for="image in imageStore.allImages">
              <div class="rounded-t-lg "><img :src="image.url" class="rounded-t-lg w-full h-full object-center overflow-hidden" /></div>
              <div class="h-10 p-auto rounded-b-lg align-middle flex justify-between items-center p-2">
                <span>
                  {{ image.name }}
                </span>
                <div class="w-9">

                  <TableMoreButton />
                </div>
                </div>
            </div>
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
