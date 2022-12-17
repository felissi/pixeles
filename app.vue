<template>
  <component :is="`py-config`" src="/pyconfig.toml" type="toml"></component>
  <component :is="`script`" src="https://pyscript.net/latest/pyscript.js" defer></component>
  <component :is="`link`" rel="stylesheet" href="https://pyscript.net/latest/pyscript.css"></component>
  <component :is="`script`" src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"></component>
  <NuxtLayout></NuxtLayout>
</template>
