<template>
  <div>
    <HeaderLogin />
    <JobDetail></JobDetail>
    <FooterComponent />
  </div>
</template>

<script>
import JobDetail from "@components/Jobs/JobDetail.vue";
import HeaderLogin from "../../components/HeaderLogin.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "JobDetails",
  components: {
    JobDetail,
    HeaderLogin,
    FooterComponent,
  },
};
</script>
