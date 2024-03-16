<template>
  <Layout>
    <template #mainSlot>
      <div v-if="user" class="general-user-card-container">
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
          <div v-if="activeTab === 'Empleo'">
            <div><strong>Qualification: </strong>{{ user.employment.title }}</div>
            <div><strong>Skills: </strong>{{ user.employment.key_skill }}</div>
          </div>
          <div v-else-if="activeTab === 'Dirección'">
            <div><strong>City: </strong>{{ user.address.city }}</div>
            <div><strong>Street: </strong>{{ user.address.street_name }}</div>
            <div><strong>Address: </strong>{{ user.address.street_address }}</div>
            <div><strong>Zip Code: </strong>{{ user.address.zip_code }}</div>
            <div><strong>State: </strong>{{ user.address.state }}</div>
            <div><strong>Country: </strong>{{ user.address.country }}</div>
          </div>
          <div v-else-if="activeTab === 'Suscripción'">
            <div><strong>Plan: </strong>{{ user.subscription.plan }}</div>
            <div><strong>State: </strong>{{ user.subscription.status }}</div>
            <div><strong>Method of payment: </strong>{{ user.subscription.payment_method }}</div>
            <div><strong>Deadline: </strong>{{ user.subscription.term }}</div>
          </div>
        </section>
      </div>
    </template>
  </Layout>
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

<style>
.general-user-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: solid 1px black;
  border-radius: 10px;
  margin: 10px 0;
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
</style>