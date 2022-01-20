<template>
  <div>
    <Header />
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AboutUs from '../components/common/Aboutus.vue';
import Footer from "../components/Footer.vue";

export default {
  name: "AboutClient",
  components: {
    Header,
    AboutUs,
    Footer,
  },
};
</script>