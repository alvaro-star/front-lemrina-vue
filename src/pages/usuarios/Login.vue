<script lang="ts">
import http from "../../http";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      cpf: "",
      password: "",
    };
  },
  methods: {
    enviarToApi(e: any) {
      e.preventDefault();
      console.log(this.cpf);
      console.log(this.password);
      this.$router.replace("/");
    },

    async fazerLogin(e: any) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("userName", this.cpf);
      formData.append("password", this.password);
      await http
        .request({
          url: "auth/login",
          method: "POST",
          data: formData,
        })
        .then((response: any) => {
          console.log(response);
          sessionStorage.setItem("id", response.data.id);
          sessionStorage.setItem("token", response.data.token);
        })
        .catch((erro: any) => {
          sessionStorage.setItem("id", "");
          sessionStorage.setItem("token", "");
          console.log(erro.response.data);
        });
    },
  },
});
</script>
<template>
  <div class="grid place-content-center p-5 text-center w-full h-full">
    <div class="w-72 rounded border border-slate-200">
      <div class="py-1 bg-slate-400 text-white border border-slate-400">
        Login do usuario
      </div>
      <div class="m-4">
        <p class="card-text">
          <small class="text-slate-400">Informe os dados</small>
        </p>
        <form @submit="enviarToApi" class="mt-4">
          <div class="flex flex-col">
            <label for="cpf">
              <sup class="text-red-400">*</sup>
              Cpf
              <sup class="text-red-400">*</sup>
            </label>
            <input type="text" name="cpf" id="cpf" v-model="cpf" class="
                border border-slate-300
                rounded
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                py-1
                px-2
              " />
          </div>
          <div class="flex flex-col">
            <label for="password">
              <sup class="text-red-400">*</sup>
              Password
              <sup class="text-red-400">*</sup>
            </label>
            <input type="text" name="password" id="password" v-model="password" class="
                border border-slate-300
                rounded
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                py-1
                px-2
              " />
          </div>

          <div class="row">
            <div class="">
              <button class="
                  btn
                  mt-4
                  rounded
                  border-2 border-teal-300
                  text-teal-300
                  py-1
                  px-3
                  hover:bg-teal-300 hover:text-white
                ">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
