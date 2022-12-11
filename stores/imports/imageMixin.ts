import { useImageStore } from '@/stores/image'
import { mapActions, mapState, storeToRefs, mapStores,mapWritableState } from 'pinia'

export const imageMixin = {
  data() {
    const store = storeToRefs(useImageStore())
    return {
      image: {
        allImages: store.allImages,
        selectedImages: store.selectedImages,
        deletedImages: store.deletedImages,
        currentImages: store.currentImages,
        inputImages: store.inputImages
      }
    }
  },
  methods: {
    // Action
    // ...mapActions(useImageStore, ['toggleMode'])
  },
  computed: {
    // State
    // ...mapState(useImageStore, ['allImages','selectedImages','deletedImages','currentImages','inputImages']),
    ...mapStores(useImageStore),
    ...mapWritableState(useImageStore, ['allImages','selectedImages','deletedImages','currentImages','inputImages'])
    // Getter
    // ...mapState(useImageStore, ['defaultMode'])
  }
}
