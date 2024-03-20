<template>
  <Layout>
    <template #mainSlot>
      <ButtonNavigate route="users" buttonText="Usuarios"/>
      <ButtonNavigate route="back" buttonText="Salir"/>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import ButtonNavigate from "~/component/Buttons/ButtonNavigate.vue";
import Layout from "~/component/Layout/Layout.vue";
</script>