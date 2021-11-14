<script lang="ts" setup>
import { ref } from 'vue';
import useUsers from '../store/users';

const color = ref('red');
const { state } = useUsers();

</script>

<template>
  {{ state.loading }}
  <div v-if="state.loading">
    Loading
  </div>
  <ul>
    <li v-for="user in state.users" :key="user.id">
      {{ user.firstName }}
    </li>
  </ul>
</template>

<style scoped>
button {
  color: v-bind(color);
}
</style>
