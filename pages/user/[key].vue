<template>
  <h1>User</h1>
</template>

<script setup lang="ts">
import {  onMounted } from 'vue'
import type GeneralUserModel from '~/api/models/GeneralUserModel'
import { userStore } from '~/store/users'

const route = useRoute()
const generalUserModel = ref<GeneralUserModel[]>([])
const user = ref<GeneralUserModel>()

onMounted(async () => {
  try {
    generalUserModel.value = userStore().generalUserModel

    const userId = route.params.key
    if (userId) {
      user.value = generalUserModel.value.find(user => user.uid === userId) ?? undefined
      console.log('User:', user.value)
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>