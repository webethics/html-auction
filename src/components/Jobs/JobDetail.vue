<script>
import exploreJobFour from '../../assets/images/explore-job-4.jpg';
import jobDetailsMap from '../../assets/images/job-deatils-map.jpg';
import clientProfile from '../../assets/images/client-profile.png';
export default {
  name: "JobDetail",
  components: {},
  data() {
    return {
      exploreJobFour:exploreJobFour,
      jobDetailsMap:jobDetailsMap,
      clientProfile:clientProfile
    }
  }
};
</script>
<template>
      <div class="job-details mx-auto">
          <div class="container mx-auto px-5 xl:px-20 2xl:px-28 3xl:px-5">
            <div class="job-details-header-wrap flex flex-wrap flex-col sm:flex-row justify-between items-center mt-12">
              <router-link to="" tag="button" class="text-green font-semibold text-lg sm:text-xl md:text-2xl lg:text-six hover:text-primary job-details-back-btn mb-4 sm:mb-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 0.083374C5.41867 0.083374 0.083252 5.41879 0.083252 12C0.083252 18.5813 5.41867 23.9167 11.9999 23.9167C18.5812 23.9167 23.9166 18.5813 23.9166 12C23.9166 5.41879 18.5812 0.083374 11.9999 0.083374ZM14.3908 8.43262C14.5882 8.2283 14.6974 7.95465 14.6949 7.67061C14.6924 7.38656 14.5785 7.11485 14.3776 6.91399C14.1768 6.71313 13.9051 6.59919 13.621 6.59673C13.337 6.59426 13.0633 6.70345 12.859 6.90079L8.52567 11.2341C8.32257 11.4373 8.20848 11.7128 8.20848 12C8.20848 12.2873 8.32257 12.5628 8.52567 12.766L12.859 17.0993C13.0633 17.2966 13.337 17.4058 13.621 17.4034C13.9051 17.4009 14.1768 17.287 14.3776 17.0861C14.5785 16.8852 14.6924 16.6135 14.6949 16.3295C14.6974 16.0454 14.5882 15.7718 14.3908 15.5675L10.8234 12L14.3908 8.43262Z" fill="#1DA599"/>
                </svg>Back
              </router-link>
              <h2 class="flex items-center justify-center font-bold leading-25 md:leading-36 lg:leading-50 xl:leading-63 2xl:leading-70 3xl:leading-90 text-six md:text-five lg:text-four 3xl:text-two text-lightBlack">Job Details</h2>
              <router-link to="" tag="button" class="text-green font-semibold text-lg sm:text-xl md:text-2xl lg:text-six opacity-0 hidden sm:inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 0.083374C5.41867 0.083374 0.083252 5.41879 0.083252 12C0.083252 18.5813 5.41867 23.9167 11.9999 23.9167C18.5812 23.9167 23.9166 18.5813 23.9166 12C23.9166 5.41879 18.5812 0.083374 11.9999 0.083374ZM14.3908 8.43262C14.5882 8.2283 14.6974 7.95465 14.6949 7.67061C14.6924 7.38656 14.5785 7.11485 14.3776 6.91399C14.1768 6.71313 13.9051 6.59919 13.621 6.59673C13.337 6.59426 13.0633 6.70345 12.859 6.90079L8.52567 11.2341C8.32257 11.4373 8.20848 11.7128 8.20848 12C8.20848 12.2873 8.32257 12.5628 8.52567 12.766L12.859 17.0993C13.0633 17.2966 13.337 17.4058 13.621 17.4034C13.9051 17.4009 14.1768 17.287 14.3776 17.0861C14.5785 16.8852 14.6924 16.6135 14.6949 16.3295C14.6974 16.0454 14.5882 15.7718 14.3908 15.5675L10.8234 12L14.3908 8.43262Z" fill="#1DA599"/>
                </svg>Forward
              </router-link>
            </div>
            
            <div class="wrap-inner bg-white my-6 md:my-12">
              <div class="container mx-auto flex flex-wrap flex-col md:flex-row">

                <div class="job-details-left w-full md:w-3/5 mb-4 md:mb-0">
                    <div class="explore-job-outer flex flex-wrap flex-col">
                      <div class="explore-job-image w-full">
                            <img :src="exploreJobFour" alt="" class="w-full" />
                      </div>
                      <div class="explore-job-content pt-4 text-center sm:text-left">
                            <h2 class="font-bold text-lg md:text-xl leading-30">Plumbing</h2>
                            <p class="text-sm lg:text-base leading-25 text-textColor-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pellentesque cras in aenean nullam. Venenatis aliquet at eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.  Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.</p>
                            <div class="explore-job-meta flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-between my-4 space-y-4 sm:sapce-y-0">
                                <div class="explore-btns">
                                      <button class="bg-textColor-50 text-black border border-blue text-xs leading-20 rounded-xs py-1 px-2 capitalize hover:bg-green hover:text-white hover:border-green  duration-500 ease-in-out shadow-explore-jobs mr-2">Emergency</button>
                                      <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                </div>
                                <div class="explore-expiry">
                                      <h2 class="font-bold text-sm lg:text-base leading-20">Job Expire</h2>
                                      <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                </div>
                            </div>
                            <h2 class="font-bold text-sm lg:text-base  leading-30">Address</h2>
                            <p class="text-sm lg:text-base leading-25 text-textColor-400">400 Broad St, Seattle, WA 98109</p>
                      </div>
                  </div>
                </div>

                <div class="job-details-right w-full md:w-2/5 md:pl-4 lg:pl-14">

                  <router-link class="w-full py-2 px-6 xl:py-4 3xl:px-24 font-semibold text-md 2xl:text-lg bg-green text-white rounded-sm shadow-sm hover:bg-primary duration-500 ease-in-out mb-4 lg:mb-9 uppercase" to="/create-job" tag="button">
                    Apply now 
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block" style="margin-top:-10px;">
                      <path d="M0 20H4V8H0V20ZM22 9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9Z" fill="white"/>
                    </svg>
                  </router-link>                  
                  <div class="job-details-map mb-4 lg:mb-9">
                    <img :src="jobDetailsMap" alt="" />
                  </div>

                  <div class="job-details-client-profile bg-black-50 rounded-xs p-4 lg:p-6">
                    <h2 class="text-lg font-bold capitalize leading-30 mb-4">client profile</h2>
                    <div class="client-profile-wrap flex flex-wrap flex-row md:flex-col lg:flex-row">
                      <div class="client-profile-pic w-1/5 md:w-full lg:w-1/5 mb-3 xl:mb-0 pr-3 md:pr-0">
                        <img :src="clientProfile" alt="" class="w-full">
                      </div>
                      <div class="client-profile-content w-4/5 md:w-full lg:w-4/5 md:pl-0 lg:pl-4">
                        <h2 class="text-base leading-20 font-semibold capitalize">David Yates</h2>
                        <p class="text-paraColor text-sm leading-20">consectetur adipiscing elit</p>
                        <div class="client-jobs-info flex flex-wrap sm:flex-row md:items-center text-black text-sm leading-30 capitalize space-x-2 xl:space-x-4">
                          <div class="job-posted">Job posted <span class="text-white bg-green rounded-xs inline-block text-center leading-20">2</span></div>
                          <div class="job-open">Open Jobs <span class="text-white bg-green rounded-xs inline-block text-center leading-20">1</span></div>
                        </div>
                        <div class="client-rating mt-2">
                          <img src="../../assets/images/client-rating.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="container mx-auto flex flex-wrap mt-4 md:mt-8 lg:mt-12">
                  <div class="job-history w-full rounded-sm">
                      <div class="job-history-head px-4 md:px-8 py-4 md:py-6">
                          <h2 class="font-bold text-lg lg:text-2xl xl:text-six text-lightBlack leading-30">Client  History</h2>
                      </div>
                      <div class="job-history-list">
                          <div class="list px-4 md:px-8 py-4 md:py-6">
                            <div class="job-title-wrap flex flex-wrap md:items-center justify-between mb-2 flex-col md:flex-row">
                                <a href="#" class="font-semibold text-base md:text-lg leading-30">House Contractor</a>
                                <span class="date text-sm text-lightBlack">02-Dec-2021 - 12-Dec-2021</span>
                            </div>
                            <p class="mb-2 text-sm text-lightBlack"><strong class="font-semibold">To Client</strong> <img class="inline-block align-middle mx-1" src="../../assets/images/star.png" alt="" /> Loved working with this contractor</p>
                            <p class="mb-2 text-sm italic text-paraColor">Job Completed</p>
                            <p class="text-sm text-lightBlack"><strong class="font-semibold">To Freelancer:</strong> <span class="text-green"> David Yates</span> <img class="inline-block align-middle mx-1" src="../../assets/images/star.png" alt="" /> Amazing Experience working with Proffessional .
                            </p>
                          </div>
                          <div class="list px-4 md:px-8 py-4 md:py-6">
                            <div class="job-title-wrap flex flex-wrap md:items-center justify-between mb-2 flex-col md:flex-row">
                                <a href="#" class="font-semibold text-base md:text-lg leading-30">Factory Plumber</a>
                                <span class="date text-sm text-lightBlack">10-Dec-2021 - Till Date</span>
                            </div>
                            <p class="mb-2 text-sm italic text-paraColor">Currently open.</p>
                          </div>
                          <div class="list px-4 md:px-8 py-4 md:py-6">
                            <div class="job-title-wrap flex flex-wrap md:items-center justify-between mb-2 flex-col md:flex-row">
                                <a href="#" class="font-semibold text-base md:text-lg leading-30">Web Developer</a>
                            </div>
                            <p class="mb-2 text-sm italic text-paraColor">Job in Progress.</p>
                          </div>
                      </div>
                </div>
              </div>

            </div>
          </div>
          
     </div>
</template>
