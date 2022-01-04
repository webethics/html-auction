<template>
  <div>
    <Hero></Hero>
    <Featured></Featured>
    <BecomePro></BecomePro>
    <HowItWorks></HowItWorks>
    <Services></Services>
  </div>
</template>

<script>
import Hero from "@components/Home/Hero.vue";
import Featured from "../../components/Home/Featured.vue";
import BecomePro from "../../components/Home/BecomePro.vue";
import HowItWorks from "../../components/Home/HowItWorks.vue";
import Services from "../../components/Home/Services.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Featured,
    BecomePro,
    HowItWorks,
    Services,
  },
};
</script>
