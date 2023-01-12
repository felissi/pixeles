<template>
  <div class="flex h-[450px] min-h-[337px] w-full flex-col sm:h-[337px]">
    <div class="-mb-2 overflow-x-auto rounded-b-lg scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div class="relative m-0 h-full w-full p-0">
        <div class="h-full">
          <table class="h-full w-full table-fixed">
            <thead class="sticky top-0 z-10 border-b bg-white">
              <tr>
                <th scope="col" class="w-[32px] px-6 py-4 text-left text-sm font-medium text-gray-900"><ControlTableParentCheckBox /></th>
                <!-- <th scope="col" class="px-6 py-4 text-left text-sm font-medium text-gray-900 sm:w-[64px] min-w-[40px] w-[40px]"></th> -->
                <th scope="col" :key="i" v-for="(head, i) in header" class="px-6 py-4 text-left text-sm font-medium text-gray-900" :class="headerClass[i]">{{ head }}</th>
              </tr>
            </thead>
            <tbody>
              <tr @contextmenu.prevent="showMenu" :key="image.id" v-for="image in imageStore.allImages" class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900`"><ControlTableCheckBox :id="image.id" :item="image" /></td>
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 ${headerClass[0]}`">
                  <div class="flex items-center align-top">
                    <img :src="image.thumbnail" class="mr-3 h-[38px] w-[38px] rounded sm:h-[64px] sm:w-[64px]" /><span class="truncate text-ellipsis">{{ image.name }}</span>
                  </div>
                </td>
                <td :class="`whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900 ${headerClass[1]}`">{{ `${toMB(image.size)} MB` }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900 ${headerClass[2]}`">{{ image.type }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900 ${headerClass[3]}`">{{ toDate(image.lastModified) }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900 ${headerClass[4]}`"><TableMoreButton /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
export default {
  mixins: [imageMixin],
  props: {
    header: { default: ['File Name', 'Size', 'Type', 'Last Modified', 'Action'] },
    headerClass: { default: ['table-cell w-fit whitespace-pre-line overflow-hidden', 'hidden w-[90px] sm:table-cell', 'hidden w-[90px] xl:table-cell', 'w-40 hidden table-fixed truncate xl:table-cell', 'w-20 table-cell'] }
  },
  methods: {
    toMB(byte: number): string {
      return Number(byte / 1024 / 1024).toFixed(2)
    },
    toDate(date: number): Date {
      return new Date(date)
    },
    showMenu(event: MouseEvent) {
      this.$bus.$emit('ShowActionMenu', event)
    }
  }
}
</script>
