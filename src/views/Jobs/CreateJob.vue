<template>
  <div>
    <HeaderLogin />
    <CreateJob></CreateJob>
    <FooterComponent />
  </div>
</template>

<script>
import CreateJob from "../../components/Jobs/CreateJob.vue";
import HeaderLogin from "../../components/HeaderLogin.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "Create",
  components: {
    CreateJob,
    HeaderLogin,
    FooterComponent,
  },
};
</script>
