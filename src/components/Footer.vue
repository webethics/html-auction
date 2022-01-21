<template>
  <footer>
    <div class="container footer-container mx-auto px-5 py-8 3xl:py-12 px-5 xl:px-20 2xl:px-28 3xl:px-5">
      <div
        class="
          flex flex-col
          lg:flex-row
          items-stretch
          justify-between
          space-x-0
          md:space-x-5
          lg:space-x-10
        "
      >
        <div
          class="
            footer-col-left footer-col
            w-full
            lg:w-2/5
            text-center
            lg:text-left
            mb-5
            lg:mb-0
          "
        >
          <div class="footer-logo-wrap mb-3">
            <a href="./">
              <img
                :src="logo"
                class="footer-logo mx-auto lg:ml-0"
              />
            </a>
          </div>
          <p class="text-sm footer-description w-full text-paraColor leading-20 lg:leading-30">
            Work with the largest network of independent professionals to get
            your job done -- from quick turn-arounds, to large-scale
            transformations.
          </p>
        </div>
        <div
          class="
            footer-col-right footer-col
            flex-col
            w-full
            lg:w-3/5
            flex
            sm:flex-row
            items-stretch
            justify-between
            space-x-0
            md:space-x-5
            lg:space-x-10
            text-center
            sm:text-left
          "
        >
          <div
            class="
              footer-col-one footer-inside-col
              w-full
              sm:w-1/3
              mb-4
              sm:mb-0
            "
          >
            <h2
              class="
                text-lg
                md:text-xl
                lg:text-2xl
                font-semibold
                2xl:text-six
                mb-2
                md:mb-4
                xl:mb-6
                2xl:mb-10
                text-lightBlack
              "
            >
              About
            </h2>
            <ul class="text-sm text-paraColor leading-30">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Reviews Stories</a>
              </li>
            </ul>
          </div>

          <div
            class="
              footer-col-two footer-inside-col
              w-full
              sm:w-1/3
              mb-4
              sm:mb-0
            "
          >
            <h2
              class="
                text-lg
                md:text-xl
                lg:text-2xl
                font-semibold
                2xl:text-six
                mb-2
                md:mb-4
                xl:mb-6
                2xl:mb-10
                text-lightBlack
              "
            >
              Privacy
            </h2>
            <ul class="text-sm text-paraColor leading-30">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>

          <div
            class="
              footer-col-three footer-inside-col
              w-full
              sm:w-1/3
              mb-4
              sm:mb-0
            "
          >
            <h2
              class="
                text-lg
                md:text-xl
                lg:text-2xl
                font-semibold
                2xl:text-six
                mb-2
                md:mb-4
                xl:mb-6
                2xl:mb-10
                text-lightBlack
              "
            >
              Contact Us
            </h2>
            <ul class="text-sm text-paraColor leading-30">
              <li>
                <a href="tel:+012345678910">+01 234 567 8910 </a>
              </li>
              <li>
                <a href="mailto:info@bidagree.com">info@bidagree.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          flex flex-row
          items-stretch
          justify-between
          space-x-0
          md:space-x-5
          lg:space-x-10
        "
      >
        <ul
          class="social-icons w-full text-center sm:text-right sm:mt-6 md:mt-12 md:pr-6"
        >
          <li>
            <a
              href="#"
              class="
                bg-green
                inline-block
                rounded-sm
                hover:bg-primary
                ease-in-out
                duration-500
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
                  d="M19.7988 5.92408C19.7988 6.86118 19.0392 7.62084 18.1021 7.62084C17.165 7.62084 16.4053 6.86118 16.4053 5.92408C16.4053 4.98698 17.165 4.22731 18.1021 4.22731C19.0392 4.22731 19.7988 4.98698 19.7988 5.92408Z"
                  fill="#F8F8F8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8806 17.8014C15.0043 17.8014 17.5365 15.2692 17.5365 12.1455C17.5365 9.02189 15.0043 6.48967 11.8806 6.48967C8.75695 6.48967 6.22473 9.02189 6.22473 12.1455C6.22473 15.2692 8.75695 17.8014 11.8806 17.8014ZM11.8806 15.5391C13.7548 15.5391 15.2741 14.0197 15.2741 12.1455C15.2741 10.2714 13.7548 8.75202 11.8806 8.75202C10.0064 8.75202 8.48708 10.2714 8.48708 12.1455C8.48708 14.0197 10.0064 15.5391 11.8806 15.5391Z"
                  fill="#F8F8F8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.568848 11.6931C0.568848 7.89197 0.568848 5.99142 1.30859 4.53958C1.95929 3.26252 2.99758 2.22423 4.27465 1.57353C5.72648 0.833786 7.62703 0.833786 11.4281 0.833786H12.3331C16.1342 0.833786 18.0347 0.833786 19.4866 1.57353C20.7636 2.22423 21.8019 3.26252 22.4526 4.53958C23.1924 5.99142 23.1924 7.89197 23.1924 11.6931V12.598C23.1924 16.3991 23.1924 18.2997 22.4526 19.7515C21.8019 21.0286 20.7636 22.0669 19.4866 22.7176C18.0347 23.4573 16.1342 23.4573 12.3331 23.4573H11.4281C7.62703 23.4573 5.72648 23.4573 4.27465 22.7176C2.99758 22.0669 1.95929 21.0286 1.30859 19.7515C0.568848 18.2997 0.568848 16.3991 0.568848 12.598V11.6931ZM11.4281 3.09614H12.3331C14.271 3.09614 15.5883 3.0979 16.6066 3.18109C17.5984 3.26213 18.1057 3.40902 18.4595 3.5893C19.3109 4.0231 20.0031 4.71529 20.4369 5.56667C20.6171 5.9205 20.764 6.42773 20.8451 7.41958C20.9283 8.43784 20.93 9.75519 20.93 11.6931V12.598C20.93 14.5359 20.9283 15.8533 20.8451 16.8715C20.764 17.8634 20.6171 18.3706 20.4369 18.7244C20.0031 19.5758 19.3109 20.268 18.4595 20.7018C18.1057 20.8821 17.5984 21.029 16.6066 21.11C15.5883 21.1932 14.271 21.195 12.3331 21.195H11.4281C9.49025 21.195 8.1729 21.1932 7.15464 21.11C6.16279 21.029 5.65556 20.8821 5.30173 20.7018C4.45035 20.268 3.75816 19.5758 3.32436 18.7244C3.14408 18.3706 2.99719 17.8634 2.91615 16.8715C2.83296 15.8533 2.8312 14.5359 2.8312 12.598V11.6931C2.8312 9.75519 2.83296 8.43784 2.91615 7.41958C2.99719 6.42773 3.14408 5.9205 3.32436 5.56667C3.75816 4.71529 4.45035 4.0231 5.30173 3.5893C5.65556 3.40902 6.16279 3.26213 7.15464 3.18109C8.1729 3.0979 9.49025 3.09614 11.4281 3.09614Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                bg-green
                inline-block
                rounded-sm
                hover:bg-primary
                ease-in-out
                duration-500
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
                  d="M5.90441 3.56824C5.90441 5.07844 4.68268 6.3027 3.17559 6.3027C1.66851 6.3027 0.446777 5.07844 0.446777 3.56824C0.446777 2.05804 1.66851 0.833786 3.17559 0.833786C4.68268 0.833786 5.90441 2.05804 5.90441 3.56824Z"
                  fill="#F8F8F8"
                />
                <path
                  d="M0.819949 8.31264H5.48459V23.4573H0.819949V8.31264Z"
                  fill="#F8F8F8"
                />
                <path
                  d="M12.9947 8.31264H8.33003V23.4573H12.9947C12.9947 23.4573 12.9947 18.6895 12.9947 15.7085C12.9947 13.9193 13.5649 12.1222 15.8401 12.1222C18.4114 12.1222 18.3959 14.4637 18.3839 16.2777C18.3682 18.6489 18.4057 21.0687 18.4057 23.4573H23.0703V15.4643C23.0308 10.3605 21.7895 8.00881 17.706 8.00881C15.2809 8.00881 13.7776 9.18843 12.9947 10.2557V8.31264Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                bg-green
                inline-block
                rounded-sm
                hover:bg-primary
                ease-in-out
                duration-500
              "
            >
              <svg
                width="11"
                height="24"
                viewBox="0 0 11 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1754 11.5204L10.7165 8.0821H7.33138V5.85185C7.33138 4.91098 7.80339 3.99331 9.31959 3.99331H10.8596V1.0661C10.8596 1.0661 9.4626 0.833786 8.1276 0.833786C5.33844 0.833786 3.5171 2.4809 3.5171 5.46156V8.0821H0.417969V11.5204H3.5171V23.4573H7.33138V11.5204H10.1754Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                bg-green
                inline-block
                rounded-sm
                hover:bg-primary
                ease-in-out
                duration-500
              "
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30428 19.7105C4.69045 19.7105 2.25393 18.9274 0.203125 17.5762C1.94432 17.6922 5.01714 17.4143 6.92843 15.5363C4.05323 15.4004 2.75656 13.1289 2.58743 12.1582C2.83173 12.2552 3.99685 12.3717 4.65458 12.0999C1.34715 11.2457 0.839757 8.25579 0.95251 7.34329C1.57265 7.78983 2.62502 7.94515 3.03845 7.90632C-0.0434771 5.63479 1.06526 2.21779 1.61024 1.48003C3.82194 4.63639 7.13659 6.40911 11.2372 6.50772C11.1599 6.15841 11.1191 5.79475 11.1191 5.42123C11.1191 2.74061 13.2225 0.567535 15.8172 0.567535C17.1728 0.567535 18.3944 1.16076 19.2519 2.10966C20.1578 1.89099 21.5212 1.37909 22.1877 0.936416C21.8518 2.17896 20.8058 3.2155 20.1732 3.59968C20.1784 3.61275 20.168 3.58655 20.1732 3.59968C20.7289 3.51309 22.2326 3.2154 22.8266 2.80024C22.5329 3.49828 21.424 4.65891 20.514 5.30869C20.6833 13.0005 14.9702 19.7105 7.30428 19.7105Z"
                  fill="#F8F8F8"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container mx-auto px-5 xl:px-20 2xl:px-28 3xl:px-5 py-5 sm:py-8">
      <div
        class="
          flex flex-col
          sm:flex-row
          items-stretch
          justify-between
          space-x-0
          md:space-x-5
          lg:space-x-10
          text-sm text-center
          sm:text-left
          text-paraColor
          leading-20
          lg:leading-30
        "
      >
        <div class="copyright mb-3 sm:mb-0">
          <p>© Copyright 2021 <router-link class="cursor-pointer hover:text-primary" to="./" tag="button">BidAgree</router-link>. All rights reserved.</p>
        </div>
        <div class="copyright-menus">
          <ul class="text-paraColor">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '../assets/images/logo.png';

export default {
  data() {
    return {
      logo:logo
    }
  },
}
</script>
