import { Icon } from '../.nuxt/components';
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

    <main class="flex flex-col gap-y-8 mt-12">
      <!-- Techno -->
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
                <img src="~/assets/img/jquery.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Jquery</div>
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
                <img src="~/assets/img/bootstrap.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Bootstrap</div>
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

      <!-- Experience -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-2xl mb-3">
          Work Experience
        </h3>

        <!-- Projects -->
        <div class="flex flex-col gap-y-8">
          <div class="flex gap-x-4">
            <div>
              <img class="size-10 shrink-0" src="~/assets/img/works/orange-logo.svg" alt="orange-logo">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Orange Digital Center - Ecole de code</h3>
                <p class="font-semibold">Web developer</p>
                <p class="font-medium opacity-75">April 2024 - September 2024</p>
              </div>
              <div class="text-base tracking-tighter my-2">
                <p>I participated in development of a web application for requestion office supplies with a multi-level validation.</p>
                <p>Within this app,</p>
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I designed the email sending system</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I improved the multi-level validation process</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I enhanced the download time for generated PDF reports</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I improved the application charter</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-start">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/laravel.svg" alt="laravel">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/tailwindcss.svg" alt="tailwindcss">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/mysql.svg" alt="mysql">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/gitlab.svg" alt="gitlab">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <!-- <img class="size-10 shrink-0" src="" alt="img"> -->
              <Icon name="ph:code-block" class="size-10 shrink-0" />
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Talatala Afrique</h3>
                <p class="font-semibold">Freelancer Backend developer</p>
                <p class="font-medium opacity-75">January 2023 - Avril 2023</p>
              </div>
              <div class="text-base tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I set up and configured the application's database and storage using Firebase and Firestore</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I launched the application on the web and on the Google Play Store</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-start">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/firebase.svg" alt="firebase">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <!-- <img class="size-10 shrink-0" src="~/assets/img/works/alinga.png" alt="alinga-logo"> -->
              <Icon name="ph:code-block" class="size-10 shrink-0" />
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Alinga ASBL</h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="font-medium opacity-75">April 2020 - Août 2020</p>
              </div>
              <div class="text-base tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I integrated pages of the covid-19 pass app</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-start">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/bootstrap.svg" alt="ts">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/jquery.svg" alt="ts">
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <!-- <img class="size-10 shrink-0" src="" alt="img"> -->
              <Icon name="ph:code-block" class="size-10 shrink-0" />

            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Genies Club ASBL</h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="font-medium opacity-75">Février 2020 - Avril 2020</p>
              </div>
              <div class="text-base tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I ddesigned and deployed the showcase website for the non-profit organization</div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-start">
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/bootstrap.svg" alt="ts">
                </div>
                <div>
                  <img class="size-5 shrink-0" src="~/assets/img/jquery.svg" alt="ts">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-2xl">
          Education
        </h3>

        <!-- Bachelor Degree -->
        <div class="flex gap-x-4">
          <div>
            <Icon name="ph:graduation-cap" class="size-10 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <h3 class="text-xl font-semibold">Esmicom</h3>
              <p class="">October 2016 - October 2019</p>
            </div>
            <div class="text-base tracking-tighter my-2">
              Engineer Degree in Network Administration and Database Management
            </div>
          </div>
        </div>
      </div>

      <!-- Latest projects -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-2xl mb-3">
          Latest Projects
        </h3>

        <!-- Projects -->
        <div class="flex gap-x-4">
          <div>
            <!-- <img class="size-10 shrink-0" src="" alt="img"> -->
            <Icon name="ph:code-block" class="size-10 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex items-center gap-3">
              <h3 class="text-lg xl:text-xl font-semibold">Wakati-app</h3>
              <div class="inline-flex items-center font-medium rounded-md text-md px-1.5 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
                <div class="flex items-center gap-x-1.5">
                  <div class="shrink-0 size-6">
                    <Icon name="ph:code-block" class="size-4 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-base tracking-tighter my-2">
              <p>
                A schedule management application for students, universities and teachers. It includes several features such as email and SMS notifications, management of teacher availability, management of faculty, university and promotion events, and portals for admins, professors and students.
              </p>
            </div>
            <div class="flex gap-2 justify-start">
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/laravel.svg" alt="lara">
              </div>
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/nuxt.svg" alt="nuxt">
              </div>
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/mysql.svg" alt="mysql">
              </div>
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/typescript.svg" alt="typescript">
              </div>
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/tailwindcss.svg" alt="tailwind">
              </div>
              <div>
                <img class="size-6 shrink-0" src="~/assets/img/github-octocat.svg" alt="github">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>

</template>
<script setup>

</script>