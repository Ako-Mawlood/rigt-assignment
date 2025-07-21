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
    <template #header-append="{ filters, handleFilter, resetFilter }">
      <div style="gap: 10px" class="d-flex ml-auto order-1 order-sm-2">
        <TheMembersTableFilters
          :filters="filters"
          @handleFilter="handleFilter"
          @resetFilter="resetFilter"
        />

        <v-btn
          @click="$router.push({ path: '/dashboard/members/add', query: $route.query })"
          :text="$t('memberForm.newMember')"
          density="comfortable"
          class="text-capitalize mr-4"
          color="primary"
        />
      </div>
    </template>

    <template #items="{ items }: { items: MemberType[] }">
      <v-data-table :items="items" class="bg-surface" :headers="headers" hide-default-footer>
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
          <v-chip color="pink" density="compact" :text="item.position" />
        </template>

        <template #item.actions="{ item }">
          <ActionsMenu :id="item.id" />
        </template>
      </v-data-table>
    </template>
  </DataTable>
</template>
