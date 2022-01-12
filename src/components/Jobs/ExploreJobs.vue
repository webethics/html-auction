<script>
export default {
  name: "explorejobs",
  components: {},
};
</script>
<template>
     <div class="explore-jobs">
          <div class="explore-jobs-banner bg-cover bg-fixed bg-explore-jobs bg-center py-8 sm:py-16 md:pt-20 md:pb-24 xl:pb-36 2xl:pt-24 3xl:pt-36 3xl:pb-44">
               <div class="container mx-auto">
                    <h2 class="flex items-center justify-center font-bold text-six md:text-five lg:text-four 3xl:text-two text-white leading-90 uppercase">Explore Jobs</h2>
               </div>   
          </div>
          <div class="explore-jobs-form relative py-5 px-4">
               <div class="container mx-auto rounded shadow-xl xl:px-9 p-5 xl:py-11 md:absolute left-0 right-0 bg-white">
                    <form action="" class="flex items-center justify-between space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
                         <div class="field-wrap w-full md:w-1/4 relative">
                              <select name="category" id="category" class="px-4 w-full bg-white rounded-sm border border-blackLight text-sm leading-20 focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary">
                                   <option value="plumber">Plumber</option>
                                   <option value="contractor">Contractor</option>
                                   <option value="realtor">Realtor</option>
                              </select>
                              <svg class="absolute right-4 top-4 xl:top-6" width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1 0.5L7 6.5L13 0.5" stroke="#222831" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                         </div>
                         <div class="field-wrap w-full md:w-1/4 relative">
                              <select name="sub-category" id="sub-category" class="px-4 w-full bg-white rounded-sm border border-blackLight text-sm leading-20 focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary">
                                   <option value="plumber">Plumber</option>
                                   <option value="contractor">Contractor</option>
                                   <option value="realtor">Realtor</option>
                              </select>
                              <svg class="absolute right-4 top-4 xl:top-6" width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1 0.5L7 6.5L13 0.5" stroke="#222831" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                         </div>
                         <div class="field-wrap w-full md:w-1/4 relative">
                              <input type="text" name="location" id="location" class="px-4 w-full bg-white rounded-sm border border-blackLight text-sm leading-20 placeholder-black focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Enter Location" />                              
                              <svg class="absolute right-4 top-2  xl:top-3" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M7 18.5001C5.73694 17.4227 4.56619 16.2416 3.5 14.9691C1.9 13.0581 8.78894e-07 10.2121 8.78894e-07 7.50009C-0.00069302 6.11505 0.409509 4.76094 1.17869 3.60912C1.94788 2.4573 3.04147 1.55955 4.32107 1.02949C5.60067 0.499429 7.00875 0.360882 8.36712 0.631384C9.72548 0.901885 10.9731 1.56928 11.952 2.54909C12.6038 3.19795 13.1204 3.96963 13.4719 4.81947C13.8234 5.6693 14.0029 6.58042 14 7.50009C14 10.2121 12.1 13.0581 10.5 14.9691C9.4338 16.2416 8.26306 17.4227 7 18.5001ZM7 4.50009C6.20435 4.50009 5.44129 4.81616 4.87868 5.37877C4.31607 5.94138 4 6.70444 4 7.50009C4 8.29574 4.31607 9.0588 4.87868 9.62141C5.44129 10.184 6.20435 10.5001 7 10.5001C7.79565 10.5001 8.55871 10.184 9.12132 9.62141C9.68393 9.0588 10 8.29574 10 7.50009C10 6.70444 9.68393 5.94138 9.12132 5.37877C8.55871 4.81616 7.79565 4.50009 7 4.50009Z" fill="#222831"/>
                              </svg>
                         </div>
                         <div class="field-wrap w-full md:w-1/4">
                              <button type="submit" class="py-2 px-6 xl:py-3 3xl:px-10 3xl:py-3 font-semibold text-md 3xl:text-lg bg-green text-white rounded-sm shadow-3xl uppercase hover:bg-primary duration-500 ease-in-out w-full">search now</button>
                         </div>
                    </form>
               </div>   
          </div>

          <div class="explore-jobs-listing pt-5 xl:pt-28 2xl:pt-32 pb-14 xl:pb-20 px-4">
               <div class="container mx-auto flex flex-wrap mb-10 xl:mb-16 flex-col lg:flex-row">
                    <div class="explore-job-listing-left w-full lg:w-3/5 lg:px-4">

                         <div class="explore-job-outer flex flex-wrap rounded shadow-explore-jobs p-6 border border-inputBorder mb-4 flex-col sm:flex-row">
                              <div class="explore-job-image w-full sm:w-2/6">
                                   <img src="../../assets/images/explore-job-4.jpg" alt="" class="w-full" />
                              </div>
                              <div class="explore-job-content w-full sm:w-4/6 sm:pl-5 pt-4 sm:pt-0">
                                   <h2 class="font-bold text-base leading-30">Plumbing</h2>
                                   <p class="text-sm leading-25 text-textColor-400">Ipsum eu cillum elit nulla tempor laboris enim. Anim proident qui veniam sint proident deserunt minim</p>
                                   <div class="explore-job-meta flex flex-wrap items-center justify-between my-1">
                                        <div class="explore-btns">
                                             <button class="bg-textColor-50 text-black border border-blue text-xs leading-20 rounded-xs py-1 px-2 capitalize hover:bg-green hover:text-white hover:border-green  duration-500 ease-in-out shadow-explore-jobs mr-2">Emergency</button>
                                             <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                        </div>
                                        <div class="explore-expiry">
                                              <h2 class="font-bold text-base leading-20">Job Expire</h2>
                                             <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                        </div>
                                   </div>
                                   <h2 class="font-bold text-base leading-30">Address</h2>
                                   <p class="text-sm leading-25 text-textColor-400">400 Broad St, Seattle, WA 98109</p>
                              </div>
                         </div>
                         <div class="explore-job-outer flex flex-wrap rounded shadow-explore-jobs p-6 border border-inputBorder mb-4 flex-col sm:flex-row">
                              <div class="explore-job-image w-full sm:w-2/6">
                                   <img src="../../assets/images/explore-job-3.jpg" alt="" class="w-full" />
                              </div>
                              <div class="explore-job-content w-full sm:w-4/6 sm:pl-5 pt-4 sm:pt-0">
                                   <h2 class="font-bold text-base leading-30">House Keeping</h2>
                                   <p class="text-sm leading-25 text-textColor-400">Ipsum eu cillum elit nulla tempor laboris enim. Anim proident qui veniam sint proident deserunt minim</p>
                                   <div class="explore-job-meta flex flex-wrap items-center justify-between my-1">
                                        <div class="explore-btns">
                                             <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                        </div>
                                        <div class="explore-expiry">
                                              <h2 class="font-bold text-base leading-20">Job Expire</h2>
                                             <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                        </div>
                                   </div>
                                   <h2 class="font-bold text-base leading-30">Address</h2>
                                   <p class="text-sm leading-25 text-textColor-400">400 Broad St, Seattle, WA 98109</p>
                              </div>
                         </div>
                         <div class="explore-job-outer flex flex-wrap rounded shadow-explore-jobs p-6 border border-inputBorder mb-4 flex-col sm:flex-row">
                              <div class="explore-job-image w-full sm:w-2/6">
                                   <img src="../../assets/images/explore-job-2.jpg" alt="" class="w-full" />
                              </div>
                              <div class="explore-job-content w-full sm:w-4/6 sm:pl-5 pt-4 sm:pt-0">
                                   <h2 class="font-bold text-base leading-30">House Keeping</h2>
                                   <p class="text-sm leading-25 text-textColor-400">Ipsum eu cillum elit nulla tempor laboris enim. Anim proident qui veniam sint proident deserunt minim</p>
                                   <div class="explore-job-meta flex flex-wrap items-center justify-between my-1">
                                        <div class="explore-btns">
                                             <button class="bg-textColor-50 text-black border border-blue text-xs leading-20 rounded-xs py-1 px-2 capitalize hover:bg-green hover:text-white hover:border-green  duration-500 ease-in-out shadow-explore-jobs mr-2">Emergency</button>
                                             <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                        </div>
                                        <div class="explore-expiry">
                                              <h2 class="font-bold text-base leading-20">Job Expire</h2>
                                             <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                        </div>
                                   </div>
                                   <h2 class="font-bold text-base leading-30">Address</h2>
                                   <p class="text-sm leading-25 text-textColor-400">400 Broad St, Seattle, WA 98109</p>
                              </div>
                         </div>
                         <div class="explore-job-outer flex flex-wrap rounded shadow-explore-jobs p-6 border border-inputBorder mb-4 lg:mb-0 flex-col sm:flex-row">
                              <div class="explore-job-image w-full sm:w-2/6">
                                   <img src="../../assets/images/explore-job-1.jpg" alt="" class="w-full" />
                              </div>
                              <div class="explore-job-content w-full sm:w-4/6 sm:pl-5 pt-4 sm:pt-0">
                                   <h2 class="font-bold text-base leading-30">House Keeping</h2>
                                   <p class="text-sm leading-25 text-textColor-400">Ipsum eu cillum elit nulla tempor laboris enim. Anim proident qui veniam sint proident deserunt minim</p>
                                   <div class="explore-job-meta flex flex-wrap items-center justify-between my-1">
                                        <div class="explore-btns">
                                             <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                        </div>
                                        <div class="explore-expiry">
                                              <h2 class="font-bold text-base leading-20">Job Expire</h2>
                                             <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                        </div>
                                   </div>
                                   <h2 class="font-bold text-base leading-30">Address</h2>
                                   <p class="text-sm leading-25 text-textColor-400">400 Broad St, Seattle, WA 98109</p>
                              </div>
                         </div>

                    </div>
                    <div class="explore-jobs-listing-map w-full lg:w-2/5 lg:px-4">
                         <div class="explore-jobs-map h-full">
                              <img src="../../assets/images/explore-jobs-map.jpg" alt="" class="w-full h-full">
                         </div>
                    </div>
               </div>
               <div class="container mx-auto px-4 text-center">
                    <button class="py-2 px-6 xl:py-3 3xl:px-10 3xl:py-5 font-semibold text-md 3xl:text-lg bg-primary text-white rounded-sm shadow-3xl uppercase hover:bg-green duration-500 ease-in-out">show more</button>
               </div>
          </div>

     </div>
</template>
