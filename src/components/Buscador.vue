<template>
  <div class="buscador">
    <label for="buscador">Digite o termo que deseja buscar </label>
    <input type="text" name="buscador" v-model="termo">
    <div class="resultado" v-if="listaAvioesEncontrados">
      <ul>
        <li v-for="(index, aviao) in listaAvioesEncontrados" :key="index">
          <b>{{aviao.aviao_nome}}</b>
          <a :href="aviao.aviao_url">Veja mais sobre essa aeronave</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Data from '../base.js';
import Fuse from 'fuse.js';
export default {
  name: 'Buscador',
  data() {
    return {
      termo: '',
    }
  },
  computed: {
    listaAvioesEncontrados() {
      const fuseConfig = {
        threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          'aviao_nome',
        ],
      };
      const fuse = new Fuse(Data, fuseConfig);
      return fuse.search(this.termo);
    },
  },
}
</script>

<style scoped>

</style>
