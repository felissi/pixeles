<template>
  <div @click="mobileToggle" @mouseover="mouseOver" @mouseleave="mouseLeave" data-dial-init class="group fixed bottom-6 right-6">
    <div id="speed-dial-menu-text-outside-button-square" :class="`${hover ? '' : 'hidden'} mb-4 flex  flex-col items-center space-y-2`">
      <button type="button" class="relative h-[52px] w-[52px] rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="mx-auto mt-px h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
        <span class="absolute -left-14 top-1/2 mb-px block -translate-y-1/2 text-sm font-medium">Share</span>
      </button>
      <button type="button" class="relative h-[52px] w-[52px] rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="mx-auto mt-px h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
        <span class="absolute -left-14 top-1/2 mb-px block -translate-y-1/2 text-sm font-medium">Print</span>
      </button>
      <button type="button" class="relative h-[52px] w-[52px] rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="mx-auto mt-px h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
        <span class="absolute -left-14 top-1/2 mb-px block -translate-y-1/2 text-sm font-medium">Save</span>
      </button>
      <button type="button" class="relative h-[52px] w-[52px] rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="mx-auto mt-px h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
          <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
        </svg>
        <span class="absolute -left-14 top-1/2 mb-px block -translate-y-1/2 text-sm font-medium">Copy</span>
      </button>
    </div>
    <button
      type="button"
      data-dial-toggle="speed-dial-menu-text-outside-button-square"
      aria-controls="speed-dial-menu-text-outside-button-square"
      aria-expanded="false"
      class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg aria-hidden="true" class="h-8 w-8 transition-transform " :class="{'rotate-45':hover}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      <span class="sr-only">Open actions menu</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
      timeout: 10
    }
  },
  methods: {
    mouseOver() {
      this.hover = true
    },
    async mouseLeave() {
      setTimeout(() => (this.hover = false), this.timeout * 1000)
    },
    mobileToggle() {
      this.hover = !this.hover
    }
  }
}
</script>
