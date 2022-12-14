<template>
  <div class="flex items-center">
    <input v-model="checked" id="checkbox-table-search-1" type="checkbox" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
  </div>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'
export default {
  mixins: [imageMixin, controlMixin],
  props: {
    id: { default: null, type: Number }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    selectAll() {
      return this.controlStore.selectAll
    },
    forceCheck() {
      return this.controlStore.forceCheck
    }
  },
  watch: {
    checked(check: boolean) {
      if (check) {
        this.imageStore.pendingDelete(this.id)
      } else {
        this.controlStore.selectAll = false
        this.imageStore.withdrawPending(this.id)
      }
    },
    selectAll(check: boolean) {
      if (check) this.checked = check
    },
    forceCheck(check:boolean) {
      this.checked = check
    }
  }
}
</script>
