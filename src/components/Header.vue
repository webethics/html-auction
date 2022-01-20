<template>
  <!-- For large screens -->
      <div class="wrapper header-wrapper" :class="{'header-scrolled': scrolled}">
      <div class="bg-white py-4 2xl:py-2 shadow-xl relative">
        <!-- If user login add a class "justify-left" else "justify-between" in below container div -->
        <div class="container mx-auto flex items-center justify-between px-5">
          <figure class="header-logo">
            <a href="./">
              <img src="../assets/images/logo.png" />
            </a>
          </figure>
          <nav class="inline-block lg:block fixed lg:absolute lg:relative bg-white" :class="(showHeaderMenus == true)?'showMenu':''">
            <ul class="flex flex-col lg:flex-row flex-wrap lg:items-center space-x-0 lg:space-x-6 xl:space-x-10 3xl:space-x-16">
              <!-- Menus before login, Remove the classes from list item below either you are loggedin or not i.e. for only my purpose -->
              <li class=""><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">Home</a></li>
              <li class=""><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">About</a></li>
              <li class=""><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">Services</a></li>
              <li class=""><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">Testimonials</a></li>
              <li class=""><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">Contact</a></li>
              <!-- Menus after login --> 
              <li class="hidden"><a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary">Dashboard</a></li>
              <li class="hidden">
                <a href="javascript:void(0)" class="px-3 lg:px-0 py-3 border-b border-gray lg:border-0 lg:py-0 block dark:text-white text-sm lg:text-base 2xl:text-lg text-lightBlack focus:outline-none hover:text-primary flex items-center dropdown-with-arrow">Jobs
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon ml-2">
                    <path d="M0.816406 1.0376L6.81641 6.58648L12.8164 1.0376" stroke="#313131" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <!-- If user login add a class "ml-auto" else remove this class in below div -->
          <div class="justify-end flex items-center space-x-2 sm:space-x-5 md:space-x-6 xl:space-x-10">
            <!-- Show this anchor when user is loggedin -->
            <a href="#" class="flex items-center text-lightBlack hover:text-primary icon-label hidden">
              <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:mr-2">
                <path d="M10.8164 16.6476C10.1714 16.1187 9.44241 15.5684 8.67141 14.983H8.66141C5.94641 12.9299 2.86942 10.6068 1.51042 7.8231C1.06442 6.93713 0.827418 5.97347 0.816418 4.99502C0.814936 4.33099 0.956929 3.67338 1.23406 3.0608C1.51119 2.44822 1.91787 1.89302 2.43022 1.42781C2.94258 0.962593 3.55027 0.596738 4.21763 0.351727C4.88498 0.106715 5.59854 -0.0125146 6.31641 0.00103845C7.49704 0.00276304 8.65224 0.318324 9.64441 0.910128C10.0804 1.17182 10.4748 1.48837 10.8164 1.85066C11.1604 1.48999 11.5544 1.1737 11.9894 0.910128C12.9811 0.318207 14.1361 0.00262779 15.3164 0.00103845C16.0343 -0.0125146 16.7478 0.106715 17.4152 0.351727C18.0825 0.596738 18.6902 0.962593 19.2026 1.42781C19.7149 1.89302 20.1216 2.44822 20.3988 3.0608C20.6759 3.67338 20.8179 4.33099 20.8164 4.99502C20.8062 5.97423 20.5696 6.94008 20.1224 7.82772C18.7634 10.6114 15.6874 12.9336 12.9724 14.983L12.9624 14.9904C12.1904 15.5721 11.4624 16.1224 10.8174 16.655L10.8164 16.6476ZM6.31641 1.85066C5.38492 1.83988 4.48649 2.16958 3.81641 2.76808C3.49687 3.05835 3.24368 3.40508 3.07189 3.78764C2.90011 4.1702 2.81323 4.58079 2.81642 4.99502C2.82742 5.70713 3.00242 6.40998 3.32841 7.0555C3.96994 8.25655 4.83554 9.34352 5.88541 10.2664C6.87641 11.1913 8.01641 12.0865 9.00241 12.8393C9.27541 13.0474 9.55341 13.2573 9.83141 13.4672L10.0064 13.5995C10.2734 13.8011 10.5494 14.0101 10.8164 14.2154L10.8294 14.2043L10.8354 14.1997H10.8414L10.8504 14.1932H10.8604L10.8784 14.1793L10.9194 14.1488L10.9264 14.1433L10.9374 14.1359H10.9434L10.9524 14.1285L11.6164 13.6244L11.7904 13.4922C12.0714 13.2804 12.3494 13.0705 12.6224 12.8624C13.6084 12.1096 14.7494 11.2153 15.7404 10.2859C16.7905 9.36345 17.6561 8.27675 18.2974 7.07585C18.6294 6.42478 18.8074 5.71452 18.8174 4.99502C18.8193 4.58198 18.7317 4.17277 18.5598 3.79155C18.3879 3.41033 18.1351 3.06484 17.8164 2.77547C17.1476 2.17427 16.249 1.84186 15.3164 1.85066C14.7537 1.84624 14.1964 1.95198 13.6811 2.16095C13.1658 2.36991 12.7041 2.67736 12.3264 3.06309L10.8164 4.67226L9.30641 3.06309C8.92872 2.67736 8.46704 2.36991 7.95171 2.16095C7.43639 1.95198 6.87908 1.84624 6.31641 1.85066Z" fill="#313131"/>              
              </svg>
              <span class="hidden lg:inline-block">Saved Professionals</span>
            </a>
            <!-- Show this anchor when user is loggedin -->
            <a href="#" class="relative icon-label hidden">
              <span class="notification-count bg-primary text-white rounded-full text-center block text-xs font-medium absolute left-0 right-0 mx-auto">1</span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8164 2H4.81641C3.71341 2 2.81641 2.897 2.81641 4V16C2.81641 17.103 3.71341 18 4.81641 18H7.81641V21.767L14.0934 18H20.8164C21.9194 18 22.8164 17.103 22.8164 16V4C22.8164 2.897 21.9194 2 20.8164 2ZM20.8164 16H13.5394L9.81641 18.233V16H4.81641V4H20.8164V16Z" fill="#313131"/>
                <path d="M7.81641 7H17.8164V9H7.81641V7ZM7.81641 11H14.8164V13H7.81641V11Z" fill="#313131"/>
              </svg>
            </a>
            
            <div class="account-labels">
              <!-- Show this anchor when user NOT loggedin and remove the class hidden -->
              <a @click="showModalLogin = true" href="#" class="flex  items-center text-lightBlack hover:text-primary text-sm lg:text-base 2xl:text-lg">
                <svg class="mr-0 sm:mr-2 profile-icon" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8164 8C15.8275 8 14.8608 8.29325 14.0386 8.84265C13.2163 9.39206 12.5754 10.173 12.197 11.0866C11.8186 12.0002 11.7196 13.0055 11.9125 13.9755C12.1054 14.9454 12.5816 15.8363 13.2809 16.5355C13.9801 17.2348 14.8711 17.711 15.841 17.9039C16.8109 18.0969 17.8162 17.9978 18.7298 17.6194C19.6435 17.241 20.4244 16.6001 20.9738 15.7779C21.5232 14.9556 21.8164 13.9889 21.8164 13C21.8164 11.6739 21.2896 10.4021 20.3519 9.46447C19.4143 8.52678 18.1425 8 16.8164 8ZM16.8164 16C16.2231 16 15.643 15.8241 15.1497 15.4944C14.6564 15.1648 14.2718 14.6962 14.0448 14.1481C13.8177 13.5999 13.7583 12.9967 13.8741 12.4147C13.9898 11.8328 14.2755 11.2982 14.6951 10.8787C15.1146 10.4591 15.6492 10.1734 16.2311 10.0576C16.8131 9.94189 17.4163 10.0013 17.9645 10.2284C18.5126 10.4554 18.9812 10.8399 19.3108 11.3333C19.6405 11.8266 19.8164 12.4067 19.8164 13C19.8156 13.7954 19.4993 14.558 18.9369 15.1204C18.3744 15.6829 17.6118 15.9992 16.8164 16Z" fill="#313131" />
                  <path d="M16.8164 3C14.0475 3 11.3407 3.82109 9.03843 5.35943C6.73614 6.89777 4.94173 9.08427 3.8821 11.6424C2.82247 14.2006 2.54523 17.0155 3.08542 19.7313C3.62561 22.447 4.95898 24.9416 6.91692 26.8995C8.87485 28.8574 11.3694 30.1908 14.0851 30.731C16.8009 31.2712 19.6158 30.9939 22.174 29.9343C24.7321 28.8747 26.9186 27.0803 28.457 24.778C29.9953 22.4757 30.8164 19.7689 30.8164 17C30.8122 13.2883 29.3358 9.72977 26.7112 7.10518C24.0866 4.48059 20.5281 3.00423 16.8164 3ZM10.8164 27.377V26C10.8172 25.2046 11.1335 24.442 11.696 23.8796C12.2584 23.3171 13.021 23.0008 13.8164 23H19.8164C20.6118 23.0008 21.3744 23.3171 21.9369 23.8796C22.4993 24.442 22.8156 25.2046 22.8164 26V27.377C20.9956 28.4402 18.9249 29.0005 16.8164 29.0005C14.7079 29.0005 12.6372 28.4402 10.8164 27.377ZM24.8084 25.926C24.7885 24.6143 24.2541 23.363 23.3203 22.4416C22.3866 21.5202 21.1282 21.0025 19.8164 21H13.8164C12.5046 21.0025 11.2463 21.5202 10.3125 22.4416C9.37875 23.363 8.84434 24.6143 8.82441 25.926C7.01098 24.3067 5.73214 22.1749 5.15725 19.8127C4.58235 17.4505 4.73851 14.9693 5.60505 12.6979C6.47159 10.4264 8.00763 8.47167 10.0098 7.09257C12.0119 5.71347 14.3858 4.97503 16.8169 4.97503C19.2481 4.97503 21.6219 5.71347 23.624 7.09257C25.6262 8.47167 27.1622 10.4264 28.0288 12.6979C28.8953 14.9693 29.0515 17.4505 28.4766 19.8127C27.9017 22.1749 26.6228 24.3067 24.8094 25.926H24.8084Z" fill="#313131" />
                </svg>
                <span class="hidden sm:block">Login</span>
              </a>
              <!-- Show this anchor when user loggedin -->
              <a href="#" class="flex items-center text-lightBlack hover:text-primary text-sm lg:text-base 2xl:text-lg dropdown-with-arrow hidden">
                <svg class="mr-0 sm:mr-2 profile-icon" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8164 8C15.8275 8 14.8608 8.29325 14.0386 8.84265C13.2163 9.39206 12.5754 10.173 12.197 11.0866C11.8186 12.0002 11.7196 13.0055 11.9125 13.9755C12.1054 14.9454 12.5816 15.8363 13.2809 16.5355C13.9801 17.2348 14.8711 17.711 15.841 17.9039C16.8109 18.0969 17.8162 17.9978 18.7298 17.6194C19.6435 17.241 20.4244 16.6001 20.9738 15.7779C21.5232 14.9556 21.8164 13.9889 21.8164 13C21.8164 11.6739 21.2896 10.4021 20.3519 9.46447C19.4143 8.52678 18.1425 8 16.8164 8ZM16.8164 16C16.2231 16 15.643 15.8241 15.1497 15.4944C14.6564 15.1648 14.2718 14.6962 14.0448 14.1481C13.8177 13.5999 13.7583 12.9967 13.8741 12.4147C13.9898 11.8328 14.2755 11.2982 14.6951 10.8787C15.1146 10.4591 15.6492 10.1734 16.2311 10.0576C16.8131 9.94189 17.4163 10.0013 17.9645 10.2284C18.5126 10.4554 18.9812 10.8399 19.3108 11.3333C19.6405 11.8266 19.8164 12.4067 19.8164 13C19.8156 13.7954 19.4993 14.558 18.9369 15.1204C18.3744 15.6829 17.6118 15.9992 16.8164 16Z" fill="#313131" />
                  <path d="M16.8164 3C14.0475 3 11.3407 3.82109 9.03843 5.35943C6.73614 6.89777 4.94173 9.08427 3.8821 11.6424C2.82247 14.2006 2.54523 17.0155 3.08542 19.7313C3.62561 22.447 4.95898 24.9416 6.91692 26.8995C8.87485 28.8574 11.3694 30.1908 14.0851 30.731C16.8009 31.2712 19.6158 30.9939 22.174 29.9343C24.7321 28.8747 26.9186 27.0803 28.457 24.778C29.9953 22.4757 30.8164 19.7689 30.8164 17C30.8122 13.2883 29.3358 9.72977 26.7112 7.10518C24.0866 4.48059 20.5281 3.00423 16.8164 3ZM10.8164 27.377V26C10.8172 25.2046 11.1335 24.442 11.696 23.8796C12.2584 23.3171 13.021 23.0008 13.8164 23H19.8164C20.6118 23.0008 21.3744 23.3171 21.9369 23.8796C22.4993 24.442 22.8156 25.2046 22.8164 26V27.377C20.9956 28.4402 18.9249 29.0005 16.8164 29.0005C14.7079 29.0005 12.6372 28.4402 10.8164 27.377ZM24.8084 25.926C24.7885 24.6143 24.2541 23.363 23.3203 22.4416C22.3866 21.5202 21.1282 21.0025 19.8164 21H13.8164C12.5046 21.0025 11.2463 21.5202 10.3125 22.4416C9.37875 23.363 8.84434 24.6143 8.82441 25.926C7.01098 24.3067 5.73214 22.1749 5.15725 19.8127C4.58235 17.4505 4.73851 14.9693 5.60505 12.6979C6.47159 10.4264 8.00763 8.47167 10.0098 7.09257C12.0119 5.71347 14.3858 4.97503 16.8169 4.97503C19.2481 4.97503 21.6219 5.71347 23.624 7.09257C25.6262 8.47167 27.1622 10.4264 28.0288 12.6979C28.8953 14.9693 29.0515 17.4505 28.4766 19.8127C27.9017 22.1749 26.6228 24.3067 24.8094 25.926H24.8084Z" fill="#313131" />
                </svg>
                <span class="hidden sm:block sm:mr-2">Mark</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon hidden sm:inline-block">
                  <path d="M0.816406 1.0376L6.81641 6.58648L12.8164 1.0376" stroke="#313131" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <!-- Add a class "sm:flex" when user is not loggedin else "sm:hidden" -->
            <div class="hidden sm:flex items-center">
              <router-link class="professional p-3 xl:p-5 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out" @click="showModalSignup = true" to="/homepro" tag="button">For Professional</router-link>
            </div>

            <div class="flex lg:hidden">
              <button aria-label="show options" class="text-black dark:text-white dark:hover:text-gray-300 flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600" @click="showHeaderMenus = !showHeaderMenus">
                <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>            
            </div>
          </div>
        </div>
      </div>
    
    <!-- Login Modal -->
    <vue-modal
      v-model="showModalLogin"
      wrapperClass="loginModal"
    >
      <login
        @closeLoginModal="closeLoginModal"
        @closeResetModal="closeResetModal"
      ></login>
    </vue-modal>

    <!-- Signup Modal -->
    <vue-modal
      v-model="showModalSignup"
      wrapperClass="signupModal"
    >
      <signup
        @closeSignUpModal="closeSignUpModal"
      >
      </signup>
    </vue-modal>

     <!-- Reset Modal -->
    <vue-modal
      v-model="showModalReset"
      wrapperClass="resetModal"
    >
      <reset-password
         @closeModals="closeModals"
      >
      </reset-password>
    </vue-modal>
  </div>
