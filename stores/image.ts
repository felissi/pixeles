import { defineStore } from 'pinia'
interface Image {
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
  selectedImages: Image[]
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
      selectedImages: [],
      deletedImages: [],
      recentDeleted: [],
      currentImages: [],
      inputImages: [],
      goingDelete: {}
    }
  },
  actions: {
    // grouping<T, U>(arr: T[], func: (v: T, i: number, arr: T[]) => Readonly<U>) {
    //   let r = {}
    //   for (let i = 0; i < arr.length; i++) {
    //     r[func(v, i, arr)] = r[func(v, i, arr)] ?? []
    //     r[func(v, i, arr)].push(arr[i])
    //   }
    //   return r
    // },
    pendingDelete(id: number | null) {
      if (typeof id == 'number') this.goingDelete[id] = null
    },
    withdrawPending(id: number) {
      delete this.goingDelete[id]
    },
    deleteImages() {
      const save: Image[] = []
      this.recentDeleted = []
      this.allImages.forEach((image) => {
        if (this.pendingDeleteList.includes(image.id)) {
          this.deletedImages.push(image)
          this.recentDeleted.push(image)
        } else {
          save.push(image)
        }
      })
      this.allImages = save
      this.goingDelete = {}
    },
    undoDelete() {
      this.allImages = this.allImages.concat(this.recentDeleted)
      this.allImages.sort((a, b) => a.id - b.id)
      this.recentDeleted = []
    }
  },
  getters: {
    allImagesByHash(state: State) {},
    pendingDeleteList(): number[] {
      return Object.keys(this.goingDelete).map((s) => Number(s))
    },
    isAllSelected(): boolean {
      return Object.keys(this.goingDelete).length === this.allImages.length
    }
  }
})
