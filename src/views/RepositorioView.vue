<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/vue.svg">
      <RepositorioIndex/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import RepositorioIndex from "../pages/repositorios/RepositorioForm.vue";
  export default defineComponent({
    name: 'RepositorioView',
    components: {
      RepositorioIndex
    }
  })
  </script>
  