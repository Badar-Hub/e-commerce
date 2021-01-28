<template>
  <div>
    <div style="background-color:black; color: white" class="social-bar">
      <div class="max-width">
        <div class="row justify-between">
          <p class="text-h6 text-tiny1 q-my-xs">
            Our Outlets are open 11am to 7pm days a weak
          </p>
          <p>FB</p>
        </div>
      </div>
    </div>
    <div class="max-width justify-between">
      <div class="logo q-my-auto">
        <img src="@/assets/logo.png" />
      </div>
      <div class="navigation">
        <router-link to="/products">PRODUCTS</router-link>
        <router-link to="/whats-new">WHAT'S NEW</router-link>
        <router-link to="/stories">STORIES</router-link>
        <router-link to="/trending">Trending</router-link>
      </div>
      <div class="navigation">
        <router-link to="/eyes">LOGIN</router-link>
        <router-link to="/eyes">SIGNUP</router-link>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script lnag="ts">
import { Component } from "vue-property-decorator";
import Navigation from "@/components/Layout/NavigationCard.vue";
import Base from "../Base.vue";

@Component({
  components: {
    Navigation
  }
})
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
