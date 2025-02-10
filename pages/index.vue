<template>
  <div class="max-w-4xl w-full mx-auto py-8 xl:py-12 px-6 xl:px-0">
    <!-- Header -->
    <header>
      <div class="flex flex-col gap-8 xl:gap-28">
        <div class="flex flex-col gap-y-1.5">
          <h3 class="text-2xl font-bold">🖐 I'm Lionel Kaniki</h3>
          <p class="my-2">Fullstack Developer. I'm passionate about challenges and detail-oriented. With my 4 years of experience, I design tailor-made web platforms that adapt to clients needs.</p>
          <div class="flex gap-x-1 items-center">
            <Icon name="ph:map-pin-area" class="shrink-0 w-4 h-4" />
            <span class="text-xs">Kinshasa, Democratic Republic of Congo</span>
          </div>
          <!-- Credentials -->
          <div class="flex items-center gap-2">
            <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:envelope" class="shrink-0 w-5 h-5 text-gray-700" />
            </button>
            <button class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:whatsapp-logo" class="shrink-0 w-5 h-5 text-gray-700" />
            </button>
            <NuxtLink href="https://github.com/mr-leo44" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:github-logo" class="shrink-0 w-5 h-5 text-gray-700" />
            </NuxtLink>
            <NuxtLink href="https://linkedin.com/mr-leo44" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:linkedin-logo" class="shrink-0 w-5 h-5 text-gray-700" />
            </NuxtLink>
            <NuxtLink href="https://twitter.com/drewlionel" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:x-logo" class="shrink-0 w-5 h-5 text-gray-700" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col gap-y-12 mt-12">
      <!-- Techno -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl">
          Main technologies
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/php.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">PHP</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/jquery.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Jquery</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/typescript.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">TypeScript</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/vuejs.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Vue.js</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/nuxt.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Nuxt</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/tailwindcss.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Tailwind CSS</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/bootstrap.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Bootstrap</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/mysql.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">MySql</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/postgres.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">PostgreSQL</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/mongo.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">MongoDB</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/firebase.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Firebase</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/github-octocat.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Github</div>
            </div>
          </div>
          <div class="inline-flex items-center font-medium rounded-md text-xs md:text-sm px-2 py-1 gap-1 text-gray-700 hover:text-gray-50 bg-white hover:bg-gray-600 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
            <div class="flex items-center gap-1.5">
              <div class="shrink-0 size-4">
                <img src="~/assets/img/technos/gitlab.svg" alt="logo">
              </div>
              <div class="whitespace-nowrap font-semibold">Gitlab</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl mb-3">
          Work Experience
        </h3>

        <!-- Projects -->
        <div class="flex flex-col gap-y-8">
          <div class="flex gap-x-4">
            <div>
              <img class="size-8 shrink-0" src="~/assets/img/works/orange-logo.svg" alt="orange-logo">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Orange Digital Center - Ecole de code</h3>
                <p class="font-semibold">Web developer</p>
                <p class="font-medium opacity-75">April 2024 - September 2024</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
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
              <!-- <img class="size-10 shrink-0" src="" alt="img"> -->
              <Icon name="ph:code-block" class="size-8 shrink-0" />
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Talatala Afrique</h3>
                <p class="font-semibold">Freelancer Backend developer</p>
                <p class="font-medium opacity-75">January 2023 - Avril 2023</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I set up and configured the application's database and storage using Firebase and Firestore built in GoodBarber</div>
                  </div>
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I launched the application on the web and on the Google Play Store</div>
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
              <!-- <img class="size-10 shrink-0" src="~/assets/img/works/alinga.png" alt="alinga-logo"> -->
              <Icon name="ph:code-block" class="size-8 shrink-0" />
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Alinga ASBL</h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="font-medium opacity-75">April 2020 - Août 2020</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I integrated pages of the covid-19 pass app</div>
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
              <!-- <img class="size-10 shrink-0" src="" alt="img"> -->
              <Icon name="ph:code-block" class="size-8 shrink-0" />

            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Genies Club ASBL</h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="font-medium opacity-75">Février 2020 - Avril 2020</p>
              </div>
              <div class="text-sm tracking-tighter my-2">
                <div class="flex flex-col gap-y-1 pl-1.5">
                  <div class="flex gap-1 items-start">
                    <div>-</div>
                    <div>I designed and deployed the showcase website for the non-profit organization</div>
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
          Education
        </h3>

        <!-- Bachelor Degree -->
        <div class="flex gap-x-4">
          <div>
            <Icon name="ph:graduation-cap" class="size-8 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex flex-col">
              <h3 class="text-xl font-semibold">Esmicom</h3>
              <p class="opacity-75">October 2016 - October 2019</p>
            </div>
            <div class="text-sm tracking-tighter my-2">
              Bachelor Degree in Network Administration and Database Management
            </div>
          </div>
        </div>
      </div>

      <!-- Latest projects -->
      <div class="flex flex-col gap-y-4">
        <h3 class="font-bold text-xl mb-3">
          Latest Projects
        </h3>

        <!-- Projects -->
        <div class="flex gap-x-4">
          <div>
            <Icon name="ph:code-block" class="size-8 shrink-0" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex items-center gap-x-3">
              <h3 class="text-lg xl:text-xl font-medium">Wakati-app</h3>
              <div class="flex gap-x-1 items-end py-1 px-1.5 bg-gray-700 text-white hover:bg-gray-900 rounded-xl">
                <Icon name="ph:clock-countdown" class="size-4 shrink-0" />
                <span class="text-xs">In progress</span>
              </div>
            </div>
            <div class="text-sm tracking-tighter my-2">
              <p>
                A schedule management application for students, universities and teachers. It includes several features such as email and SMS notifications, management of teacher availability, management of faculty, university and promotion events, and portals for admins, professors and students.
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

  </div>

</template>
<script setup>

</script>