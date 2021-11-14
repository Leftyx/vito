<template>
  <div>
    {{ message }}
    <div>{{ state.counter }}</div>
    <!-- <ul>
      <li v-for="user in users" :key="user.id"></li>
    </ul> -->
    <br />
    <button type="button" @click="clickButton()">Click Me</button>
    <button type="button" @click="doSomething()">Load Users</button>
  </div>
</template>

<style scoped>
</style>

<script src="./MyComponent.ts" lang="ts" />