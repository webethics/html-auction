<template>
  <div>
    <Header />
    <Term />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Term from '../components/common/Terms.vue';
import Footer from "../components/Footer.vue";

export default {
  name: "Terms",
  components: {
    Header,
    Term,
    Footer,
  },
};
</script>