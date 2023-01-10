<template>
  <LoadPyscript />
  <FloatingHeader />
  <Hero />
  <div>
    <div class="mb-[220px]"></div>
    <Dropzone>
      <input type="file" id="dropzone-file" class="hidden" accept="image/*, video/*" multiple @change="imageStore.fileUpload" />
      <!-- @click="LoadPyScript" -->
    </Dropzone>
    <Preview />

  </div>
  <component :is="`py-script`" src="/image.py"></component>
  <Duplicated />
  <FloatingActionBtn />
  <SmallActionBtn />
  <Snackbar />
  <ActionMenu />
  <!-- <Percentage /> -->
  <!-- <Avatar :source="allImages"/> -->

</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
    mixins: [imageMixin],
    data() {
        return {
            // isPyScriptLoaded: false,
            // uploadCounter: 0 // For id, always increment
        };
    },
    methods: {
        
    },
    computed: {
        forUploadMore(): boolean {
            return (this.imageStore.inputImages.length ?? []) > 0;
        }
    },
    watch: {},
}
</script>
