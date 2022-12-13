<template>
  <Navbar />
  
  <NuxtPage></NuxtPage>
</template>
<script>
export default {
  mounted() {
    window.process.env = { LOG: '' } // hack for initalizting pyscript
  }
}
</script>
