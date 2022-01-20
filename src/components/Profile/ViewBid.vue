<script>
import jobFour from '../../assets/images/explore-job-4.jpg';
import jobDetailsMap from '../../assets/images/job-deatils-map.jpg';
import clientProposal from '../../assets/images/client-proposal.jpg';
import clientRating from '../../assets/images/client-rating.png';
export default {
  name: "JobDetail",
  components: {},
  data() {
    return {
      jobFour:jobFour,
      jobDetailsMap:jobDetailsMap,
      clientProposal: clientProposal,
      clientRating: clientRating,
    }
  }
};
</script>
<template>
      <div class="job-details mx-auto">
          <div class="container mx-auto px-5 lg:px-20 2xl:px-28 3xl:px-5">           
            
            <div class="wrap-inner bg-white my-6 md:my-12">
              <div class="container mx-auto flex flex-wrap flex-col md:flex-row">

                <div class="job-details-left w-full md:w-3/5 mb-4 md:mb-0">
                    <div class="explore-job-outer flex flex-wrap flex-col">
                      <div class="explore-job-image w-full mb-6">
                            <img :src="jobFour" alt="" class="w-full" />
                      </div>
                      <div class="explore-job-content text-center sm:text-left">
                            <h2 class="font-bold text-lg md:text-xl leading-30 mb-2">Plumbing</h2>
                            <p class="text-sm md:text-base leading-25 text-textColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pellentesque cras in aenean nullam. Venenatis aliquet at eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.  Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.</p>
                            <div class="explore-job-meta flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-between my-4 space-y-4 sm:sapce-y-0">
                                <div class="explore-btns">
                                      <button class="bg-textColor-50 text-black border border-blue text-xs leading-20 rounded-xs py-1 px-2 capitalize hover:bg-green hover:text-white hover:border-green  duration-500 ease-in-out shadow-explore-jobs mr-2">Emergency</button>
                                      <button class="bg-green text-white text-xs border border-green leading-20 rounded-xs py-1 px-2 capitalize hover:bg-primary hover:border-primary duration-500 ease-in-out shadow-explore-jobs">Plumber</button>
                                </div>
                                <div class="explore-expiry">
                                      <h2 class="font-bold text-sm lg:text-base leading-20">Job Expire</h2>
                                      <p class="text-sm leading-25 text-textColor">12-Dec-2021</p>
                                </div>
                            </div>
                            <h2 class="font-bold text-sm lg:text-base  leading-30">Address</h2>
                            <p class="text-sm md:text-base leading-25 text-textColor">400 Broad St, Seattle, WA 98109, 23G7+26 Surjani Town, Karachi, Pakistan</p>
                      </div>
                  </div>
                </div>

                <div class="job-details-right w-full md:w-2/5 md:pl-4 lg:pl-14">             
                  <div class="job-details-map mb-4 lg:mb-9">
                    <img :src="jobDetailsMap" alt="" />
                  </div>
                </div>
              </div>

          
              <div class="container mx-auto flex flex-wrap mt-10">
                <div class="client-proposal border border-inputBorder rounded-xs px-5 sm:px-7 py-5 sm:py-10">
                  <h2 class="proposal-title text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-six leading-30 border-b border-inputBorder mb-6 sm:mb-11 pb-5 text-center sm:text-left">View Bids (3)</h2>
                  <div class="client-proposal-wrap flex flex-wrap flex-col sm:flex-row border-b border-inputBorder pb-6 mb-6">
                    <div class="client-proposal-left w-full sm:w-1/6">
                      <div class="client-proposal-img-wrap mb-4 sm:mb-0">
                        <img :src="clientProposal" alt="" />
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
                              <img :src="clientRating" alt="">
                            </div>
                          </div>
                        </div>
                        
                        <div class="client-proposal-meta-btn">
                          <button class="w-full py-2 px-6 xl:py-4 3xl:px-10 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out uppercase my-4 sm:my-0">
                            View Profile
                          </button>
                        </div>

                      </div>
                      <h2 class="font-bold text-sm leading-30 capitalize">Cover Letter</h2>
                      <p class="text-sm leading-25 text-paraColor mb-5">Fames dui faucibus massa hendrerit morbi amet euismod odio adipiscing. Ornare senectus placerat fermentum et magna tortor quam venenatis. Semper egestas lorem venenatis aliquet faucibus vitae nibh commodo cursus. Venenatis id egestas aliquet morbi sapien lorem. Morbi lorem convallis dignissim cursus ac pulvinar in ac leo. Odio ut donec sociis ut eget pellentesque nibh aliquam. Non felis, orci fermentum ornare. Massa morbi ultrices amet, viverra id dapibus amet ac. Pellentesque arcu vulputate ultrices ut nisl. In vel id tortor tortor nec montes, sem pellentesque ac. A nunc, augue massa sit vitae etiam ut neque. <a href="#" class="inline-block text-primary font-semibold text-xs leading-30">View Proposal</a></p>                     
                    </div>
                  </div>
                  <div class="client-proposal-wrap flex flex-wrap flex-col sm:flex-row">
                    <div class="client-proposal-left w-full sm:w-1/6">
                      <div class="client-proposal-img-wrap mb-4 sm:mb-0">
                        <img :src="clientProposal" alt="" />
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
                              <img :src="clientRating" alt="">
                            </div>
                          </div>
                        </div>
                        
                        <div class="client-proposal-meta-btn">
                          <button class="w-full py-2 px-6 xl:py-4 3xl:px-10 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out uppercase my-4 sm:my-0">
                            View Profile
                          </button>
                        </div>

                      </div>
                      <h2 class="font-bold text-sm leading-30 capitalize">Cover Letter</h2>
                      <p class="text-sm leading-25 text-paraColor mb-5">Fames dui faucibus massa hendrerit morbi amet euismod odio adipiscing. Ornare senectus placerat fermentum et magna tortor quam venenatis. Semper egestas lorem venenatis aliquet faucibus vitae nibh commodo cursus. Venenatis id egestas aliquet morbi sapien lorem. Morbi lorem convallis dignissim cursus ac pulvinar in ac leo. Odio ut donec sociis ut eget pellentesque nibh aliquam. Non felis, orci fermentum ornare. Massa morbi ultrices amet, viverra id dapibus amet ac. Pellentesque arcu vulputate ultrices ut nisl. In vel id tortor tortor nec montes, sem pellentesque ac. A nunc, augue massa sit vitae etiam ut neque.</p>
                      <p class="text-sm leading-25 text-paraColor mb-5">Ultrices porttitor adipiscing risus viverra senectus id cum.Egestas justo, ornare enim, etiam elementum. Lorem iaculis ultrices gravida lobortis sed ornare. Euismod purus phasellus senectus morbi. Suspendisse penatibus sed purus eget a, ipsum arcu. Aenean erat gravida nulla in nisl, lectus. Montes, euismod lacus at aliquam ridiculus vitae enim vulputate fringilla. Libero viverra porttitor quam nulla maecenas risus risus, feugiat. Ac est fermentum parturient et erat. Ultrices malesuada vitae accumsan purus nec convallis suspendisse orci.</p>
                      <p class="text-sm leading-25 text-paraColor mb-5">Id pellentesque pharetra, et sed justo, vitae id sed. Adipiscing ultricies at vitae, tellus sollicitudin sagittis posuere nulla nulla. Venenatis vitae augue sit feugiat massa nunc. Sed arcu sed scelerisque volutpat sed turpis turpis. Sagittis commodo, bibendum ante egestas sed vestibulum. Egestas nulla et non elementum ultrices. Pulvinar volutpat ultrices tristique congue. Eu et pulvinar eu faucibus non est risus ullamcorper. Duis odio fusce id quis id.Sagittis hendrerit donec turpis donec feugiat sagittis, placerat non. Ipsum sem sit volutpat sed sed. Nulla nec, diam vitae ullamcorper tincidunt dictum gravida eget. Adipiscing elit tellus, rhoncus imperdiet vel aliquam cras quam. Vel praesent sagittis vitae, vel, massa in feugiat quisque.</p>
                          <button class="py-2 px-6 xl:py-4 3xl:px-10 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out uppercase">hire now <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block" style="margin-top: -8px;">
                                   <path d="M1.81641 21H5.81641V9H1.81641V21ZM23.8164 10C23.8164 8.9 22.9164 8 21.8164 8H15.5064L16.4564 3.43L16.4864 3.11C16.4864 2.7 16.3164 2.32 16.0464 2.05L14.9864 1L8.40641 7.59C8.03641 7.95 7.81641 8.45 7.81641 9V19C7.81641 20.1 8.71641 21 9.81641 21H18.8164C19.6464 21 20.3564 20.5 20.6564 19.78L23.6764 12.73C23.7664 12.5 23.8164 12.26 23.8164 12V10Z" fill="white"/>
                              </svg>
                          </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
     </div>
</template>
