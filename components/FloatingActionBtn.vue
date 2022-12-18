<template>
  <!-- <div v-if="show" class="pointer-events-none fixed top-0 left-0 z-30 h-full w-full"> -->
  <!-- pointer-events-none  -->
  <div class="fixed bottom-3 left-0 w-screen">
    <button id="ScanBtn" class="focus:shadow-outline pointer-events-auto m-auto flex h-12 w-full max-w-xs cursor-pointer items-center rounded-lg bg-indigo-700 p-4 px-6 text-indigo-100 shadow transition-colors duration-150 hover:bg-indigo-800 dark:bg-gray-800 dark:text-gray-400">Large block button</button>
  </div>
  <!-- </div> -->
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'

export default {
  mixins: [imageMixin],
  data() {
    return {
      show: true,
      timeout: 5
    }
  }
  // mounted() {
  //   this.$bus.$on('ShowSnackbar', (text:string) => {
  //     this.show = true
  //   })
  // },
  // watch: {
  //   async show(yes) {
  //     if (yes) {
  //       settimeout(() => {
  //         this.show = false
  //       }, this.timeout * 1000)
  //     }
  //   }
  // }
}
</script>
