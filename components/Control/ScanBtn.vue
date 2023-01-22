This functionality. Style added outside.
<template>
  <button type="button" @click="controlStore.startScanning" @blur="endProcess" :disabled="NotReady" id="ScanBtn">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { imageMixin } from '@/stores/imports/imageMixin'
import { controlMixin } from '@/stores/imports/controlMixin'

export default {
  mixins: [imageMixin, controlMixin],
  methods: {
    endProcess() {
      this.imageStore.forceUpdate()
      this.controlStore.stopScanning()
    }
  },
  computed: {
    NotReady() {
      if (this.controlStore.scanning) return true
      if (!this.controlStore.isReadyToScan) return true
      return false
    }
  }
}
</script>
