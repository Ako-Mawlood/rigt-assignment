<script setup lang="ts">
import DataIterator from '@/components/DataIterator.vue'
</script>
<template>
  <div class="pa-4">
    <h2 class="text-primary">{{ $t('members') }}</h2>
    <DataIterator url="/members">
      <template #items="{ items }">
        <v-data-table :items="items" hide-default-footer> </v-data-table>
      </template>
    </DataIterator>
  </div>
</template>
