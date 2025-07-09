<script setup lang="ts">
import { languageOptions } from '@/constants/languageOptions'
import { useLanguage } from '@/composables/useLanguage'

const { selectedLocale, changeLanguage } = useLanguage()
</script>
<template>
  <v-select
    v-model="selectedLocale"
    :hide-details="true"
    :items="languageOptions"
    item-title="label"
    item-value="code"
    @update:model-value="changeLanguage"
    max-width="120"
    class="text-primary bg-background ma-3"
    variant="solo"
    density="compact"
  />
</template>
