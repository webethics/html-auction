<template>
  <div class="home-professional">
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
import Hero from "../../components/HomePro/Hero.vue";
import Featured from "../../components/HomePro/Featured.vue";
import BecomePro from "../../components/HomePro/BecomePro.vue";
import HowItWorks from "../../components/HomePro/HowItWorks.vue";
import Services from "../../components/HomePro/Services.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "HomePro",
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
