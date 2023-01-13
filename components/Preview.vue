<template>
  <div class="sticky top-0 flex w-full items-center justify-center">
    <div class="wrapper my-shadow  flex w-full flex-col items-center justify-center rounded-lg sm:mx-[10px]">
      <!-- border border-[#e5e7eb] -->
      <div class="sticky top-0 z-10 flex h-full w-full items-center rounded-t-lg border-b-[1px] bg-white">
        <PreviewControl />
      </div>
      <PreviewTable v-if="controlStore.previewMode === 'list'" />
      <PreviewThumbnailView v-if="controlStore.previewMode === 'thumbnail'" />
    </div>
  </div>
</template>
<script>
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [imageMixin, controlMixin]
}
</script>
