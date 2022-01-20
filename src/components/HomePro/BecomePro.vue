<template>
  <div class="become-pro my-8 sm:my-12 lg:my-20 3xl:my-24">
    <div class="container px-5 mx-auto">
    <div
      class="aayio
        container containerBG
        mx-auto
        px-5
        py-8
        sm:p-12
        3xl:p-24
        sm:rounded-md
        lg:rounded-lg
      "
    >
      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          justify-between
          space-x-0
          sm:space-x-10
          flex-col-reverse
          sm:flex-row
        "
      >
        <div
          class="
            sm:w-1/2
            flex flex-col
            sm:items-start sm:text-left
            items-center
            text-center
          "
        >
          <h2
            class="
              pro-title
              leading-30
              md:leading-40
              lg:leading-50
              xl:leading-63
              3xl:leading-90
              text-six
              md:text-five
              lg:text-four
              xl:text-three
              3xl:text-one

              mb-2
              sm:mb-4
              lg:mb-6
              font-bold
              text-green
            "
          >
            Become A <br/>Pro
          </h2>
          <p class="text-sm sm:text-base lg:text-lg mb-6 leading-20 lg:leading-30 text-paraColor">
            Grow your business by finding your next client, at the perfect
            price!
          </p>
          <button
            class="
              py-2
              px-6 xl:py-3
              3xl:px-10 3xl:py-5
              font-semibold
              text-md
              3xl:text-lg
              bg-green
              text-white
              rounded-sm
              shadow-3xl
              uppercase
              hover:bg-primary
              duration-500
              ease-in-out
            "
          >
            learn more
          </button>
        </div>
        <div
          class="sm:w-1/2 flex flex-col items-center text-center mb-10 sm:mb-0"
        >
          <img :src="becomePro" alt="" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import becomePro from '../../assets/images/become-pro.png';

export default {
  data() {
    return {
      becomePro:becomePro
    }    
  },
}
</script>
