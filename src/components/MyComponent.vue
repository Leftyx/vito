<template>
  <div>
    {{ message }}
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }}
      </li>
    </ul>
    <br />
    <button type="button" @click="clickButton()">
      Click Me
    </button>
    <button type="button" @click="loadUsersAsync()">
      Load Users
    </button>
  </div>
</template>

<script src="./MyComponent.ts" lang="ts" />