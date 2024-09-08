<template>
  <Layout>
    <template #mainSlot>
      <div class="main-home">
        <ButtonNavigate route="users" buttonText="Usuarios"/>
        <ButtonNavigate route="back" buttonText="Salir"/>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import ButtonNavigate from "~/component/Buttons/ButtonNavigate.vue";
import Layout from "~/component/Layout/Layout.vue";
</script>

<style scoped>
.main-home{
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  width: 100%;
  gap: 20px;
}
</style>