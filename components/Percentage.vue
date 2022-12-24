<template>
  <div class="flex items-center justify-center " :x-data="{ circumference: ((2 * 22) / 7) * 120 }">
    <svg class="rotate-90 h-72 w-72  transform">
      <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="20" fill="transparent" class="" />

      <circle  cx="145" cy="145" r="120" stroke="currentColor" stroke-width="20" fill="transparent" :stroke-dasharray="circumference" class="an text-blue-500 shadow-inner" stroke-linecap="round" />
    </svg>
    <span class="absolute text-5xl" x-text="`${currentSkill.percent}%`"></span>
    <div class="relative text-6xl">{{ `${percent}%` }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circumference: Math.PI * 120 * 2,
      percent: 95
    }
  }
  // mounted() {
  //   for (let i=0;i<4000;i++) {
  //     setTimeout(() =>{

  //       this.percent = this.percent + (100-this.percent)/4000
  //     },1000)
  //   }

  // }
}
</script>
<style>
.an {
  animation: fill1 ease-out 1s forwards;
}

@keyframes fill1 {
  0% {
    stroke-dashoffset: v-bind(circumference);
  }
  100% {
    stroke-dashoffset: v-bind(circumference - percent / 100 * circumference);
  }
}
</style>
