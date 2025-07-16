<script setup lang="ts">
import DataIterator from '@/components/DataIterator.vue'
import { headers } from '@/constants/membersTableHeaders.ts'
</script>
<template>
  <div class="pa-4">
    <h2 class="text-primary">{{ $t('members') }}</h2>
    <DataIterator url="/members" queryKey="members">
      <template #items="{ items }">
        <v-data-table :items="items" :headers="headers" hide-default-footer>
          <template #item.actions="{ item }"> actions </template>
        </v-data-table>
      </template>
    </DataIterator>
  </div>
</template>
