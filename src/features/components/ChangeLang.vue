<script setup lang="ts">
import { languageOptions } from '@/features/constants/languageOptions'
import { useLanguage } from '@/features/composables/useLanguage'

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
    max-width="140"
    variant="solo"
  />
</template>
