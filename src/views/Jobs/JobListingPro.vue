<template>
  <div>
    <Header />
    <JobListingPro />
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/HeaderLogin.vue";
import JobListingPro from "@components/Jobs/JobListingPro.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Create",
  components: {
    Header,
    JobListingPro,
    Footer,
  },
};
</script>
