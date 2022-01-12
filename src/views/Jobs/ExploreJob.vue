<template>
  <div>
    <HeaderLogin />
    <ExploreJobs></ExploreJobs>
    <FooterComponent />
  </div>
</template>

<script>
import ExploreJobs from "@components/Jobs/ExploreJobs.vue";
import HeaderLogin from "../../components/HeaderLogin.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "Create",
  components: {
    ExploreJobs,
    HeaderLogin,
    FooterComponent,
  },
};
</script>
