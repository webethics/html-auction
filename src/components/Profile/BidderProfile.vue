<script>
export default {
  name: "BidderProfile",
  components: {},
};
</script>
<template>
      <div class="job-details mx-auto px-5">
          <div class="container mx-auto">
            
            <div class="wrap-inner bg-white my-6 md:my-12">
              <div class="container mx-auto flex flex-wrap flex-col md:flex-row">

                <div class="job-details-left w-full md:w-3/5 mb-4 md:mb-0">
                    <div class="explore-job-outer flex flex-wrap flex-col">
                      <div class="explore-job-image w-full">
                            <img src="../../assets/images/explore-job-4.jpg" alt="" class="w-full" />
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
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block">
                      <path d="M0 20H4V8H0V20ZM22 9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9Z" fill="white"/>
                    </svg>
                  </router-link>                  
                  <div class="job-details-map mb-4 lg:mb-9">
                    <img src="../../assets/images/job-deatils-map.jpg" alt="" />
                  </div>

                  <div class="job-details-client-profile bg-black-50 rounded-xs p-4 lg:p-6">
                    <h2 class="text-lg font-bold capitalize leading-30 mb-4">client profile</h2>
                    <div class="client-profile-wrap flex flex-wrap flex-row md:flex-col lg:flex-row">
                      <div class="client-profile-pic w-1/5 md:w-full lg:w-1/5 mb-3 xl:mb-0">
                        <img src="../../assets/images/client-profile.png" alt="">
                      </div>
                      <div class="client-profile-content w-4/5 md:w-full lg:w-4/5 md:pl-0 lg:pl-4">
                        <h2 class="text-base leading-20 font-semibold capitalize">David Yates</h2>
                        <p class="text-paraColor text-sm leading-20">consectetur adipiscing elit</p>
                        <div class="client-jobs-info flex flex-wrap sm:flex-row md:items-center text-black text-sm leading-30 capitalize space-x-2 lg:space-x-4">
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

              <div class="container mx-auto flex flex-wrap mt-12">
                <div class="client-proposal border border-inputBorder rounded-xs px-5 sm:px-7 py-5 sm:py-10">
                  <h2 class="proposal-title text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-six leading-30 border-b border-inputBorder mb-6 sm:mb-11 pb-5 text-center sm:text-left">Proposal</h2>
                  <div class="client-proposal-wrap flex flex-wrap flex-col sm:flex-row">
                    <div class="client-proposal-left w-full sm:w-1/6">
                      <div class="client-proposal-img-wrap mb-4 sm:mb-0">
                        <img src="../../assets/images/client-proposal.jpg" alt="" />
                      </div>
                    </div>
                    <div class="client-proposal-right w-full sm:w-5/6 sm:pl-5 text-center sm:text-left">
                      <div class="client-proposal-meta flex flex-wrap flex-col sm:flex-row sm:justify-between">

                        <div class="client-proposal-meta-info">
                          <h2 class="font-bold text-base leading-30 capitalize">Sandeep Luna</h2>
                          <p class="text-sm leading-25 text-paraColor">Expert Property Retalor</p>
                          <div class="completed-jobs mb-2">
                            <div class="client-jobs-info flex flex-wrap items-center text-black text-sm leading-30 capitalize sm:space-x-4 flex-col sm:flex-row">
                              <div class="job-posted">Completed Jobs <span class="text-white bg-green rounded-xs inline-block text-center leading-20">6</span></div>
                              <img src="../../assets/images/client-rating.png" alt="">
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <h2 class="font-bold text-sm leading-30 capitalize">Cover Letter</h2>
                      <p class="text-xs leading-25 text-paraColor mb-5">Fames dui faucibus massa hendrerit morbi amet euismod odio adipiscing. Ornare senectus placerat fermentum et magna tortor quam venenatis. Semper egestas lorem venenatis aliquet faucibus vitae nibh commodo cursus. Venenatis id egestas aliquet morbi sapien lorem. Morbi lorem convallis dignissim cursus ac pulvinar in ac leo. Odio ut donec sociis ut eget pellentesque nibh aliquam. Non felis, orci fermentum ornare. Massa morbi ultrices amet, viverra id dapibus amet ac. Pellentesque arcu vulputate ultrices ut nisl. In vel id tortor tortor nec montes, sem pellentesque ac. A nunc, augue massa sit vitae etiam ut neque.</p>
                      <p class="text-xs leading-25 text-paraColor mb-5">Ultrices porttitor adipiscing risus viverra senectus id cum.Egestas justo, ornare enim, etiam elementum. Lorem iaculis ultrices gravida lobortis sed ornare. Euismod purus phasellus senectus morbi. Suspendisse penatibus sed purus eget a, ipsum arcu. Aenean erat gravida nulla in nisl, lectus. Montes, euismod lacus at aliquam ridiculus vitae enim vulputate fringilla. Libero viverra porttitor quam nulla maecenas risus risus, feugiat. Ac est fermentum parturient et erat. Ultrices malesuada vitae accumsan purus nec convallis suspendisse orci.</p>
                      <p class="text-xs leading-25 text-paraColor mb-5">Id pellentesque pharetra, et sed justo, vitae id sed. Adipiscing ultricies at vitae, tellus sollicitudin sagittis posuere nulla nulla. Venenatis vitae augue sit feugiat massa nunc. Sed arcu sed scelerisque volutpat sed turpis turpis. Sagittis commodo, bibendum ante egestas sed vestibulum. Egestas nulla et non elementum ultrices. Pulvinar volutpat ultrices tristique congue. Eu et pulvinar eu faucibus non est risus ullamcorper. Duis odio fusce id quis id.Sagittis hendrerit donec turpis donec feugiat sagittis, placerat non. Ipsum sem sit volutpat sed sed. Nulla nec, diam vitae ullamcorper tincidunt dictum gravida eget. Adipiscing elit tellus, rhoncus imperdiet vel aliquam cras quam. Vel praesent sagittis vitae, vel, massa in feugiat quisque.</p>
                          <button class="py-2 px-6 xl:py-4 3xl:px-10 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out uppercase">edit</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
     </div>
</template>
