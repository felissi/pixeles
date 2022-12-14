import { useControlStore } from '@/stores/control'
import { mapActions, mapState, storeToRefs, mapStores, mapWritableState } from 'pinia'
export const controlMixin = {
  setup() {
    const controlStore = useControlStore()
    return { controlStore }
  },
  data() {
    const store = storeToRefs(useControlStore())
  },
  computed: {
    ...mapStores(useControlStore),
    ...mapWritableState(useControlStore, ['selectAll'])
  }
}
