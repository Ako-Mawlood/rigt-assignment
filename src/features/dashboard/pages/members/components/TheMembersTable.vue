<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import TheMembersTableFilters from '@/features/dashboard/pages/members/components/TheMembersTableFilters.vue'
import { headers } from '@/features/dashboard/pages/members/constants/membersTableHeaders'
</script>

<template>
  <DataTable url="/members" queryKey="members" :headers="headers">
    <template #search-append-inner="{ filters, handleFilter, resetFilter }">
      <TheMembersTableFilters
        :filters="filters"
        @handleFilter="handleFilter"
        @resetFilter="resetFilter"
      />
    </template>

    <template #header-append>
      <div style="gap: 10px" class="d-flex ml-auto order-1 order-sm-2">
        <v-btn
          @click="$router.push({ path: '/dashboard/members/add', query: $route.query })"
          :text="$t('memberForm.newMember')"
          density="comfortable"
          class="text-capitalize font-weight-bold mr-4"
          color="primary"
        />
      </div>
    </template>
  </DataTable>
</template>
