<template>
  <Toaster />
  <div class="max-w-4xl relative w-full mx-auto py-8 xl:py-12 px-6 xl:px-0">
    <!-- Header -->
    <header>
      <div class="flex flex-col gap-8 xl:gap-28">
        <div class="flex flex-col gap-y-1.5">
          <h3 class="text-2xl font-bold">🖐 {{ $t("header.greetings") }}</h3>
          <p class="my-2">{{ $t("header.resume") }}</p>
          <div class="flex gap-x-1 items-center">
            <Icon name="ph:map-pin-area" class="shrink-0 w-4 h-4" />
            <span class="text-xs">{{ $t("header.localization") }}</span>
          </div>
          <!-- Credentials -->
          <div class="flex items-center gap-2">
            <Button variant="outline" @click="copyEmail" :title="$t('header.credentials.email.title')" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:envelope" class="shrink-0 w-5 h-5" />
            </Button>
            <Button variant="outline" @click="copyNumber" :title="$t('header.credentials.phone.title')" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50  hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:whatsapp-logo" class="shrink-0 w-5 h-5" />
            </Button>
            <NuxtLink :title="$t('header.credentials.github.title')" href="https://github.com/mr-leo44" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:github-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
            <NuxtLink :title="$t('header.credentials.linkedin.title')" href="https://linkedin.com/in/mr-leo44" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:linkedin-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
            <NuxtLink :title="$t('header.credentials.x.title')" href="https://twitter.com/drewlionel" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:x-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col gap-y-12 mt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
      <!-- Techno -->
        <div class="flex flex-col gap-y-4">
          <h3 class="font-bold text-lg">
            {{ $t("technologies.title") }}
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/php.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">PHP</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/jquery.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Jquery</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/typescript.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">TypeScript</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/vuejs.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Vue.js</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/nuxt.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Nuxt</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/tailwindcss.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Tailwind CSS</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/bootstrap.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Bootstrap</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/mysql.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">MySql</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/postgres.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">PostgreSQL</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/mongo.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">MongoDB</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/firebase.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Firebase</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/github-octocat.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Github</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/gitlab.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Gitlab</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="flex flex-col gap-y-4 w-[40%]">
          <h3 class="font-bold text-lg">
            {{ $t("skills.title") }}
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:heart" />
                <div class="whitespace-nowrap font-semibold">{{ $t('skills.relations') }}</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:chats-circle" />
                <div class="whitespace-nowrap font-semibold">{{ $t("skills.communication") }}</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:gear" />
                <div class="whitespace-nowrap font-semibold">{{ $t("skills.ps") }}</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:user-focus" />
                <div class="whitespace-nowrap font-semibold">{{ $t('skills.autonomy') }}</div>
              </div> 
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:clock-user" />
                <div class="whitespace-nowrap font-semibold">{{ $t('skills.time') }}</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-700 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:users-four" />
                <div class="whitespace-nowrap font-semibold">{{ $t('skills.ts_tw') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl mb-3">
          {{ $t('experiences.title') }}
        </h3>

        <!-- Projects -->
        <div class="flex flex-col gap-y-8">
          <div class="flex gap-x-4">
            <div>
              <img class="size-8 shrink-0" src="~/assets/img/works/orange-logo.svg" alt="orange-logo">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://orangedigitalcenters.com/country/CD/home" rel="noopener noreferrer" target="_blank">
                    Orange Digital Center - Ecole de code
                  </NuxtLink>
                </h3>
                <p class="font-semibold">{{ $t('experiences.odc.position') }}</p>
                <p class="opacity-75 text-sm">{{ $t('experiences.odc.dates') }}</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <p>{{ $t('experiences.odc.description') }}.</p>
                <p>{{ $t('experiences.odc.sub') }}</p>
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.odc.tasks.task_1') }}</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.odc.tasks.task_2') }}</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.odc.tasks.task_3') }}</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.odc.tasks.task_4') }}</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-end">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/laravel.svg" alt="laravel">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/tailwindcss.svg" alt="tailwindcss">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/mysql.svg" alt="mysql">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/gitlab.svg" alt="gitlab">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <img class="size-10 shrink-0" src="~/assets/img/works/talatala.jpeg" alt="img">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://talatala-afrique.com" rel="noopener noreferrer" target="_blank">
                    Talatala Afrique
                  </NuxtLink>
                </h3>
                <p class="font-semibold">{{ $t('experiences.talatala.position')}}</p>
                <p class="opacity-75 text-sm">{{ $t('experiences.talatala.dates') }}</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.talatala.tasks.task_1')}}</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.talatala.tasks.task_2')}}</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-end">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/firebase.svg" alt="firebase">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <img class="size-10 shrink-0" src="~/assets/img/works/alinga.png" alt="alinga-logo">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Alinga ASBL</h3>
                <p class="font-semibold">{{ $t('experiences.alinga.position')}}</p>
                <p class="opacity-75 text-sm">{{ $t('experiences.alinga.dates')}}</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>{{ $t('experiences.alinga.task')}}</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-end">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/bootstrap.svg" alt="ts">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/jquery.svg" alt="ts">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/gitlab.svg" alt="gitlab">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <img class="size-10 shrink-0" src="~/assets/img/works/gc.jpg" alt="img">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://geniesclub.net" rel="noopener noreferrer" target="_blank">
                    Genies Club ASBL
                  </NuxtLink>
                </h3>
                <p class="font-semibold">{{ $t('experiences.gc.position')}}</p>
                <p class="opacity-75 text-sm">{{ $t('experiences.gc.dates')}}</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                <div>{{ $t('experiences.gc.task')}}</div>
                </div>
                </div>
              </div>
              <div class="flex gap-2 justify-end">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/bootstrap.svg" alt="ts">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/technos/jquery.svg" alt="ts">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl">
          {{ $t('education.title') }}
        </h3>

        <!-- Bachelor Degree -->
        <div class="flex gap-x-4">
          <div>
            <Icon name="ph:graduation-cap" class="size-8 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <h3 class="text-lg xl:text-xl font-bold">
                <NuxtLink class="hover:underline" href="https://esmicom.online" rel="noopener noreferrer" target="_blank">
                  Esmicom
                </NuxtLink>
              </h3>
              <p class="opacity-75 text-sm">{{$t('education.dates') }}</p>
            </div>
            <div class="text-sm tracking-tighter my-2">
              {{$t('education.grade') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Latest projects -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl mb-3">
          {{ $t('latest.title') }}
        </h3>

        <!-- Projects -->
        <div class="flex gap-x-4">
          <div>
            <Icon name="ph:code-block" class="size-8 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex items-center gap-x-3">
              <h3 class="text-lg xl:text-xl font-bold">
                <NuxtLink class="hover:underline" href="https://edt-front.vercel.app" rel="noopener noreferrer" target="_blank">
                  Wakati app
                </NuxtLink>
              </h3>
              <div class="flex gap-x-1 items-end py-1 px-1.5 bg-gray-700 text-white hover:bg-gray-900 rounded-xl">
                <Icon name="ph:clock-countdown" class="size-4 shrink-0" />
                <span class="text-xs">{{$t('latest.wakati.status')}}</span>
              </div>
            </div>
            <div class="text-sm tracking-tighter my-2">
              <p>
                {{ $t('latest.wakati.description') }}
              </p>
            </div>
            <div class="flex gap-2 justify-end">
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/laravel.svg" alt="lara">
              </div>
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/nuxt.svg" alt="nuxt">
              </div>
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/mysql.svg" alt="mysql">
              </div>
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/typescript.svg" alt="typescript">
              </div>
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/tailwindcss.svg" alt="tailwind">
              </div>
              <div>
                <img class="size-5 shrink-0" src="~/assets/img/technos/github-octocat.svg" alt="github">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="fixed flex justify-end gap-x-1 items-center z-50 py-1.5 bottom-6 max-w-4xl w-full px-16 md:px-0">
      <LanguageSwitcher />
      <SwitchMode />
    </footer>
  </div>
</template>
<script setup>
import SwitchMode from '@/components/SwitchMode.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import { h } from 'vue'

const { toast } = useToast()
const email = 'lionnelkaniki44@gmail.com'
const number = '+243821102608'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    toast({
      title: $t('header.credentials.email.toast.title'),
      duration: 5000,
      description: h('div', [
        h('span', {
          class: 'block text-xs mb-3',
          innerHTML: $t('header.credentials.email.toast.description')
        }),
        h('button', { class: 'bg-gray-900 text-white dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 px-3 py-1.5 rounded'}, [
          h('a', {
            class: 'flex gap-x-1.5 text-sm items-center',
            href: `mailto:${email}`,
          }, [
            h('span', { class: 'iconify i-ph:envelope shrink-0 w-4 h-4' }),
            h('span', {
              class: 'text-xs',
              innerHTML: $t('header.credentials.email.toast.button_text')
            })
          ]),
        ]),
      ]),
      action: {
        label : 'x',
        onClick: () => {}
      }
    })
  } catch (err) {
    console.error('error :', err)
  }
}

const copyNumber = async () => {
  try {
    await navigator.clipboard.writeText(number)
    toast({
      title: $t('header.credentials.phone.toast.title'),
      duration: 5000,
      description: h('span', {
        class: 'text-sm',
        innerHTML: $t('header.credentials.phone.toast.description')
      }),
      action: {
        label : 'x',
        onClick: () => {}
      }
    })
  } catch (err) {
    console.error('error :', err)
  }
}
</script>
