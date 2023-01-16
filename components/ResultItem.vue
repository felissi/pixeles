<template>
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
<script setup lang="ts">
import { Image } from '@/stores/image'
import { isTemplateElement } from '@babel/types'
interface Props {
  item: Image[]
  hash: number | string
}
defineProps<Props>()
</script>
