<script setup lang="ts">
import { ref } from 'vue'
import MemberFrom from '@/features/dashboard/pages/members/components/MemberFrom.vue'
import { addMember } from '@/features/dashboard/pages/members/api/members.api'

const isOpen = ref(true)
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" persistent max-width="600">
      <v-card title="create it now ">
        <MemberFrom :mutationFn="addMember" :mutationKey="['add-member']" />
      </v-card>
    </v-dialog>
  </div>
</template>