</template>
<style scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>
<script>
import logo from "../assets/images/logo.png";
import Login from "../components/common/Login.vue";
import Signup from "../components/common/Signup.vue";
import ResetPassword from "../components/common/ResetPassword.vue";
import bodyScroll from "body-scroll-freezer";
export default {
  name: "header",
  components: { Login, Signup, ResetPassword },
  data() {
    return {
       showHeaderMenus: false,
      showModalLogin: false,
      showModalSignup: false,
      showModalReset: false,
      inClass: "backInDown",
      outClass: "backOutUp",
      bgInClass: "fadeInUp",
      bgOutClass: "fadeOutDown",
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
      logo: logo
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    bodyScroll.init();
  },
  methods: {
    beforeOpen() {
      bodyScroll.freeze();
    },
    beforeClose() {
      bodyScroll.unfreeze();
    },
    closeLoginModal() {
      this.showModalLogin = false;
      this.showModalSignup = true;
    },
    closeSignUpModal() {
      this.showModalLogin = true;
      this.showModalSignup = false;
    },
     closeResetModal() {
      this.showModalLogin = false;
      this.showModalSignup = false;
      this.showModalReset = true;
    },
    closeModals() {
      this.showModalLogin = false;
      this.showModalSignup = false;
      this.showModalReset = false;
    },
    handleScroll() {
      if (window.scrollY >= 97) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
};
</script>

