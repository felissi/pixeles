<template>
  <div>
    <button @click="LoadPyScript">load</button>
    <py-script>
      print(window.__NUXT__)
    </py-script>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPyScriptLoaded: false
    }
  },
  methods: {
    LoadPyScript() {
      const head = document.getElementsByTagName('head')[0]
      const node = document.createElement('script')
      node.src = 'https://pyscript.net/latest/pyscript.js'
      head.appendChild(node)
      this.isPyScriptLoaded = true
      this.nextStep()
    },
    nextStep() {
      
    }
  }
}
</script>
