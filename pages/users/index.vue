<template>
  <Layout>
    <template #mainSlot>
      <GeneralUserCard
          :users="users"
      />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import GeneralUserCard from "~/component/UsersCard/GeneralUserCard.vue";
import {onMounted, ref} from "vue";
import GeneralUserModel from "~/api/models/GeneralUserModel";
import {getUsers} from "~/api/controllers/users.controller";
import {userStore} from "~/store/users";
import Layout from "~/component/Layout/Layout.vue";

const users = ref<GeneralUserModel[]>([])
onMounted(async () => {
  try {
    users.value = userStore().generalUserModel
    if (users.value.length == 0) {
      users.value = await getUsers()
      userStore().setGeneralUserModel(users.value)
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>