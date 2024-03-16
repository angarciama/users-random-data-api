<template>
  <div v-if="user" class="user-information-card-container">
    <div class="general-user-card-info">
      <img :src="user.avatar" alt="Avatar" class="general-user-card-img">
      <section class="general-user-card-section">
        <div>{{ user.last_name }}, {{ user.first_name }}</div>
        <div>{{ user.username }}</div>
        <div>{{ user.email }}</div>
        <div>{{ user.gender }}</div>
        <div>{{ user.phone_number }}</div>
        <div>{{ user.date_of_birth }}</div>
      </section>
    </div>
    <section>
      <div>
        <button @click="activeTab = 'Empleo'">Empleo</button>
        <button @click="activeTab = 'Dirección'">Dirección</button>
        <button @click="activeTab = 'Suscripción'">Suscripción</button>
      </div>
      <div v-if="activeTab === 'Empleo'" class="user-information-card-info-tabs">
        <div><strong>Qualification: </strong>{{ user.employment.title }}</div>
        <div><strong>Skills: </strong>{{ user.employment.key_skill }}</div>
      </div>
      <div v-else-if="activeTab === 'Dirección'" class="user-information-card-info-tabs">
        <div><strong>City: </strong>{{ user.address.city }}</div>
        <div><strong>Street: </strong>{{ user.address.street_name }}</div>
        <div><strong>Address: </strong>{{ user.address.street_address }}</div>
        <div><strong>Zip Code: </strong>{{ user.address.zip_code }}</div>
        <div><strong>State: </strong>{{ user.address.state }}</div>
        <div><strong>Country: </strong>{{ user.address.country }}</div>
      </div>
      <div v-else-if="activeTab === 'Suscripción'" class="user-information-card-info-tabs">
        <div><strong>Plan: </strong>{{ user.subscription.plan }}</div>
        <div><strong>State: </strong>{{ user.subscription.status }}</div>
        <div><strong>Method of payment: </strong>{{ user.subscription.payment_method }}</div>
        <div><strong>Deadline: </strong>{{ user.subscription.term }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import GeneralUserModel from '~/api/models/GeneralUserModel'
import { defineProps, ref } from 'vue'
import Layout from "~/component/Layout/Layout.vue";

defineProps({
  user: {
    type: Object as () => GeneralUserModel,
    required: true
  }
})

const activeTab = ref<string>('Empleo')
</script>

<style scoped>
.user-information-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 100%;
  border: solid 1px black;
  border-radius: 10px;
  cursor: pointer;
}
.general-user-card-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}
.general-user-card-img{
  height: 100px;
  width: 100px;
  border: solid 1px black;
  margin: 10px;
}
.general-user-card-section {
  display: flex;
  flex-direction: column;
}
button {
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding: 0 20px;
}
button:hover {
  background-color: black;
  color: white;
}
button:active {
  background-color: black;
  color: white;
}
.user-information-card-info-tabs {
  padding: 10px;
}
</style>