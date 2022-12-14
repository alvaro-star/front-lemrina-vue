<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TurmaIndex',
})
</script>
<template>
  <div class="h-full w-full block">
    <div class="materia w-full my-auto">
      <header class="flex flex-row">
        <h3 class="flex py-5 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
          Nome 1
        </h3>
        <div class="grid place-content-center">
          <a class="p-2 rounded bg-red-500">Deletar</a>
        </div>
      </header>
      <div class="flex overflow-x-scroll mb-6 hide-scroll-bar">
        <div class="flex flex-nowrap md:mx-20 mx-10 gap-5">
          <div class="w-full h-full rounded grid place-content-center p-8 bg-blue-100 w-64">
            <p class="font-bold text-center">
              Nome<br>
            </p>
            <p class="text-center">
              descricao
            </p>
            <a class="text-center w-16 mx-auto mb-4 py-2 btn bg-blue-600 hover:bg-blue-500 mt-3 rounded text-white">
              Ver
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>