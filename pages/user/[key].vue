<template>
  <h1>USUARIO</h1>
</template>

<script setup lang="ts">
import {  onMounted } from 'vue'
import type GeneralUserModel from '~/api/models/GeneralUserModel'
import { userStore } from '~/store/users'

const generalUserModel = ref<GeneralUserModel[]>([])
onMounted(async () => {
  try {
    generalUserModel.value = userStore().generalUserModel
    console.log('generalUserModel', generalUserModel.value)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>