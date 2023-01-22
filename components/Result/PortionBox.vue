<template>
  <div class="w-full rounded bg-gray-800 py-5 px-5 text-gray-500 shadow-xl sm:w-2/3 md:w-1/2 lg:w-1/3" x-data="{cardOpen:false,cardData:cardData()}" x-init="$watch('cardOpen', value => value?(cardData.countUp($refs.total,0,11602,null,0.8),cardData.sessions.forEach((el,i) => cardData.countUp($refs[`device${i}`],0,cardData.sessions[i].size,null,1.6))):null);setTimeout(()=>{cardOpen=true},100)">
    <div class="flex w-full">
      <h3 class="flex-1 text-lg font-semibold leading-tight">TOTAL SESSIONS</h3>
    </div>
    <div>
      <div class="pb-4 lg:pb-6">
        <h4 class="inline-block text-2xl font-semibold leading-tight text-white lg:text-3xl" x-ref="total">0</h4>
      </div>
      <div class="pb-4 lg:pb-6">
        <div class="flex h-3 overflow-hidden rounded-full bg-gray-800 transition-all duration-500 animate-stretch">
          <template v-for="(item, index) in sessions">
            <div class="h-full" :class="`bg-${item.color}`" :style="`width:${item.size}%`"></div>
          </template>
        </div>
      </div>
      <div class="-mx-4 flex">
        <template v-for="(item, index) in sessions">
          <div class="basis-full px-4" :class="{ 'border-l border-gray-700': index !== 0 }">
            <div class="text-sm">
              <span class="mr-1 inline-block h-2 w-2 rounded-full align-middle" :class="`bg-${item.color}`">&nbsp;</span>
              <span class="align-middle ml-1" x-text="item.label">{{ item.label }}</span>
            </div>
            <div class="text-lg font-medium text-white"><span :x-ref="`device${index}`">0</span>%</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sessions: [
        {
          label: 'Duplicated',
          size: 60,
          color: 'violet-700'
        },
        {
          label: 'Unique',
          size: 40,
          color: 'violet-500'
        }
      ]
    }
  }
}
</script>
