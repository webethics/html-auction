<template>
  <div>
    <Header />
    <JobListing />
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/HeaderLogin.vue";
import JobListing from "../../components/Jobs/JobListing.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Create",
  components: {
    Header,
    JobListing,
    Footer,
  },
};
</script>
