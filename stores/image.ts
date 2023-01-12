import { defineStore } from 'pinia'
import utils from './utils'
export interface Image {
  id: number
  name: string
  size: number
  type: string
  lastModified: number
  blob: File
  url: string
  hash: string
  thumbnail: string
}

interface State {
  allImages: Image[]
  selectedImages: { [id: number]: Image }
  deletedImages: Image[]
  recentDeleted: Image[]
  currentImages: Image[]
  inputImages: Partial<FileList>
  goingDelete: { [id: number]: null }
  uploadCount: number
  toUpdate: boolean
}

const [thumbnailWidth, thumbnailHeight] = [320, 320]
export const useImageStore = defineStore('image', {
  state: (): State => {
    return {
      allImages: [],
      selectedImages: {},
      deletedImages: [],
      recentDeleted: [],
      currentImages: [],
      inputImages: [],
      goingDelete: {},
      uploadCount: 0,
      toUpdate: false
    }
  },
  actions: {
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
    forceUpdate() {
      this.allImages.push(this.allImages[this.allImages.length - 1])
      this.allImages.pop()
      this.toUpdate = !this.toUpdate
    },
    fileUpload(event: Event) {
      const files = (event.target as HTMLInputElement).files
      if (files != null) {
        this.inputImages = files
        this.feedAllImages(files)
      }
    },
    async feedAllImages(files: FileList) {
      for (let f of files) {
        const { name, size, type, lastModified } = f
        this.allImages.push({
          id: this.uploadCount,
          name: name,
          size: size,
          type: type,
          lastModified: lastModified,
          url: URL.createObjectURL(f),
          hash: '',
          blob: f,
          thumbnail: await utils.getThumbnail(f, [thumbnailWidth, thumbnailHeight])
        })
        this.uploadCount++
      }
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
    },
    byHash(): { [hash: string]: Image[] } {
      if (this.allImages.every(({ hash }) => hash.length === 0)) return {}
      return utils.group(
        this.allImages.filter((image) => image.hash.length > 0),
        ({ hash }) => hash
      )
    },
    haveScanned(): boolean {
      if (!this.allImages.length) return false
      return this.allImages[0].hash.length > 0
    }
  }
})
