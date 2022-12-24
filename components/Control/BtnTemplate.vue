<template>
  <button @click="$emit('click')" type="button" class="toggle-dark-state-example peer flex h-8 w-8 flex-row-reverse items-center justify-center rounded-lg bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500">
    <slot>
      <svg aria-hidden="true" data-toggle-icon="moon" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    </slot>
    <slot name="alternate"> </slot>
  </button>
  <div v-once v-if="text" id="tooltip-no-arrow" role="tooltip" :class="`tooltip absolute z-10 inline-block -translate-y-10 rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-all peer-hover:visible peer-hover:opacity-100 dark:bg-gray-700`">{{}}</div>
</template>
<script>
export default {
  // dont use this base alone
  data() {
    return {
      hash: (Math.random() + 1).toString(36).substring(4), // length=36/4=8
      text: ''
    }
  },
  emits:['click']
}
</script>
