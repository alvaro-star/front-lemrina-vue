<template>
  <a class="ancora p-2 bg-stone-500" href="">{{ msg }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Botao',
  props: {
    msg: String
  }
})
</script>

<style>
.ancora {
  color: #42b983;
}
</style>
