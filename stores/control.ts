import { defineStore } from 'pinia'

interface State {
  selectAll: boolean
  forceCheck: boolean | null
  isResultShown: boolean
}

export const useControlStore = defineStore('control', {
  state: (): State => {
    return {
      selectAll: false,
      forceCheck: false,
      isResultShown: false
    }
  },
  actions: {},
  getters: {
    test(state: State) {}
  }
})
