<template>
  <div>
    <HeaderLogin />
    <BidderProfile></BidderProfile>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderLogin from "../../components/HeaderLogin.vue";
import BidderProfile from "../../components/Profile/BidderProfile.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "BidderProfiles",
  components: {
    HeaderLogin,
    BidderProfile,
    FooterComponent,
  },
};
</script>

