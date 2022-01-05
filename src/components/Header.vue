<template>
  <!-- For md screen size -->
  <!-- <div
      v-if="search"
      id="md-searchbar"
      class="
        bg-white
        w-full
        dark:bg-gray-900
        lg:hidden
        py-5
        px-6
        items-center
        justify-between
      "
    >
      <div class="flex items-center space-x-3 text-gray-800 dark:text-white">
        <div>
          <svg
            class="fill-stroke"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.9984 18.9999L14.6484 14.6499"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for products"
          class="
            text-sm
            leading-none
            dark:text-gray-300 dark:bg-gray-900
            text-gray-600
            focus:outline-none
          "
        />
      </div>
      <div class="space-x-6">
        <button
          aria-label="view favourites"
          class="
            text-gray-800
            dark:text-white
            focus:outline-none focus:ring-2 focus:ring-gray-800
          "
        >
          <svg
            class="fill-stroke"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          aria-label="go to cart"
          class="
            text-gray-800
            dark:text-white
            focus:outline-none focus:ring-2 focus:ring-gray-800
          "
        >
          <svg
            class="fill-stroke"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 4.2002H17"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div> -->
  <!-- For md screen size -->

  <!-- For large screens -->
  <div class="wrapper">
    <header class="bg-white py-4 2xl:py-7 shadow-xl relative">
      <div class="container mx-auto flex items-center justify-between px-5">
        <figure class="header-logo">
          <a href="#">
            <img src="../assets/images/logo.png" />
          </a>
        </figure>
        <nav class="hidden lg:block absolute lg:relative bg-white">
          <ul
            class="
              flex flex-col
              lg:flex-row
              items-center
              space-x-0
              lg:space-x-6
              xl:space-x-10
              3xl:space-x-16
            "
          >
            <li>
              <a
                href="javascript:void(0)"
                class="
                  dark:text-white
                  text-sm
                  lg:text-base
                  2xl:text-lg
                  text-black
                  focus:outline-none
                  hover:text-primary
                "
                >Home</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  dark:text-white
                  text-sm
                  lg:text-base
                  2xl:text-lg
                  text-black
                  focus:outline-none
                  hover:text-primary
                "
                >About</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  dark:text-white
                  text-sm
                  lg:text-base
                  2xl:text-lg
                  text-black
                  focus:outline-none
                  hover:text-primary
                "
                >Services</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  dark:text-white
                  text-sm
                  lg:text-base
                  2xl:text-lg
                  text-black
                  focus:outline-none
                  hover:text-primary
                "
                >Testimonials</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  dark:text-white
                  text-sm
                  lg:text-base
                  2xl:text-lg
                  text-black
                  focus:outline-none
                  hover:text-primary
                "
                >Contact</a
              >
            </li>
          </ul>
        </nav>

        <div
          class="
            justify-end
            flex
            items-center
            space-x-5
            md:space-x-6
            xl:space-x-10
            3xl:space-x-16
          "
        >
          <div class="account-labels">
            <a
              @click="showModalLogin = true"
              href="#"
              class="
                flex
                items-center
                hover:text-primary
                text-sm
                lg:text-base
                2xl:text-lg
              "
            >
              <svg
                class="mr-0 sm:mr-2"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8164 8C15.8275 8 14.8608 8.29325 14.0386 8.84265C13.2163 9.39206 12.5754 10.173 12.197 11.0866C11.8186 12.0002 11.7196 13.0055 11.9125 13.9755C12.1054 14.9454 12.5816 15.8363 13.2809 16.5355C13.9801 17.2348 14.8711 17.711 15.841 17.9039C16.8109 18.0969 17.8162 17.9978 18.7298 17.6194C19.6435 17.241 20.4244 16.6001 20.9738 15.7779C21.5232 14.9556 21.8164 13.9889 21.8164 13C21.8164 11.6739 21.2896 10.4021 20.3519 9.46447C19.4143 8.52678 18.1425 8 16.8164 8ZM16.8164 16C16.2231 16 15.643 15.8241 15.1497 15.4944C14.6564 15.1648 14.2718 14.6962 14.0448 14.1481C13.8177 13.5999 13.7583 12.9967 13.8741 12.4147C13.9898 11.8328 14.2755 11.2982 14.6951 10.8787C15.1146 10.4591 15.6492 10.1734 16.2311 10.0576C16.8131 9.94189 17.4163 10.0013 17.9645 10.2284C18.5126 10.4554 18.9812 10.8399 19.3108 11.3333C19.6405 11.8266 19.8164 12.4067 19.8164 13C19.8156 13.7954 19.4993 14.558 18.9369 15.1204C18.3744 15.6829 17.6118 15.9992 16.8164 16Z"
                  fill="black"
                />
                <path
                  d="M16.8164 3C14.0475 3 11.3407 3.82109 9.03843 5.35943C6.73614 6.89777 4.94173 9.08427 3.8821 11.6424C2.82247 14.2006 2.54523 17.0155 3.08542 19.7313C3.62561 22.447 4.95898 24.9416 6.91692 26.8995C8.87485 28.8574 11.3694 30.1908 14.0851 30.731C16.8009 31.2712 19.6158 30.9939 22.174 29.9343C24.7321 28.8747 26.9186 27.0803 28.457 24.778C29.9953 22.4757 30.8164 19.7689 30.8164 17C30.8122 13.2883 29.3358 9.72977 26.7112 7.10518C24.0866 4.48059 20.5281 3.00423 16.8164 3ZM10.8164 27.377V26C10.8172 25.2046 11.1335 24.442 11.696 23.8796C12.2584 23.3171 13.021 23.0008 13.8164 23H19.8164C20.6118 23.0008 21.3744 23.3171 21.9369 23.8796C22.4993 24.442 22.8156 25.2046 22.8164 26V27.377C20.9956 28.4402 18.9249 29.0005 16.8164 29.0005C14.7079 29.0005 12.6372 28.4402 10.8164 27.377ZM24.8084 25.926C24.7885 24.6143 24.2541 23.363 23.3203 22.4416C22.3866 21.5202 21.1282 21.0025 19.8164 21H13.8164C12.5046 21.0025 11.2463 21.5202 10.3125 22.4416C9.37875 23.363 8.84434 24.6143 8.82441 25.926C7.01098 24.3067 5.73214 22.1749 5.15725 19.8127C4.58235 17.4505 4.73851 14.9693 5.60505 12.6979C6.47159 10.4264 8.00763 8.47167 10.0098 7.09257C12.0119 5.71347 14.3858 4.97503 16.8169 4.97503C19.2481 4.97503 21.6219 5.71347 23.624 7.09257C25.6262 8.47167 27.1622 10.4264 28.0288 12.6979C28.8953 14.9693 29.0515 17.4505 28.4766 19.8127C27.9017 22.1749 26.6228 24.3067 24.8094 25.926H24.8084Z"
                  fill="black"
                />
              </svg>

              <span class="hidden sm:block">Login</span>
            </a>
          </div>
          <div class="hidden sm:flex items-center">
            <button
              class="
                p-3
                xl:p-5
                font-semibold
                text-md
                2xl:text-lg
                bg-primary
                text-white
                rounded-sm
                shadow-sm
                hover:bg-green
                duration-500
                ease-in-out
              "
              @click="showModalSignup = true"
            >
              For Professionals
            </button>
          </div>

          <div class="flex lg:hidden">
            <button
              aria-label="show options"
              @click="search = !search"
              class="
                text-black
                dark:text-white dark:hover:text-gray-300
                hidden
                md:flex
                focus:outline-none focus:ring-2
                rounded
                focus:ring-gray-600
              "
            >
              <svg
                class="fill-stroke"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 18H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              aria-label="open menu"
              class="
                text-black
                dark:text-white dark:hover:text-gray-300
                md:hidden
                focus:outline-none focus:ring-2
                rounded
                focus:ring-gray-600
              "
            >
              <svg
                class="fill-stroke"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 18H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <vue-modal
      v-model="showModalLogin"
      wrapperClass="loginModal animate__animated"
      in-class="animate__backInDown"
      out-class="animate__backOutUp"
      bg-class="animate__animated"
      bg-in-class="animate__fadeInUp"
      bg-out-class="animate__fadeOutDown"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <login></login>
    </vue-modal>
    <vue-modal
      v-model="showModalSignup"
      wrapperClass="signupModal animate__animated"
      in-class="animate__backInDown"
      out-class="animate__backOutUp"
      bg-class="animate__animated"
      bg-in-class="animate__fadeInUp"
      bg-out-class="animate__fadeOutDown"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <signup></signup>
    </vue-modal>
  </div>
  <!-- For small screen -->
  <!-- <div
      id="mobile-menu"
      v-if="menu"
      class="
        absolute
        dark:bg-gray-900
        z-10
        inset-0
        md:hidden
        bg-white
        flex flex-col
        h-screen
        w-full
      "
    >
      <div
        class="
          flex
          items-center
          justify-between
          border-b border-gray-200
          dark:border-gray-700
          pb-4
          p-4
        "
      >
        <div class="flex items-center space-x-3">
          <div>
            <svg
              class="fill-stroke text-gray-800 dark:text-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9984 18.9999L14.6484 14.6499"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products"
            class="
              text-sm
              dark:bg-gray-900
              text-gray-600
              placeholder-gray-600
              dark:placeholder-gray-300
              focus:outline-none
            "
          />
        </div>

        <button
          @click="menu = false"
          aria-label="close menu"
          class="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
        >
          <svg
            class="fill-stroke text-gray-800 dark:text-white"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 4L12 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="mt-6 p-4">
        <ul class="flex flex-col space-y-6">
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                flex
                items-center
                justify-between
                hover:underline
                text-base text-gray-800
                focus:outline-none focus:ring-2 focus:ring-gray-800
              "
            >
              Home
              <div>
                <svg
                  class="fill-stroke text-black dark:text-white"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                flex
                items-center
                justify-between
                hover:underline
                text-base text-gray-800
                focus:outline-none focus:ring-2 focus:ring-gray-800
              "
            >
              Furniture
              <div>
                <svg
                  class="fill-stroke text-black dark:text-white"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                flex
                items-center
                justify-between
                hover:underline
                text-base text-gray-800
                focus:outline-none focus:ring-2 focus:ring-gray-800
              "
            >
              Lookbook
              <div>
                <svg
                  class="fill-stroke text-black dark:text-white"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                flex
                items-center
                justify-between
                hover:underline
                text-base text-gray-800
                focus:outline-none focus:ring-2 focus:ring-gray-800
              "
            >
              Support
              <div>
                <svg
                  class="fill-stroke text-black dark:text-white"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="h-full flex items-end">
        <ul
          class="
            flex flex-col
            space-y-8
            bg-gray-50
            w-full
            py-10
            p-4
            dark:bg-gray-800
          "
        >
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                text-gray-800
                flex
                items-center
                space-x-2
                focus:outline-none focus:ring-2 focus:ring-gray-800
                hover:underline
              "
            >
              <div>
                <svg
                  class="fill-stroke"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 5H21"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-base">Cart</p>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="
                dark:text-white
                text-gray-800
                flex
                items-center
                space-x-2
                focus:outline-none focus:ring-2 focus:ring-gray-800
                hover:underline
              "
            >
              <div>
                <svg
                  class="fill-stroke"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-base">Wishlist</p>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
</template>

<script>
import Login from "../components/common/Login.vue";
import Signup from "../components/common/Signup.vue";
import bodyScroll from "../../node_modules/body-scroll-freezer";
export default {
  name: "header",
  components: { Login, Signup },
  data() {
    return {
      menu: false,
      search: false,
      options: false,
      showModalLogin: false,
      showModalSignup: false,
      inClass: "backInDown",
      outClass: "backOutUp",
      bgInClass: "fadeInUp",
      bgOutClass: "fadeOutDown",
    };
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
  },
};
</script>

