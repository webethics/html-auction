<template>
  <div class="text-gray-600 body-font bg-hero-pattern bg-cover bg-bottom">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font lg:text-6xl text-3xl mb-4 font-bold text-gray-900 max-w-2xl"
        >
          Book ANY <span class="text-primary">Professional</span> in seconds.
        </h1>
        <p class="mb-8 leading-relaxed">
          Find the services you need today, by letting the pro's bid on you!
        </p>
        <div class="flex justify-center">
          <button
            class="px-7 py-4 font-semibold text-sm bg-primary text-white rounded-md shadow-sm"
          >
            GeT Started
          </button>
        </div>
      </div>

      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          v-bind:src="require('../../assets/images/hero-image.png')"
        />
      </div>
    </div>
  </div>
</template>
