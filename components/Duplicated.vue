<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#F9F5FF] py-2">
    <div class="mx-[10px] flex h-full w-full flex-col items-center justify-center rounded-lg bg-white">
      <div class="flex h-full w-full flex-col px-4 py-6 sm:px-9">
        <div class="">
          <div class="mb-4 text-2xl">
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
              <li v-if="item.length > 1">
                <a class="group block rounded-lg border border-gray-200 p-4 hover:border-transparent hover:bg-violet-500 hover:shadow-lg">
                  <dl class="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
                    <div>
                      <dt class="sr-only">Title</dt>
                      <dd class="font-medium leading-6 text-black group-hover:text-white">{{ hash }}</dd>
                    </div>
                    <div>
                      <dt class="sr-only">Count</dt>
                      <dd class="text-sm font-medium group-hover:text-violet-200 sm:mb-4 lg:mb-0 xl:mb-4">{{ item.length }}</dd>
                    </div>
                    <div class="col-start-2 row-start-1 row-end-3">
                      <dt class="sr-only">Images</dt>
                      <dd class="flex justify-end -space-x-2 sm:justify-start lg:justify-end xl:justify-start">
                        <Avatar :source="item" />
                      </dd>
                    </div>
                  </dl>
                </a>
              </li>
            </template>
            <li class="flex rounded-lg hover:shadow-lg">
              <a class="hover:shadow-xs flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-4 text-sm font-medium hover:border-transparent"> New Project </a>
            </li>
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
