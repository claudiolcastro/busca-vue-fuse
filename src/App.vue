<template>
  <div id="app">
    <Buscador/>
  </div>
</template>

<script>
import Buscador from './components/Buscador.vue'

export default {
  name: 'app',
  components: {
    Buscador
  }
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
