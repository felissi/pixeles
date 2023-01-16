<template>
  <div class="flex h-[450px] min-h-[337px] w-full items-center justify-center py-2 sm:h-[337px]">
    <div class="my-shadow mx-[10px] flex h-full w-full flex-col items-center justify-center rounded-lg bg-white">
      <div class="flex h-full w-full flex-col overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full sm:px-9">
        <div class="">
          <div class="mb-4 text-left text-2xl">
            <span class="align-middle"> Duplicated </span>
            <span class="mr-2 rounded bg-purple-100 px-2.5 py-0.5 align-middle text-sm font-medium text-purple-800 dark:bg-purple-200 dark:text-purple-900"> {{ Object.values(hashMap).filter((list) => list?.length > 1).length }}</span>
          </div>
          <form class="relative mb-8">
            <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input class="w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-primary" type="text" aria-label="Filter projects" placeholder="Filter projects" />
          </form>
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <template v-for="(item, hash) in hashMap">
              <ResultItem :item="item" :hash="hash" />
            </template>
            <!-- <li class="flex rounded-lg hover:shadow-lg">
              <a class="hover:shadow-xs flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-4 text-sm font-medium hover:border-transparent"> New Project </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'

export default {
  mixins: [imageMixin],
  computed: {
    hashMap() {
      return this.imageStore.byHash
    }
  }
}
</script>
