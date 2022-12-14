import { useImageStore } from '@/stores/image'
import { mapActions, mapState, storeToRefs, mapStores, mapWritableState } from 'pinia'

export const imageMixin = {
  setup() {
    const imageStore = useImageStore()
    return { imageStore }
  },
  data() {
    const store = storeToRefs(useImageStore())
    return {
      image: {
        allImages: store.allImages,
        selectedImages: store.selectedImages,
        deletedImages: store.deletedImages,
        currentImages: store.currentImages,
        inputImages: store.inputImages,
        goingDelete: store.goingDelete
      }
    }
  },
  methods: {
    // Action
    // ...mapActions(useImageStore, ['pendingDelete'])
  },
  computed: {
    // State
    // ...mapState(useImageStore, ['allImages','selectedImages','deletedImages','currentImages','inputImages']),
    ...mapStores(useImageStore),
    ...mapWritableState(useImageStore, ['allImages', 'selectedImages', 'deletedImages', 'currentImages', 'inputImages', 'goingDelete'])
    // Getter
    // ...mapState(useImageStore, ['defaultMode'])
  }
}
