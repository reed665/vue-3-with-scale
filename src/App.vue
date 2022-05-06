<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue';
import AppIcons from './components/AppIcons.vue';
</script>

<template>
  <TheNavigation />

  <main>
    <router-view />
  </main>

  <AppIcons />
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1240px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
