<template>
  <div>
    <Hero></Hero>
    <Featured></Featured>
  </div>
</template>

<script>
import Hero from "@components/Home/Hero.vue";
import Featured from "../../components/Home/Featured.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Featured,
  },
};
</script>
