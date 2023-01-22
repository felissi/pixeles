<template>
  <ResultItemTemplate>
    <template #cell-top-left>
      <div class="animate-pulse">
        <dt class="sr-only">Title</dt>
        <dd class="font-medium leading-6 text-black group-hover:text-white">
          <div class="h-2.5 max-w-2xl space-y-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </dd>
      </div>
    </template>
    <template #cell-bottom-left>
      <dt class="sr-only">Count</dt>
      <dd class="animate-pulse text-sm font-medium group-hover:text-violet-200 sm:mb-4 lg:mb-0 xl:mb-4">
        <div class="h-2.5 w-1/2 max-w-2xl space-y-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </dd>
    </template>
    <template #cell-right>
      <dt class="sr-only">Images</dt>
      <dd class="flex animate-pulse justify-end -space-x-2">
        <div class="max-w-40 flex -space-x-4">
          <div v-for="_ in [...Array(2)]">
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-300 drop-shadow-lg dark:border-gray-800">
              <svg class="m-auto h-4 w-4 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path
                  d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </dd>
    </template>
  </ResultItemTemplate>
</template>
