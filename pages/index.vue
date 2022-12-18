<template>
  <Hero />
  <div>
    <div class="mb-[220px]"></div>
    <Dropzone>
      <input type="file" id="dropzone-file" class="hidden" accept="image/*, video/*" multiple @change="fileUpload" />
      <!-- @click="LoadPyScript" -->
    </Dropzone>
    <Preview />
  </div>
  <button id="ScanBtn">GOOOOOOOOOOO</button>
  <!-- <div>{{ image.inputImages }}</div> -->
  <div>{{ `imageStore: ${imageStore.allImages}` }}</div>
  <component :is="`py-script`" src="/image.py"></component>
  <Snackbar />
  <div class="h-[500px]">sdasd</div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin],
  data() {
    return {
      // isPyScriptLoaded: false,
      uploadCounter: 0 // For id, always increment
    }
  },
  methods: {
    LoadPyScript() {
      // if (!this.isPyScriptLoaded) {
      //   // const body = document.getElementsByTagName('body')[0]
      //   // body.innerHTML = body.innerHTML + `<py-config src="/pyconfig.toml"></py-config>`
      //   // const head = document.getElementsByTagName('body')[0]
      //   // head.innerHTML = head.innerHTML + `<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />`
      //   // const node = document.createElement('script')
      //   // node.src = 'https://pyscript.net/latest/pyscript.js'
      //   // node.defer = true
      //   // head.appendChild(node)
      //   this.isPyScriptLoaded = true
      //   this.nextStep()
      // }
    },
    nextStep() {},
    fileUpload(event: Event) {
      // @ts-ignore
      if (event.target) this.inputImages.push(...event.target.files)
      // @ts-ignore
      if (this.inputImages) this.feedAllImages(event.target.files)
    },
    feedAllImages(files: FileList) {
      for (let f of files) {
        const { name, size, type, lastModified } = f
        this.allImages.push({
          id: this.uploadCounter,
          name: name,
          size: size,
          type: type,
          lastModified: lastModified,
          url: URL.createObjectURL(f),
          hash: '',
          blob: f
        })
        this.uploadCounter++
      }
    }
  },
  computed: {
    forUploadMore(): boolean {
      return (this.inputImages.length ?? []) > 0
    }
  },
  watch: {}
}
</script>
