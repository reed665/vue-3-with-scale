<script setup lang="ts">
import AppIcons from './components/AppIcons.vue';
</script>

<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </nav>

  <router-view />

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
