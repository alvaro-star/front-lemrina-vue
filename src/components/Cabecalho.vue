<template>
  <header
    class="right-0 left-0 top-0 px-3 bg-black text-white flex flex-wrap items-center justify-center sm:justify-between py-6">

    <ul class="flex flex-row flex-wrap my-1 sm:my-0 justify-center">
      <li><a class="mx-5">Home</a></li>
      <li><a class="mx-5">Repositórios</a></li>
      <li><a class="mx-5">Conteúdos</a></li>
      <li><a class="mx-5">Arquivos</a></li>
      <li><a class="mx-5">Feedbacks</a></li>
    </ul>

    <div class="justify-end flex my-1 sm:my-0 sm:justify-center sm:w-auto">
      <a class="rounded border-2 border-teal-300 text-teal-300 py-1 px-3 hover:bg-teal-300 hover:text-white">Login</a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cabecalho'
})
</script>
