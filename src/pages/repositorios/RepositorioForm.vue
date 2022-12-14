<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RepositorioForm',
  data() {
    return {
      nome: '',
      descricao: '',
      idRepositorio: ''
    }
  },
  methods: {
    enviarToAPi(e: any) {
      e.preventDefault();
      console.log(this.nome);
      console.log(this.descricao);
      this.$router.replace('/')
    }
  }
})
</script>

<template>
  <div class="grid place-content-center p-5 text-center w-full h-full">
    <div class=" w-72 rounded border border-slate-200">
      <div class="py-1 bg-slate-400 text-white border border-slate-400">
        Cadastrar Repositorio
      </div>
      <div class="m-4">
        <p class="card-text"><small class="text-slate-400">Informe os dados</small></p>
        <form @submit="enviarToAPi" class="mt-4">

          <BaseInput id="nome" class="mb-4" type="nome" label="nome" v-model="nome" />
          <div class="flex flex-col">
            <label for="nome">
              <sup class="text-red-400">*</sup>
              Nome
              <sup class="text-red-400">*</sup>
            </label>
            <input type="text" name="nome" id="nome" v-model="nome"
              class="border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 py-1 px-2"
              required />
          </div>
          <div class="flex flex-col">
            <label for="descricao">
              <sup class="text-red-400">*</sup>
              Descricao
              <sup class="text-red-400">*</sup>
            </label>
            <input type="text" name="descricao" id="descricao" v-model="descricao"
              class="border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 py-1 px-2"
              required />
          </div>

          <div class="flex flex-col">
            <label for="materia"><sup class="text-red-400">*</sup> Assunto <sup class="text-red-400">*</sup></label>
            <select name="idMateria" id="materia" v-model="idRepositorio"
              class="border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 py-1 px-2">
              <option value=''> Escolha a Area ao qual pertence</option>
              <option value="1">Teste 1</option>
              <option value="2">Teste 2</option>
              <option value="3">Teste 3</option>
            </select>
          </div>

          <div class="row">
            <div class="">
              <button
                class="btn mt-4 rounded border-2 border-teal-300 text-teal-300 py-1 px-3 hover:bg-teal-300 hover:text-white">Enviar</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>