<template>
  <div class="how-it-works">
    <div class="container mx-auto px-5 sm:rounded-md lg:rounded-lg">
      <div
        class="
          flex
          items-center
          justify-center
          flex-wrap flex-col
          text-center
          max-w-3xl
          mx-auto
          pb-8
          sm:pb-12
          lg:pb-20
          3xl:pb-24
        "
      >
        <h2
          class="
            pro-title
            text-six
            md:text-five
            lg:text-four
            xl:text-three
            3xl:text-two
            leading-30
            md:leading-40
            lg:leading-50
            xl:leading-63
            3xl:leading-70
            mb-2
            sm:mb-4
            lg:mb-6
            font-bold
            text-black
          "
        >
          How It Works
        </h2>
        <p class="text-sm sm:text-base text-paraColor leading-20 lg:leading-30">
          No more time wasted spent searching the internet for professionals.
          With BidAgree, the professionals compete to earn your business. Here's
          how to get started
        </p>
      </div>

      <div
        class="
          flex flex-col
          items-center
          justify-between
          space-x-0
          md:flex-row md:space-x-10
          lg:space-x-20
          2xl:space-x-24
          3xl:space-x-48
        "
      >
        <div
          class="
            w-full
            md:w-1/2
            flex flex-col
            mb-5
            md:mb-0
            relative
            items-center
          "
        >
          <h2
            class="
              text-three
              sm:text-two
              xl:text-one
              3xl:text-counter
              text-green
              font-bold
              absolute
              left-0
              flex
              items-center
              work-counter
            "
          >
            01
          </h2>
          <img
            :src="choose"
            alt=""
            class="how-images w-full"
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col">
          <h2
            class="
              text-lg
              lg:text-xl
              3xl:text-six
              work-title
              font-semibold
              text-lightBlack text-center
              md:text-left md:pt-16
              lg:pt-24             
              leading-25
              3xl:leading-36 
            "
          >
            Choose your category
          </h2>
        </div>
      </div>
      <!-- Above done -->
      <div
        class="
          flex flex-col-reverse
          items-center
          justify-between
          space-x-0
          md:flex-row md:flex-row md:space-x-10
          lg:space-x-20
          2xl:space-x-24
          3xl:space-x-48
        "
      >
        <div class="w-full md:w-1/2 flex flex-col">
          <h2
            class="
              text-lg
              lg:text-xl
              3xl:text-six
              work-title
              font-semibold
              text-lightBlack text-center
              md:text-left md:pt-16
              lg:pt-24
              leading-25
              3xl:leading-36
            "
          >
            Set your price and BidAgree on the leads you want
          </h2>
        </div>
        <div
          class="
            w-full
            md:w-1/2
            flex flex-col
            mb-5
            md:mb-0
            relative
            items-center
          "
        >
          <h2
            class="
              text-three
              sm:text-two
              xl:text-one
              3xl:text-counter
              text-green
              font-bold
              absolute
              flex
              items-center
              work-counter
            "
          >
            02
          </h2>
          <img
            :src="lead"
            alt=""
            class="how-images w-full"
          />
        </div>
      </div>

      <div
        class="
          flex flex-col
          items-center
          justify-between
          space-x-0
          md:flex-row md:space-x-10
          lg:space-x-20
          2xl:space-x-24
          3xl:space-x-48
        "
      >
        <div
          class="
            w-full
            md:w-1/2
            flex flex-col
            mb-5
            md:mb-0
            relative
            items-center
          "
        >
          <h2
            class="
              text-three
              sm:text-two
              xl:text-one
              3xl:text-counter
              text-green
              font-bold
              absolute
              flex
              items-center
              work-counter
            "
          >
            03
          </h2>
          <img
            :src="announcement"
            alt=""
            class="how-images w-full"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <h2
            class="
              text-lg
              lg:text-xl
              3xl:text-six
              work-title
              font-semibold
              text-lightBlack text-center
              md:text-left md:pt-16
              lg:pt-24
              leading-25
              3xl:leading-36
            "
          >
           Get promoted and make your pitch
          </h2>
        </div>
      </div>

      <div
        class="
          flex flex-col-reverse
          md:flex-row
          items-center
          justify-between
          space-x-0
          md:flex-row md:space-x-10
          lg:space-x-20
          2xl:space-x-24
          3xl:space-x-48
        "
      >
        <div class="w-full md:w-1/2 flex flex-col">
          <h2
            class="
              text-lg
              lg:text-xl
              3xl:text-six
              work-title
              font-semibold
              text-lightBlack text-center
              md:text-left md:pt-16
              lg:pt-24
              leading-25
              3xl:leading-36
            "
          >
           Only pay for leads when when your offer gets accepted
          </h2>
        </div>
        <div
          class="
            w-full
            md:w-1/2
            flex flex-col
            mb-5
            md:mb-0
            relative
            items-center
          "
        >
          <h2
            class="
              text-three
              sm:text-two
              xl:text-one
              3xl:text-counter
              text-green
              font-bold
              absolute
              flex
              items-center
              work-counter
            "
          >
            04
          </h2>
          <img
            :src="goldDollar"
            alt=""
            class="how-images w-full"
          />
        </div>
      </div>

 <div
        class="
          flex flex-col
          items-center
          justify-between
          space-x-0
          md:flex-row md:space-x-10
          lg:space-x-20
          2xl:space-x-24
          3xl:space-x-48
        "
      >
        <div
          class="
            w-full
            md:w-1/2
            flex flex-col
            mb-5
            md:mb-0
            relative
            items-center
          "
        >
          <h2
            class="
              text-three
              sm:text-two
              xl:text-one
              2xl:text-counter
              text-green
              font-bold
              absolute
              flex
              items-center
              work-counter
            "
          >
            05
          </h2>
          <img
            :src="locker"
            alt=""
            class="how-images w-full"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <h2
            class="
              text-lg
              lg:text-xl
              3xl:text-six
              work-title
              font-semibold
              text-lightBlack text-center
              md:text-left md:pt-16
              lg:pt-24
              leading-25
              3xl:leading-36
            "
          >
            If you are unsatisfied, you can withdraw your offer at any time and receive a refund
          </h2>
        </div>
      </div>


      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          justify-between
          space-x-0
          sm:space-x-28
          flex-col-reverse
          sm:flex-row
          pt-8
          sm:pt-12
          lg:pt-20
          3xl:pt-24
        "
      >
        <div class="w-full text-center">
          <h2
            class="
              text-sm
              xl:text-base
              3xl:text-lg
              work-title
              font-semibold
              text-lightBlack
              leading-20
              lg:leading-30
            "
          >
            *A BidAgree is the amount the professional is willing to pay you to
            acquire you as a customer
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import choose from '../../assets/images/choose.svg'
import lead from '../../assets/images/lead.svg'
import announcement from '../../assets/images/announcement.svg'
import goldDollar from '../../assets/images/gold-dollar.svg'
import locker from '../../assets/images/locker.svg'

export default {
  data() {
    return {
      choose:choose,
      lead:lead,
      announcement:announcement,
      goldDollar:goldDollar,
      locker:locker,
    }
  },
}
</script>
