<template>
  <div v-for="user in users" :key="user.id" class="general-user-card-container" @click="redirectToUser(user.uid)">
    <img :src="user.avatar" alt="Avatar" class="general-user-card-img">
    <section class="general-user-card-section">
      <div>{{ user.last_name }}, {{ user.first_name }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.username }}</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {getUsers} from '~/api/controllers/users.controller'
import GeneralUserModel from '~/api/models/GeneralUserModel'
import {userStore} from '~/store/users'
import {navigateTo} from "#app/composables/router";

const users = ref<GeneralUserModel[]>([])
const generalUserModel = ref<GeneralUserModel[]>([])

onMounted(async () => {
  try {
    users.value = await getUsers()
    userStore().setGeneralUserModel(users.value)
    console.log('users', users.value)

    generalUserModel.value = userStore().generalUserModel
    console.log('generalUserModel', generalUserModel.value)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})

const redirectToUser = async (userId: string) => {
  await navigateTo(`/user/${userId}`)
}
</script>

<style>
.general-user-card-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}
.general-user-card-img{
  height: 100px;
  width: auto;
  border: solid 1px black;
  margin: 10px;
}
.general-user-card-section {
  display: flex;
  flex-direction: column;
}
</style>