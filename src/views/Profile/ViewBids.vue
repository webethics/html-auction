<template>
  <div>
    <HeaderLogin />
    <ViewBid></ViewBid>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderLogin from "../../components/HeaderLogin.vue";
import ViewBid from "@components/Profile/ViewBid.vue";
import FooterComponent from "../../components/Footer.vue";

export default {
  name: "ViewBids",
  components: {
    HeaderLogin,
    ViewBid,
    FooterComponent,
  },
};
</script>

