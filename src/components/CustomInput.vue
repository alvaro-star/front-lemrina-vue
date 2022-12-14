<template>
    <div class="flex flex-col">
        <label for="descricao">
            <sup class="text-red-400">*</sup>
            
            <sup class="text-red-400">*</sup>
        </label>
        <input :type="type" :value="modelValue" @input="updateValue"
            class="border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 py-1 px-2" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CustomInput',
    props: {
        type: String,
        modelValue: [String, Number]
    },
    methods: {
        updateValue(event: any) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
})
</script>