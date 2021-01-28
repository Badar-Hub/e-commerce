<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Layout/Header.vue";
import Base from "@/components/Base.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    Header
  }
})
export default class Home extends Base {}
</script>

<style lang="scss">
.max-width {
  display: flex;
  max-width: 1200px;
  margin: auto;
}
</style>
