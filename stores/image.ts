import { defineStore } from 'pinia'
export interface Image {
  id: number
  name: string
  size: number
  type: string
  lastModified: number
  blob: object
  url: string
  hash: string
}

interface State {
  allImages: Image[]
  selectedImages: { [id: number]: Image }
  deletedImages: Image[]
  recentDeleted: Image[]
  currentImages: Image[]
  inputImages: Partial<FileList>
  goingDelete: { [id: number]: null }
}

export const useImageStore = defineStore('image', {
  state: (): State => {
    return {
      allImages: [],
      selectedImages: {},
      deletedImages: [],
      recentDeleted: [],
      currentImages: [],
      inputImages: [],
      goingDelete: {}
    }
  },
  actions: {
    group<T, U extends PropertyKey, F extends (arg: T, index: number, list: T[]) => U>(arr: T[], func: F): Record<U, T[]> {
      let r = {} as Record<U, T[]>
      for (let i = 0; i < arr.length; i++) {
        let t = func(arr[i], i, arr)
        r[t] = r[t] ?? []
        r[t].push(arr[i])
      }
      return r
    },
    select(image: Image) {
      this.selectedImages[image.id] = image
    },
    unselect(thing: number | Image) {
      if (typeof thing === 'number') {
        delete this.selectedImages[thing]
      } else {
        delete this.selectedImages[thing.id]
      }
    },
    pendingDelete(id: number | null) {
      if (typeof id == 'number') this.goingDelete[id] = null
    },
    withdrawPending(id: number) {
      delete this.goingDelete[id]
    },
    deleteImages() {
      const save: Image[] = []
      if (this.pendingDeleteList.length > 0) {
        this.recentDeleted = []
        this.allImages.forEach((image) => {
          if (this.pendingDeleteList.includes(image.id)) {
            this.deletedImages.push(image)
            this.recentDeleted.push(image)
            this.withdrawPending(image.id)
            this.unselect(image.id)
          } else {
            save.push(image)
          }
        })
        this.allImages = save
        this.goingDelete = {}
      }
    },
    undoDelete() {
      this.allImages = this.allImages.concat(this.recentDeleted)
      this.allImages.sort((a, b) => a.id - b.id)
      this.deletedImages = this.deletedImages.slice(0, this.deletedImages.length - this.recentDeleted.length)
      this.recentDeleted = []
    },
    byHash(): { [hash: string]: Image[] } {
      return this.group(this.allImages, ({ hash }) => hash)
    }
  },
  getters: {
    pendingDeleteList(): number[] {
      return Object.keys(this.goingDelete).map((s) => Number(s))
    },
    isAllSelected(): boolean {
      return Object.keys(this.goingDelete).length === this.allImages.length
    },
    isAllImagesScanned(): boolean {
      if (this.allImages.length === 0) return false
      return this.allImages.every(({ hash }) => hash.length > 0)
    }
  }
})
