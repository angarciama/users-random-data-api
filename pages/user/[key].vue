<template>
  <Layout>
    <template #mainSlot>
      <UserInformationCard :user="user"/>
      <ButtonNavigate route="back" buttonText="Volver"/>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import {  onMounted } from 'vue'
import type GeneralUserModel from '~/api/models/GeneralUserModel'
import { userStore } from '~/store/users'
import UserInformationCard from "~/component/UsersCard/UserInformationCard.vue";
import ButtonNavigate from "~/component/Buttons/ButtonNavigate.vue";
import Layout from "~/component/Layout/Layout.vue";

const route = useRoute()
const generalUserModel = ref<GeneralUserModel[]>([])
const user = ref<GeneralUserModel>()

onMounted(async () => {
  try {
    generalUserModel.value = userStore().generalUserModel

    const userId = route.params.key
    if (userId) {
      user.value = generalUserModel.value.find(user => user.uid === userId) ?? undefined
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>