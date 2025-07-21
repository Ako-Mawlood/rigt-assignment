<script setup lang="ts">
import ActionsMenu from '@/components/ActionsMenu.vue'
import DataTable from '@/components/DataTable.vue'
import { headers } from '@/features/dashboard/pages/members/constants/membersTableHeaders'
import type { MemberType } from '@/features/dashboard/pages/members/types/member.type'
import TheMembersTableFilters from '@/features/dashboard/pages/members/components/TheMembersTableFilters.vue'
import { formatPhone } from '../utils/phoneFormatter'
import { dateFormatter } from '../utils/dateFormatter'
import { workTypeColors } from '../constants/colors'
</script>

<template>
  <DataTable url="/members" queryKey="members">
    <template #filters="{ filters, handleFilter, resetFilter }">
      <TheMembersTableFilters
        :filters="filters"
        @handleFilter="handleFilter"
        @resetFilter="resetFilter"
      />
    </template>

    <template #items="{ items }: { items: MemberType[] }">
      <v-data-table :items="items" :headers="headers" hide-default-footer>
        <template #item.phoneNumber="{ item }">
          <span>{{ formatPhone(item.phoneNumber) }}</span>
        </template>

        <template #item.dateOfBirth="{ item }">
          <span>{{ dateFormatter(item.dateOfBirth) }}</span>
        </template>

        <template #item.workType="{ item }">
          <v-chip :color="workTypeColors[item.workType]" density="compact" :text="item.workType" />
        </template>

        <template #item.position="{ item }">
          <v-chip color="purple-lighten-1" density="compact" :text="item.position" />
        </template>

        <template #item.actions="{ item }">
          <ActionsMenu :id="item.id" />
        </template>
      </v-data-table>
    </template>
  </DataTable>
</template>
