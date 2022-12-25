<template>
  <input type="file" id="dropzone-file" class="hidden" accept="image/*, video/*" multiple @change="imageStore.fileUpload" />
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin]
}
</script>
