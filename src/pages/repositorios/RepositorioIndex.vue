<template>
  <div class="p-6 flex justify-center h-full w-full">
    <div class="rounded w-full flex flex-col flex-nowrap mx-10 my-auto">

      <div class="py-4 pl-5 pr-4 bg-teal-500 rounded-t text-white w-full">
        LISTA DE REPOSITÓRIOS
        <div class="float-right">
          <router-link to="/repositorio/formulario" class="btn bg-white text-black py-2 px-2 rounded btn-block">Inserir um Repositorio</router-link>
        </div>
      </div>
      <div class="flex flex-col border-x border-b rounded-b table-auto my-auto w-full">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 p-6">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                      Nome
                    </th>
                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                      Descrição
                    </th>
                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                      Professor
                    </th>
                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Nome 1
                    </td>
                    <td class="text-sm px-6 py-4 whitespace-nowrap">
                      Descrica 2
                    </td>
                    <td class="text-sm px-6 py-4 whitespace-nowrap">
                      Usuario 1
                    </td>
                    <td class="text-sm px-6 py-4 whitespace-nowrap">
                      <a class="bg-blue-600 rounded py-2 px-3 text-white" href="">Ver</a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RepositorioIndex',
})
</script>
