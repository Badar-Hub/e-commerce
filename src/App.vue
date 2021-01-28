<template>
  <router-view />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Base from "./components/Base.vue";

@Component
export default class App extends Base {}
</script>

<style></style>
