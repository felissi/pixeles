<template>
  <div class="flex w-full items-center justify-center">
    <div class="group flex w-full items-center justify-center mx-[10px]">
      <label for="dropzone-file" class="my-shadow from-[#a58efa] to-[#d9b2e8] bg-gradient-to-br dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[#e5e7eb] bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <!-- <svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> -->
          <svg class="group-hover:hidden fill-violet-900" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9 42q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h20.45v3H9v30h30V18.6h3V39q0 1.25-.875 2.125T39 42Zm26-24.9v-4.05h-4.05v-3H35V6h3v4.05h4.05v3H38v4.05ZM12 33.9h24l-7.2-9.6-6.35 8.35-4.7-6.2ZM9 9v30V9Z" /></svg>
          <!-- hover -->
          <svg class="hidden group-hover:block fill-violet-800" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h20.45v8.55h4.05v4.05H42V39q0 1.2-.9 2.1-.9.9-2.1.9Zm3-8.1h24l-7.2-9.6-6.35 8.35-4.7-6.2Zm23-16.8v-4.05h-4.05v-3H35V6h3v4.05h4.05v3H38v4.05Z" /></svg>
          <p class="mb-2 text-sm text-violet-800 dark:text-violet-800"><span class="block text-center font-semibold">Click to upload</span> <span class="block text-center">or</span> <span class="block text-center font-semibold">Drag and drop</span></p>
          <p class="text-xs text-gray-800 dark:text-gray-400">PNG, JPG or GIF</p>
        </div>
        <slot>
          <input id="dropzone-file" type="file" class="hidden" />
        </slot>
      </label>
    </div>
  </div>
</template>
<style>
.my-shadow{ 
  /* repress vite postcss error */
}
</style>
