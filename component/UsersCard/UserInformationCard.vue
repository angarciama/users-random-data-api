<template>
  <div v-if="user" class="general-user-card-container">
    <img :src="user.avatar" alt="Avatar" class="general-user-card-img">
    <section class="general-user-card-section">
      <div>{{ user.last_name }}, {{ user.first_name }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.gender }}</div>
      <div>{{ user.phone_number }}</div>
      <div>{{ user.date_of_birth }}</div>
    </section>
    <section>
      <div>
        <button @click="activeTab = 'Empleo'">Empleo</button>
        <button @click="activeTab = 'Dirección'">Dirección</button>
        <button @click="activeTab = 'Suscripción'">Suscripción</button>
      </div>
      <div v-if="activeTab === 'Empleo'">
        <div>{{ user.employment.title }}</div>
        <div>{{ user.employment.key_skill }}</div>
      </div>
      <div v-else-if="activeTab === 'Dirección'">
        <div>{{ user.address.city }}</div>
        <div>{{ user.address.street_name }}</div>
        <div>{{ user.address.street_address }}</div>
        <div>{{ user.address.zip_code }}</div>
        <div>{{ user.address.state }}</div>
        <div>{{ user.address.country }}</div>
      </div>
      <div v-else-if="activeTab === 'Suscripción'">
        <div>{{ user.subscription.plan }}</div>
        <div>{{ user.subscription.status }}</div>
        <div>{{ user.subscription.payment_method }}</div>
        <div>{{ user.subscription.term }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import GeneralUserModel from '~/api/models/GeneralUserModel'
import { defineProps, ref } from 'vue'

defineProps({
  user: {
    type: Object as () => GeneralUserModel,
    required: true
  }
})

const activeTab = ref<string>('Empleo')
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