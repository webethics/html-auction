<template>
  <div class="reset-form">
    <div class="wrap-inner">
      <h2 class="text-black text-xl font-bold">Reset password</h2>
      <p class="mb-4 text-sm text-textColor opacity-50">You will receive instructions by email</p>
      <form action="">
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2"> Email </span>
          <input type="email" name="email" class=" px-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary " placeholder="Email" />
        </label>      
        <label class="block pb-4">
          <button class="px-3 xl:px-5 py-3 font-semibold text-md 2xl:text-base bg-green text-white rounded-sm shadow-sm w-full hover:bg-primary duration-500 ease-in-out flex items-center justify-center">
              <span class="mr-3">Send</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.14966 8H13.483"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.81641 3.3335L13.4831 8.00016L8.81641 12.6668"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </button>
        </label>        
      </form>
    </div>
    <div class="form-footer text-sm text-black text-center py-5">     
      <a
        @click.prevent="closeAllModal" 
        class="underline text-primary hover:text-green cursor-pointer"
        >Cancel</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "reset",
  data() {
    return {
    //   showModalSignup: false,
    };
  },
  methods: {
    closeAllModal() {
      this.$emit("closeModals");
    }
  },
};
</script>

