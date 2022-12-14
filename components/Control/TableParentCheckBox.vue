<template>
  <div class="flex items-center">
    <input v-model="controlStore.selectAll" id="checkbox-table-search-1" type="checkbox" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [imageMixin, controlMixin],
  computed: {
    isAllSelected() {
      return this.imageStore.isAllSelected
    },
    selectAll() {
      return this.controlStore.selectAll
    }
  },
  watch: {
    selectAll(check: boolean) {
      if (!check && this.imageStore.isAllSelected) {
          this.controlStore.forceCheck = this.controlStore.forceCheck==null ? false : null
      }
    },
    isAllSelected(yes: boolean) {
      this.controlStore.selectAll = yes
    }
  }
}
</script>
