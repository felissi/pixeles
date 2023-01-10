<template>
  <ul class="grid grid-cols-1 justify-center gap-6 p-1 sm:grid-cols-2 md:grid-cols-3">
    <li v-for="i in [...Array(9)]" class="group rounded-2xl bg-[#F8FAFD] p-8 text-center transition-colors hover:bg-[#F0EEFD]">
      <div class="mx-auto mb-6 mt-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 group-hover:bg-violet-200">
        <svg class="group-hover:fill-violet-500" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path
            d="M7.5 6q-.625 0-1.062.438Q6 6.875 6 7.5t.438 1.062Q6.875 9 7.5 9t1.062-.438Q9 8.125 9 7.5t-.438-1.062Q8.125 6 7.5 6Zm0 10q-.625 0-1.062.438Q6 16.875 6 17.5t.438 1.062Q6.875 19 7.5 19t1.062-.438Q9 18.125 9 17.5t-.438-1.062Q8.125 16 7.5 16ZM4 3h16q.425 0 .712.287Q21 3.575 21 4v7q0 .425-.288.712Q20.425 12 20 12H4q-.425 0-.712-.288Q3 11.425 3 11V4q0-.425.288-.713Q3.575 3 4 3Zm0 10h16q.425 0 .712.287.288.288.288.713v7q0 .425-.288.712Q20.425 22 20 22H4q-.425 0-.712-.288Q3 21.425 3 21v-7q0-.425.288-.713Q3.575 13 4 13Z"
          />
        </svg>
      </div>
      <h3 class="m-0 text-base font-bold">Teams, Projects &amp; Folders</h3>
      <p class="mx-0 mt-2 mb-3 text-base">Create teams and organize your files in folders and projects.</p>
    </li>
  </ul>
</template>
