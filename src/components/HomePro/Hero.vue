<template>
  <div class="bg-hero-pattern bg-cover bg-bottom relative aaiy">
    <img :src="bars" class="banner-bars banner-art absolute right-0 top-0 sm:bottom-0 my-auto" />
    <img :src="lines" class="banner-line banner-art absolute left-0 top-48 sm:top-16" />
    <div class="container mx-auto flex px-5 2xl:px-28 3xl:px-5 py-8 sm:py-12 lg:py-20 3xl:py-24 sm:flex-row flex-col-reverse items-center">
      <div class="sm:w-1/2 lg:pr-0 3xl:pr-24 sm:pr-8 md-pr-16 flex flex-col sm:items-start sm:text-left items-center text-center">
        <h1 class="banner-title text-lightBlack text-six md:text-five lg:text-four xl:text-three 3xl:text-one mb-2 sm:mb-4 lg:mb-6 xl:mb-8 font-bold leading-30 md:leading-40 lg:leading-50 xl:leading-63 3xl:leading-90">
          <span class="block">Book ANY</span> <span class="text-green">Professional</span> in secondss.
        </h1>
        <p class="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-paraColor text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl leading-20 xl:leading-30">
          Find the services you need today, by letting the pro's bid on you!
        </p>
        <div class="flex justify-center">
          <button class="py-2 px-6 xl:py-3 3xl:px-10 3xl:py-5 font-semibold text-md 3xl:text-lg bg-primary text-white rounded-sm shadow-3xl uppercase hover:bg-green duration-500 ease-in-out">
            GeT Started
          </button>
        </div>
      </div>
      <div class="w-1/2 mb-10 sm:mb-0">
        <img class="rounded ml-auto lg:w-3/4 2xl:w-3/4 3xl:w-full" alt="hero" v-bind:src="hero" />
      </div>
    </div>
  </div>
</template>
<script>
import hero from '../../assets/images/hero-image.png';
import bars from '../../assets/images/banner-bars.svg';
import lines from '../../assets/images/banner-line.svg';

export default{
  data() {
    return {
      hero:hero,
      bars:bars,
      lines:lines,
    }
  },
}
</script>
