<template>
  <div>
    <HeaderLogin />
    <Profile></Profile>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderLogin from "../../components/HeaderLogin.vue";
import Profile from "../../components/Profile/Profile.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "profile",
  components: {
    HeaderLogin,
    Profile,
    FooterComponent,
  },
};
</script>

