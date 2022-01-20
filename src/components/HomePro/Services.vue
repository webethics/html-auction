<template>
  <div class="services">
    <div class="container mx-auto px-5 lg:px-20 2xl:px-28 3xl:px-5 py-8 sm:py-12 lg:py-20 3xl:py-24">
      <div class="flex flex-col md:flex-row items-stretch justify-between space-x-0 md:space-x-5 lg:space-x-8">
        <div
          class="services-wrap rounded-md text-center md:text-left w-full relative mb-5 overflow-hidden scale-100">
          <div class="services-img bg-plumber bg-cover bg-bottom transition-transform duration-500 ease-in-out"></div>
          <div class="services-meta-wrap rounded-b-md px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center absolute bottom-0 left-0 right-0 mx-auto">
            <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-six 3xl:text-five font-bold text-white">
              <a href="#"> Plumber</a>
            </h3>
            <p class="text-sm sm:text-base lg:text-lg text-white">
              Only pay when you agree
            </p>
          </div>
        </div>

        <div class="services-wrap rounded-md text-center md:text-left w-full relative mb-5 overflow-hidden scale-100">
          <div class="services-img bg-contractor bg-cover bg-bottom transition-transform duration-500 ease-in-out"></div>
          <div class="services-meta-wrap rounded-b-md px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center absolute bottom-0 left-0 right-0 mx-auto">
            <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-six 3xl:text-five font-bold text-white">
              <a href="#"> Contractor</a>
            </h3>
            <p class="text-sm sm:text-base lg:text-lg text-white">
              Pick your price
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-stretch justify-between space-x-0 md:space-x-5">
        <div class="services-wrap rounded-md text-center md:text-left w-full relative overflow-hidden scale-100">
          <div class="services-img bg-realtor bg-cover bg-bottom transition-transform duration-500 ease-in-out"></div>
          <div class="services-meta-wrap rounded-b-md px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center absolute bottom-0 left-0 right-0 mx-auto">
            <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-six 3xl:text-five font-bold text-white">
              <a href="#">Realtor</a>
            </h3>
            <p class="text-sm sm:text-base lg:text-lg text-white">
              Refunded costs if unsatisfied
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-5 md:justify-end lg:mt-8">
        <router-link class="py-2 px-6 xl:py-3 3xl:px-10 3xl:py-5 3xl:text-lg font-semibold text-md bg-green text-white rounded-sm shadow-sm uppercase shadow-3xl hover:bg-primary duration-500 ease-in-out" to="/job-listing" tag="button">see all</router-link>
      </div>
    </div>
  </div>
</template>
