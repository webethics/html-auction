<template>
  <div class="feature-services">
    <div class="container px-5 mx-auto xl:px-20 2xl:px-28 3xl:px-5">
    <div class="container bg-featured-services bg-cover bg-fixed mx-auto px-5 sm:px-10 xl:px-20 3xl:px-28 py-8 sm:py-12 3xl:py-24 sm:rounded-md lg:rounded-lg">
      <div class="flex justify-center md:justify-start">
        <h2 class="text-six md:text-five lg:text-four xl:text-three 3xl:text-two font-bold text-white pb-8 sm:pb-12 3xl:pb-24 leading-30 md:leading-40 lg:leading-50 xl:leading-63 3xl:leading-90">
          Featured Services
        </h2>
      </div>
    
      <div class="flex flex-col md:flex-row items-stretch justify-between space-x-0 md:space-x-5 lg:space-x-6 3xl:space-x-10">
       
        <div class="bg-white shadow-lg rounded-md px-4 py-6 md:pb-20 lg:pb-24 lg:pt-9 lg:px-9 text-center md:text-left w-full relative featured-column">
          <div class="fs-img-wrap rounded-full flex align-center flex-wrap mx-auto md:ml-0">
            <img :src="emergencyServices" alt="" class="mx-auto h-100 transition-transform duration-500 ease-in-out" />
          </div>
          <h3 class="text-lightBlack text-lg 3xl:text-2xl font-semibold mt-5 3xl:mt-10 mb-2 3xl:mb-6 fs-title transition duration-500 ease-in-out cursor-pointer">
            <a href=""> Emergency Services</a>
          </h3>
          <p class="text-paraColor leading-20 3xl:leading-30 text-sm sm:text-base 3xl:text-lg mt-2">
            Get immediate help now from local providers
          </p>
          <a href="#" class="fs-arrow flex items-center justify-center bg-gray rounded-full md:absolute mx-auto md:ml-0 mt-5 md:mt-0 cursor-pointer duration-500 ease-in-out transition">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6699 12.5022L3.49856 12.5022M14.6033 5.43555L21.6699 12.5022L14.6033 5.43555ZM21.6699 12.5022L14.6033 19.5688L21.6699 12.5022Z" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <div class="bg-white shadow-lg rounded-md px-4 py-6 md:pb-20 lg:pb-24 lg:pt-9 lg:px-9 mt-4 md:mt-0 text-center md:text-left w-full relative featured-column">
          <div class="fs-img-wrap rounded-full flex align-center flex-wrap mx-auto md:ml-0">
            <img :src="longTermProject" alt="" class="mx-auto h-100 transition-transform duration-500 ease-in-out" />
          </div>
          <h3 class="text-lightBlack text-lg 3xl:text-2xl font-semibold mt-5 3xl:mt-10 mb-2 3xl:mb-6 fs-title transition duration-500 ease-in-out cursor-pointer">
            <a href=""> Long-Term Projects</a>
          </h3>
          <p class="text-paraColor leading-20 3xl:leading-30 text-sm sm:text-base 3xl:text-lg mt-2">
            Start planning and receiving quotes, all in one platform
          </p>
          <a
            href="#"
            class="
              fs-arrow
              flex
              items-center
              justify-center
              bg-gray
              rounded-full
              md:absolute
              mx-auto
              md:ml-0
              mt-5
              md:mt-0
              cursor-pointer
              duration-500
              ease-in-out
              transition
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6699 12.5022L3.49856 12.5022M14.6033 5.43555L21.6699 12.5022L14.6033 5.43555ZM21.6699 12.5022L14.6033 19.5688L21.6699 12.5022Z"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div
          class="
            bg-white
            shadow-lg
            rounded-md
            px-4
            py-6
            md:pb-20
            lg:pb-24 lg:pt-9 lg:px-9
            mt-4
            md:mt-0
            text-center
            md:text-left
            w-full
            relative
            featured-column
          "
        >
          <div
            class="
              fs-img-wrap
              rounded-full
              flex
              align-center
              flex-wrap
              mx-auto
              md:ml-0
            "
          >
            <img
              :src="smallBusiness"
              alt=""
              class="
                mx-auto
                h-100
                transition-transform
                duration-500
                ease-in-out
              "
            />
          </div>
          <h3
            class="
             text-lightBlack
              text-lg
              3xl:text-2xl
              font-semibold
              mt-5
              3xl:mt-10
              mb-2
              3xl:mb-6
              fs-title
              transition
              duration-500
              ease-in-out
              cursor-pointer
            "
          >
            <a href=""> Small Business</a>
          </h3>
          <p class="text-paraColor leading-20 3xl:leading-30 text-sm sm:text-base 3xl:text-lg mt-2">
            Support small businesses and work with real people.
          </p>
          <a
            href="#"
            class="
              fs-arrow
              flex
              items-center
              justify-center
              bg-gray
              rounded-full
              md:absolute
              mx-auto
              md:ml-0
              mt-5
              md:mt-0
              cursor-pointer
              duration-500
              ease-in-out
              transition
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6699 12.5022L3.49856 12.5022M14.6033 5.43555L21.6699 12.5022L14.6033 5.43555ZM21.6699 12.5022L14.6033 19.5688L21.6699 12.5022Z"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="flex justify-center md:justify-end mt-8">
        <button
          class="
            py-2
            px-6 xl:py-3
            3xl:px-10 3xl:py-5
            font-semibold
            text-md
            3xl:text-lg
            bg-primary
            text-white
            rounded-sm
            shadow-3xl
            uppercase
            hover:bg-green
            duration-500
            ease-in-out
          "
        >
          see all
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import emergencyServices from "../../assets/images/emergency-services.svg";
import longTermProject from "../../assets/images/long-term-project.svg";
import smallBusiness from "../../assets/images/small-business.svg";
export default {
  data() {
    return {
    emergencyServices: emergencyServices,
    longTermProject: longTermProject,
    smallBusiness: smallBusiness
    };
  }
}
</script>