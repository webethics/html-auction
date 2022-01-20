<script>
import exploreJobFour from '../../assets/images/explore-job-4.jpg';
import jobDetailsMap from '../../assets/images/job-deatils-map.jpg';
import clientProfile from '../../assets/images/client-profile.png';
import clientRating from '../../assets/images/client-rating.png';
import clientProposal from '../../assets/images/client-proposal.jpg';
import star from '../../assets/images/star.png';
import createJob from '../../assets/images/create-job-1.jpg';
import createJobs from '../../assets/images/create-job-2.jpg';
export default {
     name: "BidderProfile",
     components: {},
     data() {
          return {
               createJob:createJob,
               createJobs:createJobs,
               exploreJobFour: exploreJobFour,
               jobDetailsMap:jobDetailsMap,
               clientProfile:clientProfile,
               clientRating:clientRating,
               clientProposal:clientProposal,
               showApplyNowDrawer:false,
               star:star,
          }
     }
};
</script>
<template>
     <div class="job-details mx-auto">
          <div class="container mx-auto">
               <div class="wrap-inner bg-white my-6 md:my-12">
                    <div class="container mx-auto flex flex-wrap flex-col md:flex-row px-5 lg:px-20 2xl:px-28 3xl:px-5">
                         <div class="job-details-left w-full md:w-3/5 mb-4 md:mb-0">
                              <div class="explore-job-outer flex flex-wrap flex-col">
                                   <div class="explore-job-image w-full mb-6">
                                        <img :src="exploreJobFour" alt="" class="w-full" />
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
                                                  <p class="text-sm leading-25 text-textColor-400">12-Dec-2021</p>
                                             </div>
                                        </div>
                                        <h2 class="font-bold text-sm lg:text-base  leading-30">Address</h2>
                                        <p class="text-sm md:text-base leading-25 text-textColor">400 Broad St, Seattle, WA 98109</p>
                                   </div>
                              </div>
                         </div>
                         <div class="job-details-right w-full md:w-2/5 md:pl-4 lg:pl-14">      
                              <button @click="showApplyNowDrawer = true" class="w-full py-2 px-6 xl:py-4 3xl:px-24 font-semibold text-md 2xl:text-lg bg-green text-white rounded-sm shadow-sm hover:bg-primary duration-500 ease-in-out mb-4 lg:mb-9 uppercase">Apply nows
                                   <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block" style="margin-top: -10px;">
                                        <path d="M0 20H4V8H0V20ZM22 9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9Z" fill="white"/>
                                   </svg>
                              </button>                                    
                              <div class="job-details-map mb-4 lg:mb-9">
                                   <img :src="jobDetailsMap" alt="" />
                              </div>
                              <div class="job-details-client-profile bg-black-50 rounded-xs p-4 lg:p-6">
                                   <h2 class="text-lg font-bold capitalize leading-30 mb-4">client profile</h2>
                                   <div class="client-profile-wrap flex flex-wrap flex-row md:flex-col lg:flex-row">
                                        <div class="client-profile-pic w-1/5 md:w-full lg:w-1/5 mb-3 xl:mb-0 pr-3 md:pr-0">
                                             <img :src="clientProfile" alt="" class="w-full" />
                                        </div>
                                        <div class="client-profile-content w-4/5 md:w-full lg:w-4/5 md:pl-0 lg:pl-4">
                                             <h2 class="text-base leading-20 font-semibold capitalize">David Yates</h2>
                                             <p class="text-paraColor text-sm leading-20">consectetur adipiscing elit</p>
                                             <div class="client-jobs-info flex flex-wrap sm:flex-row md:items-center text-black text-sm leading-30 capitalize space-x-2 xl:space-x-4">
                                                  <div class="job-posted">Job posted <span class="text-white bg-green rounded-xs inline-block text-center leading-20">2</span></div>
                                                  <div class="job-open">Open Jobs <span class="text-white bg-green rounded-xs inline-block text-center leading-20">1</span></div>
                                             </div>
                                             <div class="client-rating mt-2">
                                                  <img :src="clientRating" alt="" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="container mx-auto flex flex-wrap mt-4 md:mt-8 lg:mt-12 px-5 lg:px-20 2xl:px-28 3xl:px-5">
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
                                        <p class="mb-2 text-sm text-lightBlack"><strong class="font-semibold">To Client</strong> <img class="inline-block align-middle mx-1" :src="star" alt="" /> Loved working with this contractor</p>
                                        <p class="mb-2 text-sm italic text-paraColor">Job Completed</p>
                                        <p class="text-sm text-lightBlack"><strong class="font-semibold">To Freelancer:</strong> <span class="text-green"> David Yates</span> <img class="inline-block align-middle mx-1" :src="star" alt="" /> Amazing Experience working with Proffessional .</p>
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

                    <div class="container mx-auto flex flex-wrap mt-12 px-5 lg:px-20 2xl:px-28 3xl:px-5">
                         <div class="client-proposal border border-inputBorder rounded-xs px-5 sm:px-7 py-5 sm:py-10">
                              <h2 class="proposal-title text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-six leading-30 border-b border-inputBorder mb-6 sm:mb-11 pb-5 text-center sm:text-left">Proposal</h2>
                              <div class="client-proposal-wrap flex flex-wrap flex-col sm:flex-row">
                                   <div class="client-proposal-left w-full sm:w-1/6">
                                        <div class="client-proposal-img-wrap mb-4 sm:mb-0 w-1/2 sm:w-full mx-auto">
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
                                        </div>
                                        <h2 class="font-bold text-sm leading-30 capitalize">Cover Letter</h2>
                                        <p class="text-sm leading-25 text-paraColor mb-5">Fames dui faucibus massa hendrerit morbi amet euismod odio adipiscing. Ornare senectus placerat fermentum et magna tortor quam venenatis. Semper egestas lorem venenatis aliquet faucibus vitae nibh commodo cursus. Venenatis id egestas aliquet morbi sapien lorem. Morbi lorem convallis dignissim cursus ac pulvinar in ac leo. Odio ut donec sociis ut eget pellentesque nibh aliquam. Non felis, orci fermentum ornare. Massa morbi ultrices amet, viverra id dapibus amet ac. Pellentesque arcu vulputate ultrices ut nisl. In vel id tortor tortor nec montes, sem pellentesque ac. A nunc, augue massa sit vitae etiam ut neque.</p>
                                        <p class="text-sm leading-25 text-paraColor mb-5">Ultrices porttitor adipiscing risus viverra senectus id cum.Egestas justo, ornare enim, etiam elementum. Lorem iaculis ultrices gravida lobortis sed ornare. Euismod purus phasellus senectus morbi. Suspendisse penatibus sed purus eget a, ipsum arcu. Aenean erat gravida nulla in nisl, lectus. Montes, euismod lacus at aliquam ridiculus vitae enim vulputate fringilla. Libero viverra porttitor quam nulla maecenas risus risus, feugiat. Ac est fermentum parturient et erat. Ultrices malesuada vitae accumsan purus nec convallis suspendisse orci.</p>
                                        <p class="text-sm leading-25 text-paraColor mb-5">Id pellentesque pharetra, et sed justo, vitae id sed. Adipiscing ultricies at vitae, tellus sollicitudin sagittis posuere nulla nulla. Venenatis vitae augue sit feugiat massa nunc. Sed arcu sed scelerisque volutpat sed turpis turpis. Sagittis commodo, bibendum ante egestas sed vestibulum. Egestas nulla et non elementum ultrices. Pulvinar volutpat ultrices tristique congue. Eu et pulvinar eu faucibus non est risus ullamcorper. Duis odio fusce id quis id.Sagittis hendrerit donec turpis donec feugiat sagittis, placerat non. Ipsum sem sit volutpat sed sed. Nulla nec, diam vitae ullamcorper tincidunt dictum gravida eget. Adipiscing elit tellus, rhoncus imperdiet vel aliquam cras quam. Vel praesent sagittis vitae, vel, massa in feugiat quisque.</p>
                                        <button class="py-2 px-6 xl:py-4 3xl:px-20 font-semibold text-md 2xl:text-lg bg-primary text-white rounded-sm shadow-sm hover:bg-green duration-500 ease-in-out uppercase">edit</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div class="drawer-layout" :class="(showApplyNowDrawer == true) ? 'shown' : '' ">
               <div class="drawer-overlay bg-black fixed top-0 bottom-0 left-0 right-0 w-full h-full cursor-pointer transition" @click="showApplyNowDrawer = false"></div>
               <div class="apply-now-drawer drawer max-w-full fixed bg-white right-0 top-0 h-full px-6 md:px-12 py-6 overflow-y-auto transition-transform">
                    <div class="drawer-content">
                         <div class="drawer-header flex flex-wrap justify-end mb-6">
                              <button @click="showApplyNowDrawer = false">
                                   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM23.8148 23.9836L21.4945 23.973L18 19.807L14.509 23.9695L12.1852 23.9801C12.0305 23.9801 11.9039 23.857 11.9039 23.6988C11.9039 23.632 11.9285 23.5688 11.9707 23.516L16.5445 18.0668L11.9707 12.6211C11.9282 12.5696 11.9047 12.5051 11.9039 12.4383C11.9039 12.2836 12.0305 12.157 12.1852 12.157L14.509 12.1676L18 16.3336L21.491 12.1711L23.8113 12.1605C23.966 12.1605 24.0926 12.2836 24.0926 12.4418C24.0926 12.5086 24.068 12.5719 24.0258 12.6246L19.459 18.0703L24.0293 23.5195C24.0715 23.5723 24.0961 23.6355 24.0961 23.7023C24.0961 23.857 23.9695 23.9836 23.8148 23.9836Z" fill="black"/>
                                   </svg>
                              </button>
                         </div>
                         <h2 class="font-bold text-lg md:text-xl leading-30 text-black pb-3 border-b">Plumbing</h2>
                         <p class="text-sm leading-25 text-paraColor py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pellentesque cras in aenean nullam. Venenatis aliquet at eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.  Semper tortor non volutpat duis. eu in mauris nulla hac fames proin. Amet duis sit tortor, nunc at. Semper tortor non volutpat duis.</p>
                         <form action="">
                              <label class="block pb-4">
                                   <span class="block text-xs text-lightBlack mb-2">BidAgree Amount</span>
                                   <span class="field-wrap relative block">
                                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute">
                                             <path opacity="0.5" d="M7.378 8.826C7.378 9.274 7.266 9.70333 7.042 10.114C6.818 10.5153 6.48667 10.8513 6.048 11.122C5.61867 11.3927 5.10067 11.5467 4.494 11.584V12.718H3.738V11.584C2.88867 11.5093 2.198 11.2387 1.666 10.772C1.134 10.296 0.863333 9.694 0.854 8.966H2.212C2.24933 9.358 2.394 9.69867 2.646 9.988C2.90733 10.2773 3.27133 10.4593 3.738 10.534V7.034C3.11267 6.87533 2.60867 6.712 2.226 6.544C1.84333 6.376 1.51667 6.11467 1.246 5.76C0.975333 5.40533 0.84 4.92933 0.84 4.332C0.84 3.576 1.10133 2.95067 1.624 2.456C2.156 1.96133 2.86067 1.686 3.738 1.63V0.467999H4.494V1.63C5.28733 1.69533 5.92667 1.952 6.412 2.4C6.89733 2.83867 7.17733 3.41267 7.252 4.122H5.894C5.84733 3.79533 5.70267 3.50133 5.46 3.24C5.21733 2.96933 4.89533 2.792 4.494 2.708V6.124C5.11 6.28267 5.60933 6.446 5.992 6.614C6.384 6.77267 6.71067 7.02933 6.972 7.384C7.24267 7.73867 7.378 8.21933 7.378 8.826ZM2.142 4.262C2.142 4.71933 2.27733 5.06933 2.548 5.312C2.81867 5.55467 3.21533 5.75533 3.738 5.914V2.68C3.25267 2.72667 2.86533 2.88533 2.576 3.156C2.28667 3.41733 2.142 3.786 2.142 4.262ZM4.494 10.548C4.998 10.492 5.39 10.31 5.67 10.002C5.95933 9.694 6.104 9.32533 6.104 8.896C6.104 8.43867 5.964 8.08867 5.684 7.846C5.404 7.594 5.00733 7.39333 4.494 7.244V10.548Z" fill="black"/>
                                        </svg>
                                        <input type="number" name="bid-amount" class="pr-4 pl-8 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" />
                                   </span>
                              </label>
                              <label class="block pb-4">
                                   <span class="block text-xs text-lightBlack mb-2">Soft Quote</span>
                                   <span class="field-wrap relative block">
                                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute">
                                             <path opacity="0.5" d="M7.378 8.826C7.378 9.274 7.266 9.70333 7.042 10.114C6.818 10.5153 6.48667 10.8513 6.048 11.122C5.61867 11.3927 5.10067 11.5467 4.494 11.584V12.718H3.738V11.584C2.88867 11.5093 2.198 11.2387 1.666 10.772C1.134 10.296 0.863333 9.694 0.854 8.966H2.212C2.24933 9.358 2.394 9.69867 2.646 9.988C2.90733 10.2773 3.27133 10.4593 3.738 10.534V7.034C3.11267 6.87533 2.60867 6.712 2.226 6.544C1.84333 6.376 1.51667 6.11467 1.246 5.76C0.975333 5.40533 0.84 4.92933 0.84 4.332C0.84 3.576 1.10133 2.95067 1.624 2.456C2.156 1.96133 2.86067 1.686 3.738 1.63V0.467999H4.494V1.63C5.28733 1.69533 5.92667 1.952 6.412 2.4C6.89733 2.83867 7.17733 3.41267 7.252 4.122H5.894C5.84733 3.79533 5.70267 3.50133 5.46 3.24C5.21733 2.96933 4.89533 2.792 4.494 2.708V6.124C5.11 6.28267 5.60933 6.446 5.992 6.614C6.384 6.77267 6.71067 7.02933 6.972 7.384C7.24267 7.73867 7.378 8.21933 7.378 8.826ZM2.142 4.262C2.142 4.71933 2.27733 5.06933 2.548 5.312C2.81867 5.55467 3.21533 5.75533 3.738 5.914V2.68C3.25267 2.72667 2.86533 2.88533 2.576 3.156C2.28667 3.41733 2.142 3.786 2.142 4.262ZM4.494 10.548C4.998 10.492 5.39 10.31 5.67 10.002C5.95933 9.694 6.104 9.32533 6.104 8.896C6.104 8.43867 5.964 8.08867 5.684 7.846C5.404 7.594 5.00733 7.39333 4.494 7.244V10.548Z" fill="black"/>
                                        </svg>
                                        <input type="number" name="bid-amount" class="pr-4 pl-8 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" />
                                   </span>
                              </label>
                              <label class="block pb-4">
                                   <span class="block text-xs text-lightBlack mb-2">Cover Letter</span>
                                   <textarea class="px-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Description"></textarea>
                              </label>

                              <div class="block pb-4 file-wrapper" for="upload-photos">
                                   <span class="block text-xs text-lightBlack mb-2">Photos</span>
                                   <label for="upload-photos" class="relative flex w-full items-center justify-center px-4 py-2 bg-white placeholder-blackLight text-black  w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary cursor-pointer">
                                        <input type="file" multiple name="upload-photos" id="upload-photos" class="absolute opacity-0"/>
                                        <span class="custom-file flex items-center justify-center flex-wrap flex-col">
                                             <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                  <rect x="0.647461" width="74" height="74" fill="url(#pattern0)"/>
                                                  <defs>
                                                       <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                            <use xlink:href="#image0_336_491" transform="scale(0.00390625)"/>
                                                       </pattern>
                                                       <image id="image0_336_491" width="256" height="256" xlink:href="data:image/png;base64,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"/>
                                                  </defs>
                                             </svg>
                                             <span class="text-small mt-4">Drag and drop choose file to upload your</span>
                                        </span>
                                   </label>
                                   <div class="upload-images-wrap flex items-center space-x-2 mt-2">
                                        <figure class="shadow-xs border border-blue">
                                             <img :src="createJob" alt="">
                                        </figure>
                                        <figure class="shadow-xs border border-blue">
                                             <img :src="createJobs" alt="">
                                        </figure>
                                   </div>
                              </div>
                              <button class="px-3 xl:px-5 py-3 font-semibold text-md 2xl:text-base bg-primary text-white rounded-sm shadow-sm w-full hover:bg-green duration-500 ease-in-out flex items-center justify-center">
                                   <span class="mr-3">Submit Proposal</span>
                                   <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.14966 8H13.483" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M8.81641 3.3335L13.4831 8.00016L8.81641 12.6668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                   </svg>
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     </div>
</template>