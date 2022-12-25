import { defineStore } from 'pinia'
import { useImageStore } from './image'

interface State {
  selectAll: boolean
  forceCheck: boolean | null
  isResultShown: boolean
  previewMode: 'thumbnail' | 'list'
}

export const useControlStore = defineStore('control', {
  state: (): State => {
    return {
      selectAll: false,
      forceCheck: false,
      isResultShown: false,
      previewMode: 'list'
    }
  },
  actions: {
    togglePreview() {
      this.previewMode = this.previewMode === 'list' ? 'thumbnail' : 'list'
    }
  },
  getters: {
    isHadHash() {
      const imageStore = useImageStore()
      return imageStore.allImages.some((image) => image.hash.length >= 1)
    },
    isAllHadHash() {
      const imageStore = useImageStore()
      return imageStore.allImages.length ? imageStore.allImages.every((image) => image.hash.length >= 1) : false
    }
  }
})
