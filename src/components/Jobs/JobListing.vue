<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import more from "../../assets/images/more.svg"
export default {
  name: "jobListing",
  components: { VueTabs, VTab },
  data() {
       return {
          more:more,
       }
  }
};
</script>
<template>
     <div class="job-listing mx-auto">
          <div class="container mx-auto px-5 lg:px-20 2xl:px-28 3xl:px-5">
               <h2 class="flex items-center justify-center font-bold text-six md:text-five lg:text-four 3xl:text-two mt-12 text-lightBlack leading-90">Job Listing</h2>
               <div class="wrap-inner  bg-white my-6 md:my-12">
                    <form action="" class="relative">
                         <router-link class="block mx-auto py-2 px-6 xl:py-3 3xl:px-24 3xl:py-3 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out sm:absolute right-0 mb-2 sm:mb-0" to="/create-job" tag="button">Create Job</router-link>  
                         <vue-tabs>
                              <v-tab title="All Jobs">
                                  <div class="jobs-wrapper bg-tableData mt-6 rounded-sm">
                                       <div class="jobs-search-wrap p-4 xl:p-8">
                                            <div class="relative">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="absolute left-5 top-2 xl:top-3 3xl:top-5">
                                                       <path d="M13.7261 14.8822C12.0563 16.1799 9.95492 16.7922 7.84978 16.5942C5.74465 16.3963 3.79407 15.403 2.39522 13.8166C0.996367 12.2303 0.254425 10.1701 0.320465 8.05565C0.386504 5.94118 1.25556 3.9314 2.75068 2.43552C4.24579 0.939633 6.25455 0.0701341 8.36793 0.00406071C10.4813 -0.0620127 12.5404 0.680308 14.126 2.07987C15.7115 3.47944 16.7043 5.43102 16.9021 7.53723C17.1 9.64345 16.4881 11.7459 15.1909 13.4166L20.01 18.2201C20.418 18.6267 20.4186 19.2872 20.0114 19.6946C19.6042 20.1021 18.9437 20.1017 18.5368 19.6939L13.7365 14.8822H13.7261ZM8.63556 14.5495C9.45414 14.5495 10.2647 14.3882 11.021 14.0748C11.7772 13.7614 12.4644 13.302 13.0432 12.7229C13.622 12.1438 14.0812 11.4563 14.3944 10.6996C14.7077 9.94298 14.8689 9.13201 14.8689 8.31302C14.8689 7.49403 14.7077 6.68306 14.3944 5.92641C14.0812 5.16976 13.622 4.48225 13.0432 3.90314C12.4644 3.32402 11.7772 2.86465 11.021 2.55123C10.2647 2.23782 9.45414 2.07651 8.63556 2.07651C6.98238 2.07651 5.39691 2.73356 4.22794 3.90314C3.05896 5.07271 2.40224 6.659 2.40224 8.31302C2.40224 9.96705 3.05896 11.5533 4.22794 12.7229C5.39691 13.8925 6.98238 14.5495 8.63556 14.5495Z" fill="#6F809E"/>
                                                  </svg>
                                                  <input type="search" name="search-jobs" class="max-w-full pl-12 pr-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Search" />
                                            </div>
                                       </div>
                                       <div class="jobs-data-list">
                                            <div class="jobs-data-head grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-2 px-4 xl:px-8 hidden sm:grid sm:items-center">
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-id hidden lg:inline-block">job id</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-date">job date</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-category hidden md:inline-block">category</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-title">job title</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-description">description</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">candidates</div>
                                                 <div class="text-xs leading-14 py-6 xl:pl-16 uppercase font-semibold job-status text-center xl:text-left hidden md:inline-block">status</div>
                                                 <div class="text-xs leading-14 py-6 font-semibold uppercase text-center job-action">action</div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-white sm:items-center">
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">                                                       
                                                      10
                                                  </div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                       <span class="block">12-jan-2021</span>
                                                       <span class="mobile-job-id inline-block lg:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                       <span class="block">(4)</span>
                                                 </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block">
                                                      <span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span>
                                                  </div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-tableData sm:items-center">
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">10</div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                      <span class="block">12-jan-2021</span>
                                                      <span class="mobile-job-id inline-block lg:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                     <span class="block">(4)</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block"><span class="status-label bg-jobCompleted text-white uppercase inline-block text-center rounded-md text-small leading-20">completed</span></div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                       </div>
                                  </div>
                              </v-tab>

                              <v-tab title="Open Jobs">
                                  <div class="jobs-wrapper bg-tableData mt-6 rounded-sm">
                                       <div class="jobs-search-wrap p-4 xl:p-8">
                                            <div class="relative">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="absolute left-5 top-2 xl:top-3 3xl:top-5">
                                                       <path d="M13.7261 14.8822C12.0563 16.1799 9.95492 16.7922 7.84978 16.5942C5.74465 16.3963 3.79407 15.403 2.39522 13.8166C0.996367 12.2303 0.254425 10.1701 0.320465 8.05565C0.386504 5.94118 1.25556 3.9314 2.75068 2.43552C4.24579 0.939633 6.25455 0.0701341 8.36793 0.00406071C10.4813 -0.0620127 12.5404 0.680308 14.126 2.07987C15.7115 3.47944 16.7043 5.43102 16.9021 7.53723C17.1 9.64345 16.4881 11.7459 15.1909 13.4166L20.01 18.2201C20.418 18.6267 20.4186 19.2872 20.0114 19.6946C19.6042 20.1021 18.9437 20.1017 18.5368 19.6939L13.7365 14.8822H13.7261ZM8.63556 14.5495C9.45414 14.5495 10.2647 14.3882 11.021 14.0748C11.7772 13.7614 12.4644 13.302 13.0432 12.7229C13.622 12.1438 14.0812 11.4563 14.3944 10.6996C14.7077 9.94298 14.8689 9.13201 14.8689 8.31302C14.8689 7.49403 14.7077 6.68306 14.3944 5.92641C14.0812 5.16976 13.622 4.48225 13.0432 3.90314C12.4644 3.32402 11.7772 2.86465 11.021 2.55123C10.2647 2.23782 9.45414 2.07651 8.63556 2.07651C6.98238 2.07651 5.39691 2.73356 4.22794 3.90314C3.05896 5.07271 2.40224 6.659 2.40224 8.31302C2.40224 9.96705 3.05896 11.5533 4.22794 12.7229C5.39691 13.8925 6.98238 14.5495 8.63556 14.5495Z" fill="#6F809E"/>
                                                  </svg>
                                                  <input type="search" name="search-jobs" class="max-w-full pl-12 pr-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Search" />
                                            </div>
                                       </div>
                                       <div class="jobs-data-list">
                                            <div class="jobs-data-head grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-2 px-4 xl:px-8 hidden sm:grid sm:items-center">
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-id hidden lg:inline-block">job id</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-date">job date</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-category hidden md:inline-block">category</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-title">job title</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-description">description</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">candidates</div>
                                                 <div class="text-xs leading-14 py-6 xl:pl-16 uppercase font-semibold job-status text-center xl:text-left hidden md:inline-block">status</div>
                                                 <div class="text-xs leading-14 py-6 font-semibold uppercase text-center job-action">action</div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-white sm:items-center">
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">                                                       
                                                      10
                                                  </div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                       <span class="block">12-jan-2021</span>
                                                       <span class="mobile-job-id inline-block lg:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                       <span class="block">(4)</span>
                                                 </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block">
                                                      <span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span>
                                                  </div>
                                                 <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-tableData sm:items-center">
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">10</div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                      <span class="block">12-jan-2021</span>
                                                      <span class="mobile-job-id inline-block lg:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                     <span class="block">(4)</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                       </div>
                                  </div>
                              </v-tab>

                              <v-tab title="Draft Jobs">
                                  <div class="jobs-wrapper bg-tableData mt-6 rounded-sm">
                                       <div class="jobs-search-wrap p-4 xl:p-8">
                                            <div class="relative">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="absolute left-5 top-2 xl:top-3 3xl:top-5">
                                                       <path d="M13.7261 14.8822C12.0563 16.1799 9.95492 16.7922 7.84978 16.5942C5.74465 16.3963 3.79407 15.403 2.39522 13.8166C0.996367 12.2303 0.254425 10.1701 0.320465 8.05565C0.386504 5.94118 1.25556 3.9314 2.75068 2.43552C4.24579 0.939633 6.25455 0.0701341 8.36793 0.00406071C10.4813 -0.0620127 12.5404 0.680308 14.126 2.07987C15.7115 3.47944 16.7043 5.43102 16.9021 7.53723C17.1 9.64345 16.4881 11.7459 15.1909 13.4166L20.01 18.2201C20.418 18.6267 20.4186 19.2872 20.0114 19.6946C19.6042 20.1021 18.9437 20.1017 18.5368 19.6939L13.7365 14.8822H13.7261ZM8.63556 14.5495C9.45414 14.5495 10.2647 14.3882 11.021 14.0748C11.7772 13.7614 12.4644 13.302 13.0432 12.7229C13.622 12.1438 14.0812 11.4563 14.3944 10.6996C14.7077 9.94298 14.8689 9.13201 14.8689 8.31302C14.8689 7.49403 14.7077 6.68306 14.3944 5.92641C14.0812 5.16976 13.622 4.48225 13.0432 3.90314C12.4644 3.32402 11.7772 2.86465 11.021 2.55123C10.2647 2.23782 9.45414 2.07651 8.63556 2.07651C6.98238 2.07651 5.39691 2.73356 4.22794 3.90314C3.05896 5.07271 2.40224 6.659 2.40224 8.31302C2.40224 9.96705 3.05896 11.5533 4.22794 12.7229C5.39691 13.8925 6.98238 14.5495 8.63556 14.5495Z" fill="#6F809E"/>
                                                  </svg>
                                                  <input type="search" name="search-jobs" class="max-w-full pl-12 pr-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Search" />
                                            </div>
                                       </div>
                                       <div class="jobs-data-list">
                                            <div class="jobs-data-head grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-2 px-4 xl:px-8 hidden sm:grid sm:items-center">
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-id hidden lg:inline-block">job id</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-date">job date</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-category hidden md:inline-block">category</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-title">job title</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-description">description</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">candidates</div>
                                                 <div class="text-xs leading-14 py-6 xl:pl-16 uppercase font-semibold job-status text-center xl:text-left hidden md:inline-block">status</div>
                                                 <div class="text-xs leading-14 py-6 font-semibold uppercase text-center job-action">action</div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-white sm:items-center">
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">                                                       
                                                      10
                                                  </div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                       <span class="block">12-jan-2021</span>
                                                       <span class="mobile-job-id inline-block lg:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                       <span class="block">(4)</span>
                                                 </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block">
                                                      <span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span>
                                                  </div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-tableData sm:items-center">
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">10</div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                      <span class="block">12-jan-2021</span>
                                                      <span class="mobile-job-id inline-block lg:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                     <span class="block">(4)</span>
                                                  </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block"><span class="status-label bg-jobCompleted text-white uppercase inline-block text-center rounded-md text-small leading-20">completed</span></div>
                                                 <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                       </div>
                                  </div>
                              </v-tab>

                              <v-tab title="Completed Jobs">
                                   <div class="jobs-wrapper bg-tableData mt-6 rounded-sm">
                                       <div class="jobs-search-wrap p-4 xl:p-8">
                                            <div class="relative">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" class="absolute left-5 top-2 xl:top-3 3xl:top-5">
                                                       <path d="M13.7261 14.8822C12.0563 16.1799 9.95492 16.7922 7.84978 16.5942C5.74465 16.3963 3.79407 15.403 2.39522 13.8166C0.996367 12.2303 0.254425 10.1701 0.320465 8.05565C0.386504 5.94118 1.25556 3.9314 2.75068 2.43552C4.24579 0.939633 6.25455 0.0701341 8.36793 0.00406071C10.4813 -0.0620127 12.5404 0.680308 14.126 2.07987C15.7115 3.47944 16.7043 5.43102 16.9021 7.53723C17.1 9.64345 16.4881 11.7459 15.1909 13.4166L20.01 18.2201C20.418 18.6267 20.4186 19.2872 20.0114 19.6946C19.6042 20.1021 18.9437 20.1017 18.5368 19.6939L13.7365 14.8822H13.7261ZM8.63556 14.5495C9.45414 14.5495 10.2647 14.3882 11.021 14.0748C11.7772 13.7614 12.4644 13.302 13.0432 12.7229C13.622 12.1438 14.0812 11.4563 14.3944 10.6996C14.7077 9.94298 14.8689 9.13201 14.8689 8.31302C14.8689 7.49403 14.7077 6.68306 14.3944 5.92641C14.0812 5.16976 13.622 4.48225 13.0432 3.90314C12.4644 3.32402 11.7772 2.86465 11.021 2.55123C10.2647 2.23782 9.45414 2.07651 8.63556 2.07651C6.98238 2.07651 5.39691 2.73356 4.22794 3.90314C3.05896 5.07271 2.40224 6.659 2.40224 8.31302C2.40224 9.96705 3.05896 11.5533 4.22794 12.7229C5.39691 13.8925 6.98238 14.5495 8.63556 14.5495Z" fill="#6F809E"/>
                                                  </svg>
                                                  <input type="search" name="search-jobs" class="max-w-full pl-12 pr-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Search" />
                                            </div>
                                       </div>
                                       <div class="jobs-data-list">
                                            <div class="jobs-data-head grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-2 px-4 xl:px-8 hidden sm:grid sm:items-center">
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-id hidden lg:inline-block">job id</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-date">job date</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-category hidden md:inline-block">category</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-title">job title</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold job-description">description</div>
                                                 <div class="text-xs leading-14 py-6 uppercase font-semibold xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">candidates</div>
                                                 <div class="text-xs leading-14 py-6 xl:pl-16 uppercase font-semibold job-status text-center xl:text-left hidden md:inline-block">status</div>
                                                 <div class="text-xs leading-14 py-6 font-semibold uppercase text-center job-action">action</div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-white sm:items-center">
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">                                                       
                                                      10
                                                  </div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                       <span class="block">12-jan-2021</span>
                                                       <span class="mobile-job-id inline-block lg:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-tableData p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                       <span class="block">(4)</span>
                                                 </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block">
                                                      <span class="status-label bg-jobCompleted text-white uppercase inline-block text-center rounded-md text-small leading-20">completed</span>
                                                  </div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                            <div class="jobs-data grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 sm:gap-2 p-4 sm:py-0 xl:px-8 bg-tableData sm:items-center">
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-id hidden lg:inline-block">10</div>
                                                  <div class="text-xs leading-14 uppercase py-2 sm:py-6 job-date">
                                                      <span class="block">12-jan-2021</span>
                                                      <span class="mobile-job-id inline-block lg:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">JOB ID: 10</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-category hidden md:inline-block">house</div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 job-title">
                                                      <span class="block">developer</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small mr-1 sm:mr-0">candidates: 4</span>
                                                      <span class="inline-block md:hidden bg-white p-1 rounded-xs mt-1 font-semibold uppercase text-small">category: house</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 job-description">Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo Lorem ipsum dolo </div>
                                                  <div class="text-xs leading-14 py-2 sm:py-6 text-candidate xl:pl-16 job-candidates text-center xl:text-left hidden md:inline-block">
                                                     <span class="block">(4)</span>
                                                  </div>
                                                 <div class="text-xs leading-14 py-2 sm:py-6 xl:pl-16 job-status text-center xl:text-left hidden md:inline-block"><span class="status-label bg-jobCompleted text-white uppercase inline-block text-center rounded-md text-small leading-20">completed</span></div>
                                                  <div class="text-xs leading-14 job-action flex sm:block flex-wrap items-center justify-between flex-row-reverse text-center">
                                                       <div class="relative it-has-dropdown inline-block py-2 sm:py-4  cursor-pointer">
                                                            <img :src="more" class="sm:mx-auto cursor-pointer dropdown-with-arrow" />
                                                            <span class="block lg:inline-block relative lg:absolute bg-white text-sm leading-20 mx-auto shadow-dropdown center-dropdown rounded-sm">
                                                                      <ul class="sub-menu">
                                                                           <li class="mb-1"><a href="#" class="hover:text-primary block">Edit</a></li>
                                                                           <li><a href="#" class="hover:text-primary block">Delete</a></li>
                                                                      </ul>    
                                                                 </span>
                                                            </div>
                                                      <span class="job-status sm:mt-4 block md:hidden text-center"><span class="status-label bg-jobActive text-white uppercase inline-block text-center rounded-md text-small leading-20">active</span></span>
                                                  </div>
                                            </div>
                                       </div>
                                  </div>
                              </v-tab>
                         </vue-tabs>
                    </form>
               </div>
          </div>   
     </div>
</template>