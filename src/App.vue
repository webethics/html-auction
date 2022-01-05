<template>
  <div id="app" class="h-100">
    <div class="bv-example-row d-flex flex-column h-100">
      <header-component />
      <router-view></router-view>
      <footer-component />
    </div>
  </div>
</template>

<script>
import "@kouts/vue-modal/dist/vue-modal.css";
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>