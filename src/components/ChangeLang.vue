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
    class="text-primary ma-4"
    variant="plain"
    density="compact"
  />
</template>
