<template>
  <div>
    {{ message }}
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }}
      </li>
    </ul>
    <br />
    <ul>
      <li v-for="user in externalUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <!-- <button type="button" @click="clickButton()">
      Click Me
    </button> -->
    <button type="button" @click="loadUsersAsync()">
      Load Users
    </button>
    <button type="button" @click="loadExternalUsersAsync()">
      Load External Users
    </button>
  </div>
</template>

<script src="./MyComponent.ts" lang="ts" />