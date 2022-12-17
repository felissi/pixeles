<template>
  <div class="flex w-full flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="mb-[32px] w-full table-fixed sm:table-auto">
            <thead class="border-b bg-white">
              <tr>
                <th scope="col" class="w-[32px] px-6 py-4 text-left text-sm font-medium text-gray-900 sm:w-fit"><ControlTableParentCheckBox /></th>
                <!-- <th scope="col" class="px-6 py-4 text-left text-sm font-medium text-gray-900 sm:w-[64px] min-w-[40px] w-[40px]"></th> -->
                <th scope="col" :key="i" v-for="(head, i) in header" class="px-6 py-4 text-left text-sm font-medium text-gray-900" :class="headerClass[i]">{{ head }}</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="image.id" v-for="image in allImages" class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900`"><ControlTableCheckBox :id="image.id" /></td>
                <!-- <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900`"><img :src="image.url" class="w-[38px] h-[38px] sm:w-[64px] sm:h-[64px] mx-auto"/></td> -->
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 ${headerClass[0]}`">
                  <div class="flex items-center align-top"><img :src="image.url" class="mr-3 h-[38px] w-[38px] sm:h-[64px] sm:w-[64px] rounded" />{{ image.name }}</div>
                </td>
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900 ${headerClass[1]}`">{{ `${toMB(image.size)} MB` }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900 ${headerClass[2]}`">{{ image.type }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900 ${headerClass[3]}`">{{ toDate(image.lastModified) }}</td>
                <td :class="`whitespace-nowrap px-6 py-4 text-sm font-light  text-gray-900 ${headerClass[4]}`"><TableMoreButton /></td>
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
    headerClass: { default: ['table-cell w-[280px] sm:w-fit whitespace-pre-line overflow-hidden', 'hidden  sm:table-cell', 'hidden  xl:table-cell', 'hidden  xl:table-cell', 'w-[80px] table-cell'] }
  },
  methods: {
    toMB(byte: number): string {
      return Number(byte / 1024 / 1024).toFixed(2)
    },
    toDate(date: number): Date {
      return new Date(date)
    }
  }
}
</script>
