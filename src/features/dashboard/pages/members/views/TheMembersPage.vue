<script setup lang="ts">
import ActionsMenu from '@/components/ActionsMenu.vue'
import DataIterator from '@/components/DataIterator.vue'
import { headers } from '@/features/dashboard/pages/members/constants/membersTableHeaders'
import type { MemberType } from '@/features/dashboard/pages/members/types/member.type'
</script>
<template>
  <div class="pa-4">
    <v-row justify="space-between" class="pa-4">
      <h2 class="text-primary">{{ $t('members') }}</h2>
      <v-btn
        to="/dashboard/members/add"
        :text="$t('memberForm.newMember')"
        density="comfortable"
        color="primary"
      />
    </v-row>

    <DataIterator url="/members" queryKey="members">
      <template #items="{ items }">
        <v-data-table :items="items" :headers="headers" hide-default-footer>
          <template #item.actions="{ item }">
            <ActionsMenu :id="(item as MemberType).id" />
          </template>
        </v-data-table>
      </template>
    </DataIterator>
  </div>
  <router-view />
</template>
