<template>
  <div v-if="show" class="pointer-events-none fixed top-0 left-0 z-30 h-full w-full">
    <!-- pointer-events-none  -->
    <div id="toast-undo" class="pointer-events-auto absolute bottom-3 left-3 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400 cursor-pointer" role="alert">
      <div class="text-sm font-normal">
        <slot> Conversation archived. </slot>
      </div>
      <div class="ml-auto flex items-center space-x-2">
        <a @click="imageStore.undoDelete" class="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700" >
          <slot name="action"> Undo </slot>
        </a>
        <slot name="button">
          <button
            @click=" () => { show = false } "
            type="button"
            class="inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
            data-dismiss-target="#toast-undo"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'

export default {
  mixins: [imageMixin],
  data() {
    return {
      show: false,
      timeout: 5
    }
  },
  mounted() {
    this.$bus.$on('ShowSnackbar', (text:string) => {
      this.show = true
    })
  },
  watch: {
    async show(yes) {
      if (yes) {
        setTimeout(() => {
          this.show = false
        }, this.timeout * 1000)
      }
    }
  }
}
</script>
