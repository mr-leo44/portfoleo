<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const { locale, locales , setLocale } = useI18n()
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <div v-if="locale === 'fr'">
          <div>
            <img class="size-4 shrink-0" src="~/assets/img/locales/france.svg" alt="FR">
          </div>
        </div>
        <div v-else>
          <div>
            <img class="size-4 shrink-0" src="~/assets/img/locales/usa.svg" alt="EN">
          </div>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem v-for="lang in locales" :key="lang.code" @click="setLocale(lang.code)">
        <div v-if="lang.name === 'Français'" class="flex gap-x-2 items-center">
          <div>
            <img class="size-4 shrink-0" src="~/assets/img/locales/france.svg" alt="FR">
          </div>
          <div>
            {{ lang.name }}
          </div>
        </div>
        <div v-else class="flex gap-x-2 items-center">
          <div>
            <img class="size-4 shrink-0" src="~/assets/img/locales/usa.svg" alt="EN">
          </div>
          <div>
            {{ lang.name }}
          </div>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>