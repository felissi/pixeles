<template>
  <div class="flex w-full items-center justify-center">
    <div class="group flex w-full flex-col items-center justify-center border border-[#e5e7eb] sm:mx-[10px]">
      <div class="h-[40px] w-full border-b-[1px]">
        <PreviewControl />
      </div>
      <PreviewTable />
    </div>
  </div>
</template>
<script>
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin]
}
</script>
