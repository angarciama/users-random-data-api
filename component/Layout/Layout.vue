<template>
  <div :class="props.propClassLayout">
    <header>

    </header>
    <main>
      <slot name="mainSlot"></slot>
    </main>
    <footer>

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
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  padding: 20px 30px 20px 30px;
}
</style>