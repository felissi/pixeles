import { defineStore } from 'pinia'
import { useImageStore } from './image'

export const Pages = ['Overview', 'Duplicated', 'Unique', 'Upload'] as const

interface State {
  selectAll: boolean
  forceCheck: boolean | null
  isResultShown: boolean
  previewMode: 'thumbnail' | 'list'
  scanning: boolean
  startTime: number[]
  endTime: number[]
  processTime: number[]
  currentPage: typeof Pages[number]
  isHadHash: boolean
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
      processTime: [],
      currentPage: 'Overview',
      isHadHash: false
    }
  },
  actions: {
    forceUpdate() {},
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
      this.update()
    },
    getProcessTime(index: number) {
      this.processTime.push(this.endTime[index] - this.startTime[index])
    },
    update() {
      const imageStore = useImageStore()
      console.log('🚀 ~ file: control.ts:56 ~ update ~ imageStore', imageStore.allImages)
      this.isHadHash = imageStore.allImages.length ? imageStore.allImages.some(({ hash }) => hash.length > 0) : false
    }
  },
  getters: {
    isHadHash() {
      const imageStore = useImageStore()
      return imageStore.isHadHash
    },
    isAllHadHash() {
      const imageStore = useImageStore()
      return imageStore.isAllHadHash
    },
    isReadyToScan() {
      const imageStore = useImageStore()
      return !imageStore.isFeeding
    }
  }
})
