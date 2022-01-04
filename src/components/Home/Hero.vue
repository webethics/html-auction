<template>
  <div class="bg-hero-pattern bg-cover bg-bottom relative">
    <img
      src="../../assets/images/banner-bars.svg"
      class="banner-bars banner-art absolute right-0 top-0 bottom-0 my-auto"
    />
    <img
      src="../../assets/images/banner-line.svg"
      class="banner-line banner-art absolute left-0 top-16"
    />
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-8
        sm:py-12
        lg:py-20
        3xl:py-24
        sm:flex-row
        flex-col-reverse
        items-center
      "
    >
      <div
        class="
          sm:w-1/2
          lg:pr-0
          2xl:pr-24
          sm:pr-8
          md-pr-16
          flex flex-col
          sm:items-start sm:text-left
          items-center
          text-center
        "
      >
        <h1
          class="
            banner-title
            text-six
            md:text-five
            lg:text-four
            xl:text-three
            2xl:text-two
            3xl:text-one
            mb-2
            sm:mb-4
            lg:mb-6
            xl:mb-8
            font-bold
          "
        >
          Book ANY <span class="text-primary">Professional</span> in seconds.
        </h1>
        <p
          class="
            mb-6
            sm:mb-8
            md:mb-10
            lg:mb-12
            xl:mb-16
            text-sm
            sm:text-base
            lg:text-lg
            xl:text-xl
            3xl:text-2xl
          "
        >
          Find the services you need today, by letting the pro's bid on you!
        </p>
        <div class="flex justify-center">
          <button
            class="
              p-3
              xl:px-10 xl:p-5
              font-semibold
              text-md
              2xl:text-lg
              bg-primary
              text-white
              rounded-sm
              shadow-3xl
              uppercase
            "
          >
            GeT Started
          </button>
        </div>
      </div>

      <div class="w-1/2 mb-10 sm:mb-0">
        <img
          class="rounded ml-auto lg:w-3/4 2xl:w-3/4 3xl:w-full"
          alt="hero"
          v-bind:src="require('../../assets/images/hero-image.png')"
        />
      </div>
    </div>
  </div>
</template>
