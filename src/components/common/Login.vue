<template>
  <div class="login-form">
    <div class="wrap-inner">
      <h2 class="text-black text-xl font-bold mb-4">Login to Account</h2>
      <form action="">
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2"> Email </span>
          <input
            type="email"
            name="email"
            class="
              px-4
              py-2
              bg-white
              placeholder-blackLight
              text-black
              w-full
              rounded-xs
              text-sm
              focus:ring-1
              focus:outline-none
              focus:border-primary
              focus:ring-primary
            "
            placeholder="Enter Email"
          />
        </label>
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">
            Password
          </span>
          <input
            type="password"
            name="password"
            class="
              px-4
              py-2
              bg-white
              placeholder-blackLight
              text-black
              w-full
              rounded-xs
              text-sm
              focus:ring-1
              focus:outline-none
              focus:border-primary
              focus:ring-primary
            "
            placeholder="Enter your password"
          />
        </label>
        <label class="block pb-4">
          <span class="block text-sm text-black">
            Forgot your password?
            <a href="#" class="underline text-primary hover:text-green"
              >Remind Me</a
            >
          </span>
        </label>
        <label class="block pb-4">
          <button
            class="
              px-3
              xl:px-5
              py-3
              font-semibold
              text-md
              2xl:text-base
              bg-primary
              text-white
              rounded-sm
              shadow-sm
              w-full
              hover:bg-green
              duration-500
              ease-in-out
              flex
              items-center
              justify-center
            "
          >
            <span class="mr-3">Login</span>
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
        <label class="block pb-4">
          <button
            class="
              px-3
              xl:px-5
              py-3
              font-semibold
              text-md
              2xl:text-base
              bg-facebook
              text-white
              rounded-sm
              shadow-sm
              w-full
              duration-500
              ease-in-out
              flex
              items-center
              justify-center
            "
          >
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3164 11.6397C23.3164 5.28842 18.1677 0.139703 11.8164 0.139703C5.46513 0.139703 0.316406 5.28842 0.316406 11.6397C0.316406 17.3797 4.52179 22.1373 10.0195 23V14.9639H7.09961V11.6397H10.0195V9.10611C10.0195 6.22392 11.7364 4.63189 14.3633 4.63189C15.6214 4.63189 16.9375 4.8565 16.9375 4.8565V7.68658H15.4874C14.0588 7.68658 13.6133 8.57304 13.6133 9.48249V11.6397H16.8027L16.2929 14.9639H13.6133V23C19.111 22.1373 23.3164 17.3797 23.3164 11.6397Z"
                fill="white"
              />
            </svg>

            <span class="ml-3">Continue with Facebook</span>
          </button>
        </label>
        <label class="block pb-4">
          <button
            class="
              px-3
              xl:px-5
              py-3
              font-semibold
              text-md
              2xl:text-base
              bg-white
              border border-black-300
              text-black
              rounded-sm
              shadow-sm
              w-full              
              duration-500
              ease-in-out
              flex
              items-center
              justify-center
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8564 12.2615C22.8564 11.446 22.7832 10.6619 22.6473 9.90918H11.8164V14.3576H18.0055C17.7389 15.7951 16.9287 17.013 15.7107 17.8285V20.714H19.4273C21.6019 18.7119 22.8564 15.7637 22.8564 12.2615Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8164 23.5001C14.9214 23.5001 17.5246 22.4703 19.4273 20.7139L15.7107 17.8285C14.6809 18.5185 13.3636 18.9262 11.8164 18.9262C8.82114 18.9262 6.28591 16.9032 5.3816 14.1851H1.53955V17.1646C3.43182 20.923 7.32091 23.5001 11.8164 23.5001Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.38163 14.185C5.15163 13.495 5.02095 12.7579 5.02095 12C5.02095 11.242 5.15163 10.505 5.38163 9.81499V6.83545H1.53959C0.760724 8.38795 0.316406 10.1443 0.316406 12C0.316406 13.8557 0.760724 15.612 1.53959 17.1645L5.38163 14.185Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8164 5.07386C13.5048 5.07386 15.0207 5.65409 16.2125 6.79364L19.5109 3.49523C17.5193 1.63955 14.9161 0.5 11.8164 0.5C7.32092 0.5 3.43182 3.07705 1.53955 6.83545L5.3816 9.815C6.28591 7.09682 8.82114 5.07386 11.8164 5.07386Z"
                fill="#EA4335"
              />
            </svg>

            <span class="ml-3">Continue with Google</span>
          </button>
        </label>
        <label class="block pb-4">
          <button
            class="
              apple
              px-3
              xl:px-5
              py-3
              font-semibold
              text-md
              2xl:text-base
              bg-black
              text-white
              rounded-sm
              shadow-sm
              w-full
              duration-500
              ease-in-out
              flex
              items-center
              justify-center
            "
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0362 18.424C18.6883 19.2275 18.2766 19.9672 17.7996 20.6472C17.1494 21.5743 16.617 22.216 16.2067 22.5724C15.5707 23.1573 14.8892 23.4568 14.1595 23.4739C13.6356 23.4739 13.0038 23.3248 12.2684 23.0224C11.5306 22.7214 10.8525 22.5724 10.2325 22.5724C9.58232 22.5724 8.88496 22.7214 8.13904 23.0224C7.39199 23.3248 6.79018 23.4824 6.33005 23.498C5.63028 23.5278 4.93277 23.2197 4.23655 22.5724C3.79218 22.1848 3.23636 21.5204 2.57052 20.5791C1.85612 19.5739 1.26879 18.4084 0.808658 17.0795C0.315877 15.6442 0.0688477 14.2543 0.0688477 12.9087C0.0688477 11.3673 0.401912 10.0379 1.06903 8.92385C1.59333 8.029 2.29084 7.32312 3.16381 6.80493C4.03679 6.28674 4.98005 6.02267 5.99585 6.00578C6.55167 6.00578 7.28055 6.1777 8.18632 6.51559C9.08954 6.85462 9.66949 7.02655 9.92376 7.02655C10.1139 7.02655 10.7581 6.82552 11.8503 6.42473C12.8831 6.05305 13.7548 5.89916 14.469 5.95978C16.404 6.11595 17.8578 6.87876 18.8246 8.25303C17.094 9.30163 16.2379 10.7703 16.255 12.6544C16.2706 14.122 16.803 15.3432 17.8493 16.3129C18.3235 16.7629 18.853 17.1107 19.4422 17.3578C19.3144 17.7283 19.1796 18.0832 19.0362 18.424ZM14.5982 0.960131C14.5982 2.11039 14.1779 3.18439 13.3403 4.17847C12.3295 5.36023 11.1068 6.04311 9.78094 5.93536C9.76404 5.79736 9.75425 5.65213 9.75425 5.49951C9.75425 4.39526 10.235 3.21349 11.0886 2.24724C11.5148 1.75801 12.0569 1.35122 12.7142 1.02671C13.3701 0.707053 13.9905 0.530273 14.574 0.5C14.5911 0.653772 14.5982 0.807554 14.5982 0.960116V0.960131Z"
                fill="white"
              />
            </svg>

            <span class="ml-3">Continue with Apple</span>
          </button>
        </label>
      </form>
    </div>
    <div class="form-footer text-sm text-black text-center py-5">
      Don't have an account yet?
      <a
        href="#"
        class="underline text-primary hover:text-green"
        @click="showModalSignup = true"
        >Sign up</a
      >
    </div>
  </div>
</template>
<script>
// import Signup from "../components/common/Signup.vue";
// export default {
//   name: "login",
//   components: { Signup },
//   data() {
//     return {
//       showModalSignup: true,
//     };
//   },
//   methods() {},
// };
//
</script>

