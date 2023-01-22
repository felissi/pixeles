<template>
  <li>
    <a class="group block rounded-lg border border-gray-400 p-4 transition-all duration-500 hover:border-transparent hover:bg-violet-500 hover:shadow-lg">
      <dl class="grid grid-cols-2 grid-rows-2 items-center text-left">
        <div>
          <slot name="cell-top-left"></slot>
        </div>
        <div>
          <slot name="cell-bottom-left"></slot>
        </div>
        <div class="col-start-2 row-start-1 row-end-3">
          <slot name="cell-right"></slot>
        </div>
      </dl>
    </a>
  </li>
</template>
