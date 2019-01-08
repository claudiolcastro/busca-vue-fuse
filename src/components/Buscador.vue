<template>
  <div class="buscador">
    <label for="buscador">Digite o termo que deseja buscar </label>
    <input type="text" name="buscador" v-model="termo">
    <p>{{termo}}</p>
  </div>
</template>

<script>
export default {
  name: 'Buscador',
  data() {
    return {
      termo: '',
    }
  },
}
</script>

<style scoped>

</style>
