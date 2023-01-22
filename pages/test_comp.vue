
import Nav from '~~/components/Result/Nav.vue';


import Nav from '~~/components/Result/Nav.vue';


import Nav from '~~/components/Result/Nav.vue';

<template>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <li>
      <a class="group block rounded-lg border border-gray-400 p-4 hover:border-transparent hover:bg-violet-500 hover:shadow-lg"
        ><dl class="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="font-medium leading-6 text-black group-hover:text-white">f7cfcfc3c7ef8909</dd>
          </div>
          <div>
            <dt class="sr-only">Count</dt>
            <dd class="text-sm font-medium group-hover:text-violet-200 sm:mb-4 lg:mb-0 xl:mb-4">2</dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3">
            <dt class="sr-only">Images</dt>
            <dd class="flex justify-end -space-x-2 sm:justify-start lg:justify-end xl:justify-start">
              <div class="max-w-40 flex -space-x-4"><img class="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800" src="blob:http://localhost:3000/8cbf1bf3-d624-41da-bd31-f6fb8903929d" alt="" /><img class="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800" src="blob:http://localhost:3000/3f49ac6f-77d8-4029-be2a-d04b6e630350" alt="" /><!--v-if--></div>
            </dd>
          </div>
        </dl></a
      >
    </li>
  </ul>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ResultSkeletonItem />
  </ul>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ResultItem :item="['blob:http://localhost:3000/8cbf1bf3-d624-41da-bd31-f6fb8903929d','blob:http://localhost:3000/8cbf1bf3-d624-41da-bd31-f6fb8903929d']" :hash="'123'"/>
  </ul>
  <ResultNav />
  <div class="h-[1000px] bg-background">
    <ResultPortionBox />
  </div>
</template>
