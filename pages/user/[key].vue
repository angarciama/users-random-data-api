<template>
  <h1>USUARIO</h1>
</template>

<script setup lang="ts">
import {  onMounted } from 'vue'
import type GeneralUserModel from '~/api/models/GeneralUserModel'
import { userStore } from '~/store/users'

const route = useRoute()
const generalUserModel = ref<GeneralUserModel[]>([])
onMounted(async () => {
  try {
    generalUserModel.value = userStore().generalUserModel
    console.log('generalUserModel', generalUserModel.value)
    console.log('key', route.params.key)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>