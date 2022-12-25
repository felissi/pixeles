<template>
  <div class="grid w-full grid-cols-3 p-1">
    <div class="col-span-2 sm:col-span-1">
      <a class="cursor-pointer mr-3 inline-flex items-center rounded-lg border border-gray-200 bg-white fill-inherit px-4 py-2 text-xs font-medium text-inherit hover:bg-gray-100 hover:fill-primary hover:text-primary focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
        ><svg class="mr-1" xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path d="M4.562 17.396q-.854 0-1.447-.594-.594-.594-.594-1.448V4.646q0-.854.594-1.448.593-.594 1.447-.594h6v2.042h-6v10.708h10.73V9.375h2.041v5.979q0 .854-.593 1.448-.594.594-1.448.594ZM14.104 7.5V5.833h-1.666V4.146h1.666V2.458h1.688v1.667h1.687v1.687h-1.687V7.5ZM5.438 14h9l-3-4-2.25 3-1.5-2Zm-.876-9.354v10.708V4.646Z" />
        </svg>
        Upload
      </a>
    </div>
    <div class="col-span-1 hidden items-center justify-center space-x-2 sm:flex"></div>
    <div class="col-span-1 flex justify-end">
      <ControlSearchBtn />
      <ControlListBtn @click.native=" () => { controlStore.previewMode = 'list' } " /> 
      <ControlThumbnailBtn @click.native=" () => { controlStore.previewMode = 'thumbnail' } " />
      <ControlDeleteBtn @click.native="del" />
    </div>
  </div>
</template>
<script>
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [imageMixin, controlMixin],
  methods: {
    del() {
      if (!(Object.keys(this.imageStore.goingDelete).length == 0)) this.$bus.$emit('ShowSnackbar')
      this.imageStore.deleteImages()
    }
  }
}
</script>
