<template>
  <div :class="props.propClassLayout">
    <header class="header-container">
      <img src="../../assets/img/bender.png" alt="header img" class="header-image"/>
      <p class="header-paragraph">CIUDADANOS ROBOTICOS</p>
    </header>
    <main>
      <slot name="mainSlot"></slot>
    </main>
    <footer class="footer-container">
      <img src="../../assets/img/bender-icon.png" alt="footer img" class="footer-image"/>
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  propClassLayout: {type: String, default: 'layout-component-container'}
})
</script>

<style>
.layout-component-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px 30px;
}
main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.header-container {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.header-image {
  height: 100px;
  width: auto;
}
.header-paragraph {
  text-align: center;
  font-size: 20px;
}
.footer-container {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}
.footer-image {
  height: 50px;
  width: auto;
}
</style>