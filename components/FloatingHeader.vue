<template>
  <header class="my-0 mx-auto py-0 px-4 fixed inset-x-0 w-full z-10 top-1 max-w-5xl">
    <nav class="flex items-center h-14 m-auto w-full rounded-full transition-colors max-w-3xl bg-[#F4F3F9]/80  my-shadow">
      <ul class="flex items-center justify-between h-full p-3 capitalize w-full gap-2">
        <li class="text-base text-center">
          <a href="/"
            ><picture
              ><source
                type="image/webp" />
              <source type="image/png" />
              <img src="" alt="" width="64" height="64" /></picture
          ></a>
        </li>
        <li class="flex flex-shrink text-base text-center">
          <ul class="flex gap-2">
            <li><a class="text-base text-center text-[#9aa1b7] px-2" >Features</a></li>
            <li><a class="text-base text-center text-[#9aa1b7] px-2" >Community</a></li>
            <li><a class="text-base text-center text-[#9aa1b7] px-2"  >twitter</a></li>
            <li><a class="text-base text-center text-[#9aa1b7] px-2"  >docs</a></li>
          </ul>
        </li>
        <li class="w-max">
          <ul class="flex m-0 p-0 gap-2 list-none">
            <li><a class="bg-white border-white border-solid border py-2 px-6 rounded-full transition-colors bg-opacity-5 text-[#9aa1b7]"  >Download</a></li>
            <li><a class="bg-white border-white border-solid border py-2 px-6 rounded-full transition-colors bg-opacity-5 text-[#9aa1b7]" >Get Started</a></li>
          </ul>
        </li>
        <li class="text-base mr-0 text-center sm:hidden">
          <button type="button" id="radix-0" aria-haspopup="menu" data-state="closed" class="flex p-3 rounded-full outline-none bg-[#ffffff0d]">
            <svg viewBox="0 0 16 16" fill="none" id="hamburger" width="16" height="16" aria-label="Open nav menu"><path d="M1.5 7.5H14.5M1.5 2.5H14.5M1.5 12.5H14.5" stroke="white" stroke-linecap="round"></path></svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
