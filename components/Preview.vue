<template>
  <div class="sticky top-0 flex w-full items-center justify-center">
    <div class="group flex w-full flex-col items-center justify-center border border-[#e5e7eb] sm:mx-[10px] scrollbar:!w-1.5">
      <div class="sticky top-0 z-10 h-full w-full border-b-[1px] bg-white flex items-center">
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
