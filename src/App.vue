<template>
  <header class="right-0 left-0 top-0 px-3 bg-black text-white flex flex-wrap items-center justify-center sm:justify-between py-6 mb-10">

    <ul class="flex flex-row flex-wrap my-1 sm:my-0 justify-center">
      <router-link to="/" class="mx-5">Home</router-link>
      <router-link to="/repositorios" class="mx-5">Repositorios</router-link>
    </ul>

    <div class="justify-end flex my-1 sm:my-0 sm:justify-center sm:w-auto">
      <router-link to="/turmas/create" class="rounded border-2 mr-2 border-teal-300 text-teal-300 py-1 px-3 hover:bg-teal-300 hover:text-white">Cadastrar Turma</router-link>
      <router-link to="/usuarios/login" class="rounded border-2 border-teal-300 text-teal-300 py-1 px-3 hover:bg-teal-300 hover:text-white">Login</router-link>
    </div>
  </header>

  <router-view />

  <footer class="inline-block w-full p-8 bottom-0 right-0 left-0 bg-black text-white mt-10">
    <div class="container">
      <small>
        Repositorio-GLA - Abandone o Moodle. Versão: 17.2.7 <div class="border-t mt-5">
          &COPY; 2022 - 2022 www.ifms.edu.br/web2
        </div>
      </small>
    </div>
  </footer>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
