<template>
  <div>
    <HeaderComponent /> 
    <Hero></Hero>
    <Featured></Featured>
    <BecomePro></BecomePro>
    <HowItWorks></HowItWorks>
    <Services></Services>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../../components/Header.vue";
import Hero from "@components/Home/Hero.vue";
import Featured from "../../components/Home/Featured.vue";
import BecomePro from "../../components/Home/BecomePro.vue";
import HowItWorks from "../../components/Home/HowItWorks.vue";
import Services from "../../components/Home/Services.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Featured,
    BecomePro,
    HowItWorks,
    Services,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
