<template>
  <div style="background-color:black; color: white">
    <div class="grid-row q-mx-auto">
      <div class="link">
        <div>
          <h6>EYES</h6>
          <p>EYEBROW</p>
          <p>EYELINER</p>
          <p>EYESHADOW</p>
          <p>MASCARA</p>
        </div>
        <div>
          <h6>NAILS</h6>
          <p>POLISH</p>
          <p>TREATMENT</p>
        </div>
      </div>
      <div class="link">
        <div>
          <h6>LIPS</h6>
          <p>LIPCARE</p>
          <p>LIPGLOSS</p>
          <p>LIPLINER</p>
          <p>LIPSTICK</p>
        </div>
        <div>
          <h6>ACCESSORIES</h6>
          <p>BRUSHES</p>
          <p>TOOLS</p>
        </div>
      </div>
      <div class="link">
        <h6>FACE</h6>
        <p>BLUSH</p>
        <p>CONCEALER</p>
        <p>CONTOUR & HIGHLIGHT</p>
        <p>FOUNDATION</p>
        <p>POWDER</p>
        <p>PRIME & SET</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Base from "../Base.vue";

export default class Navigation extends Base {}
</script>

<style lang="scss">
.grid-row {
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
</style>
