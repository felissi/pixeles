import { defineStore } from 'pinia'
import { useImageStore } from './image'

interface State {
  selectAll: boolean
  forceCheck: boolean | null
  isResultShown: boolean
  previewMode: 'thumbnail' | 'list'
  scanning: boolean
  startTime: number[]
  endTime: number[]
  processTime: number[]
}

export const useControlStore = defineStore('control', {
  state: (): State => {
    return {
      selectAll: false,
      forceCheck: false,
      isResultShown: false,
      previewMode: 'list',
      scanning: false,
      startTime: [], // in ms
      endTime: [],
      processTime: []
    }
  },
  actions: {
    forceUpdate() {
    },
    togglePreview() {
      this.previewMode = this.previewMode === 'list' ? 'thumbnail' : 'list'
    },
    startScanning() {
      const imageStore = useImageStore()
      if (!imageStore.allImages.length) return
      this.startTime.push(Date.now())
      this.scanning = true
    },
    stopScanning() {
      this.endTime.push(Date.now())
      this.scanning = false
      this.getProcessTime(this.endTime.length - 1)
    },
    getProcessTime(index: number) {
      this.processTime.push(this.endTime[index] - this.startTime[index])
    }
  },
  getters: {
    // isHadHash() {
    //   const imageStore = useImageStore()
    //   return imageStore.allImages.some((image) => image.hash.length >= 1)
    // },
    // isAllHadHash() {
    //   const imageStore = useImageStore()
    //   return imageStore.allImages.length ? imageStore.allImages.every((image) => image.hash.length >= 1) : false
    // }
  }
})
