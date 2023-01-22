<template>
  <LoadPyscript />
  <section class="min-h-screen bg-background">
    <WaveLoading v-if="controlStore.scanning" />

    <FloatingHeader />

    <Section>
      <h2 class="mb-14 text-3xl font-medium">WEQWFWEQFGQETGQWR</h2>
      <Dropzone v-show="imageStore.allImages.length === 0">
        <Upload />
      </Dropzone>
      <Preview v-if="imageStore.allImages.length && !controlStore.isHadHash" />
      <Duplicated/>
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
