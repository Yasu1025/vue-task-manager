<template>
  <div id="app">
    <app-kbn-view />
    <router-view />
  </div>
</template>

<script>
import KbnLoginView from './components/templates/KbnLoginView'
export default {
  name: 'App',
  components: {'app-kbn-view': KbnLoginView}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
