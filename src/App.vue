<template>
  <div id="app" class="h-100">
    <b-container class="bv-example-row d-flex flex-column h-100">
      <header-component />
      <router-view></router-view>
      <!-- <footer-component></footer-component> -->
    </b-container>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
// import FooterComponent  from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    HeaderComponent,
    // FooterComponent
  },
};
</script>

<style>
.footer-section {
  margin-top: 15px;
}
</style>
