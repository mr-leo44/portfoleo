<template>
  <div class="max-w-4xl w-full mx-auto py-12 px-6">
    <!-- Header -->
    <header>
      <div class="flex flex-col-reverse items-center xl:items-start xl:flex-row pt-10 xl:pt-0 gap-8 xl:gap-28">
        <div>
          <h3 class="text-3xl font-bold">🖐 I'm Lionel Kaniki</h3>
          <p class="my-2 text-xl">Fullstack Developer. I'm passionate about challenges and detail-oriented. With my 5 years of experience, I design tailor-made web platforms that adapt to clients needs.</p>
          <div class="flex gap-1 items-center">
            <Icon name="ph:map-pin-area" class="shrink-0 w-6 h-6" />
            <p class="text-lg -mt-1">Kinshasa, Republique Democratique du Congo</p>
          </div>
        </div>
        <div class="shrink-0">
          <img class="rounded-full drop-shadow-lg" src="" alt="photo">
        </div>
      </div>
      <!-- Credentials -->
      <div class="flex items-center my-2 gap-2">
        <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
          <Icon name="ph:envelope" class="shrink-0 w-8 h-8 text-gray-700" />
        </button>
        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
          <Icon name="ph:phone-call" class="shrink-0 w-8 h-8 text-gray-700" />
        </NuxtLink>
        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
          <Icon name="ph:github-logo" class="shrink-0 w-8 h-8 text-gray-700" />
        </NuxtLink>
        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
          <Icon name="ph:linkedin-logo" class="shrink-0 w-8 h-8 text-gray-700" />
        </NuxtLink>
        <NuxtLink class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
          <Icon name="ph:x-logo" class="shrink-0 w-8 h-8 text-gray-700" />
        </NuxtLink>
      </div>
    </header>

    <main class="flex flex-col gap-y-12 mt-12">
      <!-- Skills -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-2xl">
          Main technologies
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/php.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">PHP</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/typescript.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">TypeScript</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/vuejs.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Vue.js</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/nuxt.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Nuxt</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/tailwindcss.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Tailwind CSS</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/mysql.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">MySql</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/postgres.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">PostgreSQL</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/mongo.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">MongoDB</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/firebase.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Firebase</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/github-octocat.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Github</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-md px-3 py-2.5 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-6">
                <img src="~/assets/img/gitlab.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Gitlab</div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>

</template>
<script setup>

</script>