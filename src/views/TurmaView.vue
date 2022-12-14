<template>
    <div class="home">
        <TurmaIndex />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import TurmaIndex from "../pages/turmas/TurmaIndex.vue";
export default defineComponent({
    name: 'TurmaView',
    components: {
        TurmaIndex
    }
})
</script>
  