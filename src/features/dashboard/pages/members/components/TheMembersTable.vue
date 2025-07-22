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
          class="text-capitalize font-weight-bold mr-4"
          color="primary"
        />
      </div>
    </template>

    <template #items="{ items }: { items: MemberType[] }">
      <v-data-table :items="items" class="bg-surface" :headers="headers" hide-default-footer>
        <template #item.name="{ item }">
          <v-row align="center" style="min-width: 150px">
            <v-avatar image="/images/avatar.png" size="x-small" />
            <span class="mx-2">{{ item.name }}</span>
          </v-row>
        </template>
        <template #item.phoneNumber="{ item }">
          <v-row style="min-width: 100px">{{ formatPhone(item.phoneNumber) }}</v-row>
        </template>
        <template #item.dateOfBirth="{ item }">
          <v-row align="center" style="min-width: 100px">
            {{ dateFormatter(item.dateOfBirth) }}
          </v-row>
        </template>

        <template #item.workType="{ item }">
          <v-chip :color="workTypeColors[item.workType]" density="compact" :text="item.workType" />
        </template>

        <template #item.position="{ item }">
          <v-chip color="primary" density="compact" :text="item.position" />
        </template>

        <template #item.actions="{ item }">
          <ActionsMenu :id="item.id" />
        </template>
      </v-data-table>
    </template>
  </DataTable>
</template>
