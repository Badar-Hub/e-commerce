<template>
  <div>
    <div style="background-color:black" class="social-bar">
      <div class="max-width">
        <div class="row">
          <p class="text-h6 text-tiny1 q-my-xs" style="color: white">
            Our Outlets are open 11am to 7pm days a weak
          </p>
        </div>
      </div>
    </div>
    <div class="max-width justify-between">
      <div class="logo q-my-auto">
        <img src="@/assets/logo.png" />
      </div>
      <div class="navigation">
        <router-link to="/eyes">EYES</router-link>
        <router-link to="/face">FACE</router-link>
        <router-link to="/lips">LIPS</router-link>
        <router-link to="/nails">NAILS</router-link>
        <router-link to="/accessories">ACCESSORIES</router-link>
      </div>
    </div>
  </div>
</template>

<script lnag="ts">
import Base from "../Base.vue";

export default class Header extends Base {}
</script>

<style lang="scss">
.navigation {
  margin: auto 0;
  & a {
    font-size: 18px;
    text-decoration: none;
    padding-right: 18px;
    color: black;
  }
  & a:hover {
    text-decoration: underline;
  }
}
</style>
