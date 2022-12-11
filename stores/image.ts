import { defineStore } from 'pinia'
interface Image {
  id:number
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
  currentImages: Image[]
  inputImages: Partial<FileList>
}

export const useImageStore = defineStore('image', {
  state: (): State => {
    return {
      allImages: [],
      selectedImages: [],
      deletedImages: [],
      currentImages: [],
      inputImages: []
    }
  },
  actions: {
    grouping<T, U>(arr: T[], func: (v: T, i: number, arr: T[]) => Readonly<U>) {
      let r = {}
      for (let i = 0; i < arr.length; i++) {
        r[func(v, i, arr)] = r[func(v, i, arr)] ?? []
        r[func(v, i, arr)].push(arr[i])
      }
      return r
    }
  },
  getters: {
    allImagesByHash(state: State) {
    }
  }
})
