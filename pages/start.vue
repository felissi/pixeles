<template>
  <LoadPyscript />
  <section class="bg-[#d3d8e4] h-screen">


    <FloatingHeader />
  <div v-if="imageStore.haveScanned">Scaned</div>

    <Section>
      <h2 class="text-3xl font-medium mb-14">WEQWFWEQFGQETGQWR</h2>
      <Dropzone v-show="imageStore.allImages.length === 0">
        <Upload />
      </Dropzone>
      <Preview  v-if="imageStore.allImages.length" />
    </Section>
    <!-- <FloatingActionBtn /> -->
    <BottomControlPanel />
    <SmallActionBtn />
    <Snackbar />
    <ActionMenu />
    <PyMain />
  </section>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin]
}
</script>
