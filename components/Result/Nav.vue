<template>
  <nav role="presentation" aria-label="article tabs" class="sticky top-0 z-10 my-0 mx-auto w-full max-w-[1760px] transition-[max-width,margin] duration-300" style="">
    <div class="navigation-container my-0 mx-2 flex h-20 justify-center gap-2 rounded-[0_0_40px_40px] pt-2 opacity-100 transition-[height,opacity] duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
      <div role="tablist" class="tabbed-navigation whitespace-no-wrap flex h-full w-full justify-start overflow-auto rounded-[40px] bg-[#f8fafd]/90 text-center shadow-[0px_1px_2px_0px_rgba(0,0,0,.3),0px_1px_3px_1px_rgba(0,0,0,.15)]">
        <a
          v-for="page in navList"
          mioanalyticstracking=""
          role="tab"
          class="tab relative inline-flex flex-grow basis-full cursor-pointer items-center justify-center py-0 px-6 align-middle leading-10 content-[''] before:absolute before:h-full before:w-full before:scale-x-[.32] before:rounded-[40px] before:bg-[rgb(217,231,203)] before:opacity-0 before:transition-[transform,opacity] before:duration-200 focus:rounded-[40px] hover:rounded-[40px] hover:bg-[#44474614] hover:text-[#001d35] hover:text-[500]"
          tabindex="0"
          :class="{ active: controlStore.currentPage === page }"
          :aria-label="page"
          :aria-selected="controlStore.currentPage === page"
          @click=" () => { controlStore.currentPage = page } "
        >
          <span class="tab-label z-10">{{ page }}</span>
        </a>
      </div>

      <div role="button" aria-label="go to next tab" tabindex="0" class="scroll-button sm:hidden rounded-3xl cursor-pointer flex h-full bg-[#f8fafd]"><span class="google-symbols rounded-3xl flex items-center justify-center w-12 "><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg></span></div>
    </div>
  </nav>
</template>
<script>
import { Pages } from '@/stores/control'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [controlMixin],
  data() {
    return {
      navList: Pages
    }
  }
}
</script>
