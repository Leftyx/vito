<template>
  <div>
    <b>{{ message }}</b>
    <ul>
      <li v-for="forecast in forecasts" :key="forecast.id">
        {{ forecast.date }} | {{ forecast.temperatureC }} | {{ forecast.summary }}
      </li>
    </ul>
    <br />
    <button type="button" @click="loadForecastsAsync()">
      Load Forecasts
    </button>
  </div>
</template>

<script src="./ForecastsComponent.ts" lang="ts" />