<template>
  <div class="text absolute z-50 w-[188px] scale-100 rounded-lg bg-white p-2 shadow-lg transition-transform dark:bg-[#18191C]" :class="`${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`" :style="`top:${top}px; left:${left}px`">
    <ul class="items">
      <li
        @click=" () => { show = false } "
        class="rounded hover:bg-[#4752C4] hover:text-white dark:text-[#4F5660] dark:hover:text-white"
      >
        <a class="flex items-center justify-between rounded-sm px-2 py-2 text-xs font-medium no-underline transition-all">
          <span>
            <i class="icon fa-solid fa-rotate-right"></i>
            Refresh
          </span>
          <span>F5</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      top: 0,
      left: 0,
      show: false
    }
  },
  methods: {
    showMenu(event: MouseEvent) {
      this.top = event.pageY
      this.left = event.pageX
    }
  },
  mounted() {
    this.$bus.$on('ShowActionMenu', (event: MouseEvent) => {
      this.show = true
      this.showMenu(event)
    })
    document.addEventListener('click', (event: MouseEvent) => {this.show = false})
  }
}
</script>
