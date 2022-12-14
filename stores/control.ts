import { defineStore } from 'pinia'

interface State {
  selectAll:boolean
  forceCheck:boolean|null
}

export const useControlStore = defineStore('control', {
  state: (): State => {
    return {
      selectAll:false,
      forceCheck:false,
    }
  },
  actions: {
  },
  getters: {
    test(state: State) {},
  }
})
