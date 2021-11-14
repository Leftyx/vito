<script lang="ts" setup>
import { ref } from 'vue'
import { counterStore } from '../store/counter';

const color = ref('red');
const { state } = counterStore();

</script>

<template>
  <button @click="color = color === 'red' ? 'green' : 'red'">
    Color is: {{ color }}
  </button>
  <div>{{ state.counter }}</div>
</template>

<style scoped>
button {
  color: v-bind(color);
}
</style>
