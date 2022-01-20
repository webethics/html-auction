<script>
import aboutPic from '../../assets/images/about-pic.jpg'
import weatherProof from '../../assets/images/weatherproof.png'
import mic from '../../assets/images/mic.png'
import wifi from '../../assets/images/wifi.png'

export default {
    data() {
        return {
            aboutPic:aboutPic,
            weatherProof:weatherProof,
            mic:mic,
            wifi:wifi,
        }
    },
}
</script>

<template>
    <div class="about-wrap">
        <div class="about-banner internal-banner bg-cover bg-fixed bg-explore-jobs bg-center py-8 sm:py-16 md:py-20 2xl:py-24 3xl:py-36 px-5">
            <div class="container mx-auto">
                <h2 class="flex items-center justify-center font-bold leading-25 md:leading-36 lg:leading-50 xl:leading-63 2xl:leading-70 3xl:leading-90 text-six md:text-five lg:text-four 3xl:text-two text-white uppercase">about us</h2>
            </div>
        </div>
        <div class="mx-auto py-8 sm:py-12 3xl:py-24 max-w-screen-lg px-5">
            <p class="text-textColor-500 text-sm md:text-base 3xl:text-xl text-center leading-20 sm:leading-25 3xl:leading-30">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> 
        </div>
        <div class="about-pic">
            <img :src="aboutPic" alt="" class="mx-auto" />
        </div>
        <div class="why-choose relative overflow-hidden">
            <div class="mx-auto py-8 sm:py-12 3xl:py-24 max-w-screen-lg px-5">
                <div class="about-content-wrap text-center mb-4 xl:mb-20">
                    <h3 class="text-lg md:text-xl leading-20 md:leading-30 text-primary capitalize font-bold mb-3">About Us</h3>
                    <h2 class="font-bold text-textColor-500 text-2xl leading-25 md:text-six xl:text-four xl:leading-50 3xl:text-three 3xl:leading-63 capitalize">Why You Choose<br/> Bidagree</h2>
                </div>
                <div class="about-columns flex flex-wrap items-center justify-center py-4 xl:py-9">
                    <div class="about-image w-1/3 sm:w-1/5 xl:2/5 mb-4">
                        <img :src="weatherProof" alt="" class="w-full">
                    </div>
                    <div class="about-col-content w-full sm:w-3/5 sm:pl-8 lg:pl-10 3xl:pl-16 text-center sm:text-left">
                        <h2 class="font-bold text-lg leading-20 md:text-six md:leading-25 xl:text-thirty 3xl:text-four xl:leading-50 text-textColor-500 capitalize mb-2 md:mb-3 3xl:mb-6">Weatherproof</h2>
                        <p class="text-paraColor text-sm md:text-base 3xl:text-lg leading-20">IP67 weatherproof design for use in multiple scenarios</p>
                    </div>
                </div>
                <div class="about-columns flex flex-wrap items-center justify-center flex-row-reverse py-4 xl:py-9">
                    <div class="about-image w-1/3 sm:w-1/5 xl:2/5 mb-4">
                        <img :src="mic" alt="" class="w-full">
                    </div>
                    <div class="about-col-content w-full sm:w-3/5 sm:pr-8 lg:pr-10 3xl:pr-16 text-center sm:text-left">
                        <h2 class="font-bold text-lg leading-20 md:text-six md:leading-25 xl:text-thirty 3xl:text-four xl:leading-50 text-textColor-500 capitalize mb-2 md:mb-3 3xl:mb-6">Built-in Microphone</h2>
                        <p class="text-paraColor text-sm md:text-base 3xl:text-lg leading-20">The high quality microphone picks up sounds clearly while monitoring.</p>
                    </div>
                </div>
                <div class="about-columns flex flex-wrap items-center justify-center py-4 xl:py-9">
                    <div class="about-image w-1/3 sm:w-1/5 xl:2/5 mb-4">
                        <img :src="wifi" alt="" class="w-full">
                    </div>
                    <div class="about-col-content w-full sm:w-3/5 sm:pl-8 lg:pl-10 3xl:pl-16 text-center sm:text-left">
                        <h2 class="font-bold text-lg leading-20 md:text-six md:leading-25 xl:text-thirty 3xl:text-four xl:leading-50 text-textColor-500 capitalize mb-2 md:mb-3 3xl:mb-6">Built-in Wi-Fi Hotspot</h2>
                        <p class="text-paraColor text-sm md:text-base 3xl:text-lg leading-20">The video feed and play recordings even when there is no Internet connection</p>
                    </div>
                </div>

                <div class="flex flex-wrap items-center justify-center space-y-2 sm:space-y-0 sm:space-x-10 flex-col sm:flex-row mt-4 xl:mt-20">
                    <button class="border border-dashed border-primary py-2 px-6 xl:py-3 3xl:px-10 3xl:py-5 font-semibold text-md 3xl:text-lg bg-transparent text-primary rounded-sm md:rounded-md uppercase hover:bg-primary hover:text-white duration-500 ease-in-out min-w-full sm:min-w-0">Create a Post</button>
                    <button class="border border-dashed border-primary py-2 px-6 xl:py-3 3xl:px-10 3xl:py-5 font-semibold text-md 3xl:text-lg bg-transparent text-primary rounded-sm md:rounded-md uppercase hover:bg-primary hover:text-white duration-500 ease-in-out min-w-full sm:min-w-0">Create a Bid</button>
                </div>

            </div>
        </div>
    </div>
</template>