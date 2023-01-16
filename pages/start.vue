<template>
  <LoadPyscript />
  <section class="h-screen bg-[#d3d8e4]">
    <WaveLoading v-if="controlStore.scanning" />

    <FloatingHeader />
    <!-- <div v-if="imageStore.haveScanned">Scaned</div> -->

    <Section>
      <h2 class="mb-14 text-3xl font-medium">WEQWFWEQFGQETGQWR</h2>
      <Dropzone v-show="imageStore.allImages.length === 0">
        <Upload />
      </Dropzone>
      <Preview v-if="imageStore.allImages.length && !controlStore.isHadHash" />
      <Duplicated v-if="controlStore.isHadHash" />
    </Section>
    <!-- <FloatingActionBtn /> -->
    <BottomControlPanel />
    <SmallActionBtn />
    <Snackbar />
    <ActionMenu />
    <PyMain />
  </section>
</template>
<script>
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [imageMixin, controlMixin]
}
</script>
