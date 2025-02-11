<template>
  <div class="max-w-2xl w-full mx-auto py-8 xl:py-12 px-6 xl:px-0">
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
            <button title="CLiquez pour copier mon adresse mail" type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:envelope" class="shrink-0 w-5 h-5" />
            </button>
            <button title="Cliquez pour copier mon numero de téléphone" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50  hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:whatsapp-logo" class="shrink-0 w-5 h-5" />
            </button>
            <NuxtLink title="Aller vers mon Github" href="https://github.com/mr-leo44" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:github-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
            <NuxtLink title="Aller vers mon profil Linkedin" href="https://linkedin.com/in/mr-leo44" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:linkedin-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
            <NuxtLink title="Aller vers mon profil X" href="https://twitter.com/drewlionel" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-300 text-gray-700 dark:text-gray-50 hover:text-gray-50 hover:bg-gray-900 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 inline-flex items-center">
              <Icon name="ph:x-logo" class="shrink-0 w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col gap-y-12 mt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Techno -->
        <div class="flex flex-col gap-y-4">
          <h3 class="font-bold text-lg">
            Main Technologies
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/php.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">PHP</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/jquery.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Jquery</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/typescript.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">TypeScript</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/vuejs.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Vue.js</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/nuxt.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Nuxt</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/tailwindcss.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Tailwind CSS</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/bootstrap.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Bootstrap</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/mysql.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">MySql</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/postgres.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">PostgreSQL</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/mongo.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">MongoDB</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/firebase.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Firebase</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <div class="shrink-0 size-4">
                  <img src="~/assets/img/technos/github-octocat.svg" alt="logo">
                </div>
                <div class="whitespace-nowrap font-semibold">Github</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
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
        <div class="flex flex-col gap-y-4">
          <h3 class="font-bold text-lg">
            Soft Skills
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:heart" />
                <div class="whitespace-nowrap font-semibold">Healthy Relationships</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:chats-circle" />
                <div class="whitespace-nowrap font-semibold">Active Communication</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:gear" />
                <div class="whitespace-nowrap font-semibold">Problem-solving</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:user-focus" />
                <div class="whitespace-nowrap font-semibold">Autonomy & Adaptability</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:users-four" />
                <div class="whitespace-nowrap font-semibold">Team Spirit & Teamwork</div>
              </div>
            </div>
            <div class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 text-gray-50 bg-gray-700 hover:bg-gray-900 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-600 border dark:border-gray-200">
              <div class="flex items-center gap-1.5">
                <Icon class="shrink-0 size-4" name="ph:clock-user" />
                <div class="whitespace-nowrap font-semibold">Time Management</div>
              </div>
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
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://orangedigitalcenters.com/country/CD/home" rel="noopener noreferrer" target="_blank">
                    Orange Digital Center - Ecole de code
                  </NuxtLink>
                </h3>
                <p class="font-semibold">Web developer</p>
                <p class="opacity-75 text-sm">April 2024 - September 2024</p>
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
              <img class="size-10 shrink-0" src="~/assets/img/works/talatala.jpeg" alt="img">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://talatala-afrique.com" rel="noopener noreferrer" target="_blank">
                    Talatala Afrique
                  </NuxtLink>
                </h3>
                <p class="font-semibold">Freelancer Backend developer</p>
                <p class="opacity-75 text-sm">January 2023 - Avril 2023</p>
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
              <img class="size-10 shrink-0" src="~/assets/img/works/alinga.png" alt="alinga-logo">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">Alinga ASBL</h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="opacity-75 text-sm">April 2020 - Août 2020</p>
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
              <img class="size-10 shrink-0" src="~/assets/img/works/gc.jpg" alt="img">
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col">
                <h3 class="text-lg xl:text-xl font-bold">
                  <NuxtLink class="hover:underline" href="https://geniesclub.net" rel="noopener noreferrer" target="_blank">
                    Genies Club ASBL
                  </NuxtLink>
                </h3>
                <p class="font-semibold">Frontend developer</p>
                <p class="opacity-75 text-sm">Février 2020 - Avril 2020</p>
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
              <h3 class="text-lg xl:text-xl font-bold">
                <NuxtLink class="hover:underline" href="https://esmicom.online" rel="noopener noreferrer" target="_blank">
                  Esmicom
                </NuxtLink>
              </h3>
              <p class="opacity-75 text-sm">October 2016 - October 2019</p>
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
              <h3 class="text-lg xl:text-xl font-bold">
                <NuxtLink class="hover:underline" href="https://edt-front.vercel.app" rel="noopener noreferrer" target="_blank">
                  Wakati app
                </NuxtLink>
              </h3>
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
<script setup></script>
