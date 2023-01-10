<template>
  <section class="fixed bottom-12 left-[50%] z-30 flex h-24 w-[720px] -translate-x-1/2 justify-evenly rounded-lg bg-white bg-gradient-to-br from-[#f7eef5] to-[#ebf1fa] p-6 align-middle opacity-80 shadow-[0px_50px_100px_-20px_rgba(0,0,0,0.4)] transition-all duration-300">
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs">Colors</label>
        <div class="opt-btn group" data-v-f2952dc6="">
          <div class="dark-mode-button--dark dark-mode-button" data-v-f2952dc6="">
            <div class="icon" data-v-f2952dc6="">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" class="opt-icon" data-v-f2952dc6="" style="margin: 2px 0px">
                <mask id="command-darkmode-toggle" data-v-f2952dc6="">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" data-v-f2952dc6=""></rect>
                  <circle cx="22" cy="-3" r="3" fill="black" data-v-f2952dc6=""></circle>
                </mask>
                <circle cx="12" cy="12" fill="currentColor" r="9" mask="url(#command-darkmode-toggle)" data-v-f2952dc6=""></circle>
                <g stroke="currentColor" data-v-f2952dc6="">
                  <line x1="12" y1="1" x2="12" y2="3" data-v-f2952dc6=""></line>
                  <line x1="12" y1="21" x2="12" y2="23" data-v-f2952dc6=""></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-f2952dc6=""></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-f2952dc6=""></line>
                  <line x1="1" y1="12" x2="3" y2="12" data-v-f2952dc6=""></line>
                  <line x1="21" y1="12" x2="23" y2="12" data-v-f2952dc6=""></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-f2952dc6=""></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-f2952dc6=""></line>
                </g>
              </svg>
            </div>
          </div>
          <div class="pt-1.5 transition-colors duration-100" data-v-f2952dc6="">Card</div>
        </div>
      </div>
    </div>
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs">Colors</label>
        <div class="flex h-6 align-middle">
          <div>
            <!---->
            <div class="relative h-6 text-xs">
              <div class="flex h-6 cursor-pointer select-none items-center rounded border border-current border-opacity-10 py-0 px-1 transition-all duration-300">
                <span class="relative block h-4 w-4 rounded-full" style="background: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))"></span
                ><svg class="chevron h-2 w-2 fill-current opacity-100" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.99988 0.567261C4.83325 0.572022 4.68091 0.633912 4.55713 0.767212L0.938965 4.47107C0.834228 4.57581 0.7771 4.70911 0.7771 4.86621C0.7771 5.18042 1.02466 5.43274 1.33887 5.43274C1.49121 5.43274 1.63879 5.37085 1.74829 5.26135L4.99512 1.92407L8.25146 5.26135C8.36096 5.36609 8.50378 5.43274 8.66089 5.43274C8.9751 5.43274 9.22266 5.18042 9.22266 4.86621C9.22266 4.70911 9.16553 4.57581 9.06079 4.47107L5.43787 0.767212C5.30933 0.633911 5.1665 0.567261 4.99988 0.567261Z"
                  ></path>
                </svg>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs"><input class="peer hidden" type="checkbox" />Background</label>
        <div class="flex h-6 align-middle">
          <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer select-none fill-primary">
            <rect x="1" y="1" width="30" height="16" rx="8" class="frame"></rect>
            <circle cx="10" cy="9" r="5" fill="white" class="peer-checked:translate-x-3"></circle>
          </svg>
        </div>
      </div>
    </div>
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs">
          Dark mode
          <input class="peer" type="checkbox" />
          <div class="flex h-6 align-middle">
            <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer select-none fill-primary">
              <rect x="1" y="1" width="30" height="16" rx="8" class="frame"></rect>
              <circle cx="10" cy="9" r="5" fill="white" class="peer-checked:translate-x-3"></circle>
            </svg>
          </div>
        </label>
      </div>
    </div>
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs">Padding</label>
        <div class="flex h-6 align-middle">
          <div class="flex align-middle">
            <div class="h-6 cursor-pointer select-none rounded py-1 px-2 text-left transition-all duration-300">
              <label><input class="hidden" type="radio" value="16" />16 </label>
            </div>
            <div class="text-medium h-6 cursor-pointer select-none rounded py-1 px-2 text-left transition-all duration-300">
              <label><input class="hidden" type="radio" value="32" />32 </label>
            </div>
            <div class="text-medium grid h-6 cursor-pointer select-none grid-cols-2 items-center rounded border border-current border-opacity-10 py-0 px-1 text-left text-current transition-all duration-300">
              <label><input class="hidden" type="radio" value="64" />64 </label>
            </div>
            <div class="text-medium h-6 cursor-pointer select-none rounded py-1 px-2 text-left transition-all duration-300">
              <label><input class="hidden" type="radio" value="128" />128 </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-6 transition-all duration-300">
      <div class="grid gap-2">
        <label class="label left text-xs">Language</label>
        <div class="flex h-6 align-middle">
          <div class="relative h-6 text-xs">
            <div class="flex h-full cursor-pointer select-none items-center rounded py-0 px-1 transition-all duration-300">
              <div class="grid h-6 cursor-pointer select-none items-center rounded border border-current border-opacity-10 py-0 px-1 text-current transition-all duration-300">
                <span><span>Swift</span><span> (auto)</span></span>
              </div>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron fill-current opacity-100">
                <path
                  d="M4.99988 0.567261C4.83325 0.572022 4.68091 0.633912 4.55713 0.767212L0.938965 4.47107C0.834228 4.57581 0.7771 4.70911 0.7771 4.86621C0.7771 5.18042 1.02466 5.43274 1.33887 5.43274C1.49121 5.43274 1.63879 5.37085 1.74829 5.26135L4.99512 1.92407L8.25146 5.26135C8.36096 5.36609 8.50378 5.43274 8.66089 5.43274C8.9751 5.43274 9.22266 5.18042 9.22266 4.86621C9.22266 4.70911 9.16553 4.57581 9.06079 4.47107L5.43787 0.767212C5.30933 0.633911 5.1665 0.567261 4.99988 0.567261Z"
                ></path>
              </svg>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
    <div class="mr-0 flex rounded-t transition-all duration-300">
      <div class="relative flex">
        <button class="whitespace-no-wrap flex cursor-pointer items-center rounded border-0 bg-violet-800/20 py-3 px-4 text-violet-700 transition-all duration-300">
          Export
          <svg class="ml-2 fill-violet-700" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.00635 10.1995C6.33008 10.1995 6.59668 9.93286 6.59668 9.61548V3.22974L6.55225 2.29028L6.93945 2.75366L7.82812 3.69946C7.92969 3.81372 8.07568 3.87085 8.22168 3.87085C8.51367 3.87085 8.75488 3.66138 8.75488 3.36304C8.75488 3.20435 8.69141 3.09009 8.5835 2.98218L6.45703 0.931885C6.30469 0.779541 6.15869 0.72876 6.00635 0.72876C5.84766 0.72876 5.70801 0.779541 5.55566 0.931885L3.42285 2.98218C3.31494 3.09009 3.25146 3.20435 3.25146 3.36304C3.25146 3.66138 3.48633 3.87085 3.77832 3.87085C3.92432 3.87085 4.07666 3.81372 4.17822 3.69946L5.06689 2.75366L5.46045 2.28394L5.40967 3.22974V9.61548C5.40967 9.93286 5.67627 10.1995 6.00635 10.1995ZM2.34375 15.2712H9.65625C11.0337 15.2712 11.7446 14.5603 11.7446 13.2019V6.96216C11.7446 5.60376 11.0337 4.89282 9.65625 4.89282H7.94238V6.15601H9.57373C10.1514 6.15601 10.4814 6.46069 10.4814 7.07007V13.0876C10.4814 13.697 10.1514 14.0017 9.57373 14.0017H2.42627C1.84229 14.0017 1.51855 13.697 1.51855 13.0876V7.07007C1.51855 6.46069 1.84229 6.15601 2.42627 6.15601H4.07666V4.89282H2.34375C0.972656 4.89282 0.255371 5.59741 0.255371 6.96216V13.2019C0.255371 14.5603 0.972656 15.2712 2.34375 15.2712Z"
            ></path>
          </svg>
        </button>
        <div class="pointer-events-none absolute bottom-full opacity-0 transition-all duration-300">
          <div class="options">
            <a href="#" class="option"
              ><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.22168 11.1299H11.7783C12.9502 11.1299 13.5479 10.5381 13.5479 9.37793V2.61621C13.5479 1.46191 12.9502 0.870117 11.7783 0.870117H2.22168C1.0498 0.870117 0.452148 1.45605 0.452148 2.61621V9.37793C0.452148 10.5381 1.0498 11.1299 2.22168 11.1299ZM1.41895 2.68066C1.41895 2.11816 1.71777 1.83691 2.25684 1.83691H11.7432C12.2764 1.83691 12.5811 2.11816 12.5811 2.68066V8.7041L9.68066 5.97949C9.43457 5.7627 9.14746 5.64551 8.84863 5.64551C8.54395 5.64551 8.26855 5.74512 8.0166 5.97363L5.51465 8.21191L4.48926 7.28613C4.25488 7.0752 3.99707 6.96973 3.73926 6.96973C3.4873 6.96973 3.25293 7.06934 3.02441 7.28027L1.41895 8.72754V2.68066ZM4.6416 6.06152C5.3623 6.06152 5.9541 5.47559 5.9541 4.74902C5.9541 4.02832 5.3623 3.43066 4.6416 3.43066C3.91504 3.43066 3.3291 4.02832 3.3291 4.74902C3.3291 5.47559 3.91504 6.06152 4.6416 6.06152Z"
                ></path>
              </svg>
              Save PNG </a
            ><a href="#" class="option"
              ><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.22168 11.1299H11.7783C12.9502 11.1299 13.5479 10.5381 13.5479 9.37793V2.61621C13.5479 1.46191 12.9502 0.870117 11.7783 0.870117H2.22168C1.0498 0.870117 0.452148 1.45605 0.452148 2.61621V9.37793C0.452148 10.5381 1.0498 11.1299 2.22168 11.1299ZM1.41895 2.68066C1.41895 2.11816 1.71777 1.83691 2.25684 1.83691H11.7432C12.2764 1.83691 12.5811 2.11816 12.5811 2.68066V8.7041L9.68066 5.97949C9.43457 5.7627 9.14746 5.64551 8.84863 5.64551C8.54395 5.64551 8.26855 5.74512 8.0166 5.97363L5.51465 8.21191L4.48926 7.28613C4.25488 7.0752 3.99707 6.96973 3.73926 6.96973C3.4873 6.96973 3.25293 7.06934 3.02441 7.28027L1.41895 8.72754V2.68066ZM4.6416 6.06152C5.3623 6.06152 5.9541 5.47559 5.9541 4.74902C5.9541 4.02832 5.3623 3.43066 4.6416 3.43066C3.91504 3.43066 3.3291 4.02832 3.3291 4.74902C3.3291 5.47559 3.91504 6.06152 4.6416 6.06152Z"
                ></path>
              </svg>
              Save SVG </a
            ><a href="#" class="option"
              ><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.385742 14.9922C0.385742 16.3696 1.09668 17.0806 2.45508 17.0806H8.39648C9.75488 17.0806 10.4658 16.3633 10.4658 14.9922V13.8179H11.5449C12.9033 13.8179 13.6143 13.1006 13.6143 11.7295V3.01416C13.6143 1.63672 12.9033 0.919434 11.5449 0.919434H5.60352C4.24512 0.919434 3.53418 1.63672 3.53418 3.01416V4.18213H2.45508C1.09668 4.18213 0.385742 4.90576 0.385742 6.27686V14.9922ZM7.07617 3.19824C6.79688 3.19824 6.64453 3.00781 6.64453 2.79834V2.65234C6.64453 2.46191 6.78418 2.24609 7.07617 2.24609H10.0659C10.3643 2.24609 10.4976 2.46191 10.4976 2.65234V2.79834C10.4976 3.00781 10.3516 3.19824 10.0659 3.19824H7.07617ZM1.64893 14.9097V6.35938C1.64893 5.77539 1.95361 5.45166 2.56934 5.45166H4.50537V8.90479C4.50537 9.8252 4.95605 10.2695 5.87012 10.2695H9.20264V14.9097C9.20264 15.4937 8.89795 15.8174 8.28223 15.8174H2.56299C1.95361 15.8174 1.64893 15.4937 1.64893 14.9097ZM5.99072 9.15869C5.73047 9.15869 5.61621 9.05078 5.61621 8.78418V5.69287L9.03125 9.15869H5.99072Z"
                ></path>
              </svg>
              Copy image </a
            ><a href="#" class="option"
              ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.70483 9.68146L7.67603 8.69757C6.927 8.6341 6.38745 8.38654 6.00024 7.99933C4.92749 6.92658 4.92749 5.40949 5.9939 4.34943L8.10132 2.23566C9.17407 1.16925 10.6848 1.1629 11.7576 2.23566C12.8367 3.31476 12.824 4.8255 11.7639 5.89191L10.6848 6.96466C10.8879 7.43439 10.9578 8.00568 10.8435 8.50079L12.6589 6.69171C14.2205 5.13654 14.2268 2.91486 12.6526 1.34064C11.072 -0.239928 8.86304 -0.227233 7.30151 1.33429L5.09253 3.54328C3.53101 5.1048 3.52466 7.32013 5.09888 8.89435C5.46704 9.26886 5.97485 9.54816 6.70483 9.68146ZM7.29517 4.31769L6.32397 5.30158C7.073 5.3714 7.61255 5.61261 7.99976 5.99982C9.07886 7.07257 9.07251 8.58966 8.0061 9.65607L5.89868 11.7635C4.82593 12.8362 3.31519 12.8362 2.24878 11.7635C1.16968 10.6844 1.17603 9.17999 2.24243 8.11359L3.31519 7.03449C3.11206 6.57111 3.04858 5.99982 3.15649 5.49835L1.34106 7.31378C-0.220459 8.86896 -0.226807 11.0843 1.34741 12.6585C2.92798 14.2391 5.13696 14.2264 6.69849 12.6712L8.90747 10.4559C10.469 8.89435 10.4753 6.67902 8.90112 5.1048C8.53296 4.73663 8.03149 4.45734 7.29517 4.31769Z"
                ></path>
              </svg>
              Copy URL
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
