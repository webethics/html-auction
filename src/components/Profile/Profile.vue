<template>
     <div class="profile bg-inputBorder py-10 lg:py-20">
          <div class="container mx-auto px-5 xl:px-20 2xl:px-28 3xl:px-5">
               <div class="container mx-auto flex flex-wrap px-4 md:px-8 pb-8 sm:pb-12 bg-white rounded container-inner">
                         <div class="flex flex-col md:flex-row items-center justify-between w-full profile-meta-head py-8 relative">
                              <div class="profile-meta-left w-full md:w-2/4 flex items-center md:space-x-6 lg:space-x-10 flex-wrap flex-col md:flex-row text-center md:text-left">
                                   <figure class="w-28 lg:w-auto">
                                        <img :src="user" alt="" class="mx-auto md:ml-0" />
                                   </figure>
                                   <div class="user-meta">
                                        <h2 class="text-lg sm:text-xl md:text-thirty md:leading-40 3xl:text-four font-bold mt-3 md:mt-0 text-lightBlack leading-63">David Yates</h2>
                                        <p class="text-base text-paraColor leading-30">info.david@gmail.com</p>
                                        <p class="text-base mb-1 text-paraColor leading-30">0938678204</p>
                                        <figure>
                                             <img :src="stars" alt="" class="mx-auto md:ml-0" />
                                        </figure>
                                   </div>
                              </div>     
                              <div class="profile-meta-right w-full md:w-2/4 flex justify-end flex-wrap justify-center md:justify-end">
                                   <a href="#" class="bg-black hover:bg-primary transition inline-block profile-edit-icon absolute md:relative top-5 md:top-0 right-0 rounded-full flex items-center justify-center">
                                        <svg class="m-auto" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18 4.14815L14.8519 1L2.25926 13.5926L1 18L5.40741 16.7407L18 4.14815ZM12.3333 3.51852L15.4815 6.66667L12.3333 3.51852ZM2.25926 13.5926L5.40741 16.7407L2.25926 13.5926Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                   </a>
                                   <ul class="social-icons w-full text-center md:text-right mt-4 lg:mt-8 space-x-2 lg:space-x-4 mb-2 lg:mb-6">
                                        <li>
                                             <a href="#" class="bg-black inline-block rounded-full hover:bg-primary ease-in-out duration-500">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M19.7988 5.92408C19.7988 6.86118 19.0392 7.62084 18.1021 7.62084C17.165 7.62084 16.4053 6.86118 16.4053 5.92408C16.4053 4.98698 17.165 4.22731 18.1021 4.22731C19.0392 4.22731 19.7988 4.98698 19.7988 5.92408Z" fill="#F8F8F8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8806 17.8014C15.0043 17.8014 17.5365 15.2692 17.5365 12.1455C17.5365 9.02189 15.0043 6.48967 11.8806 6.48967C8.75695 6.48967 6.22473 9.02189 6.22473 12.1455C6.22473 15.2692 8.75695 17.8014 11.8806 17.8014ZM11.8806 15.5391C13.7548 15.5391 15.2741 14.0197 15.2741 12.1455C15.2741 10.2714 13.7548 8.75202 11.8806 8.75202C10.0064 8.75202 8.48708 10.2714 8.48708 12.1455C8.48708 14.0197 10.0064 15.5391 11.8806 15.5391Z" fill="#F8F8F8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.568848 11.6931C0.568848 7.89197 0.568848 5.99142 1.30859 4.53958C1.95929 3.26252 2.99758 2.22423 4.27465 1.57353C5.72648 0.833786 7.62703 0.833786 11.4281 0.833786H12.3331C16.1342 0.833786 18.0347 0.833786 19.4866 1.57353C20.7636 2.22423 21.8019 3.26252 22.4526 4.53958C23.1924 5.99142 23.1924 7.89197 23.1924 11.6931V12.598C23.1924 16.3991 23.1924 18.2997 22.4526 19.7515C21.8019 21.0286 20.7636 22.0669 19.4866 22.7176C18.0347 23.4573 16.1342 23.4573 12.3331 23.4573H11.4281C7.62703 23.4573 5.72648 23.4573 4.27465 22.7176C2.99758 22.0669 1.95929 21.0286 1.30859 19.7515C0.568848 18.2997 0.568848 16.3991 0.568848 12.598V11.6931ZM11.4281 3.09614H12.3331C14.271 3.09614 15.5883 3.0979 16.6066 3.18109C17.5984 3.26213 18.1057 3.40902 18.4595 3.5893C19.3109 4.0231 20.0031 4.71529 20.4369 5.56667C20.6171 5.9205 20.764 6.42773 20.8451 7.41958C20.9283 8.43784 20.93 9.75519 20.93 11.6931V12.598C20.93 14.5359 20.9283 15.8533 20.8451 16.8715C20.764 17.8634 20.6171 18.3706 20.4369 18.7244C20.0031 19.5758 19.3109 20.268 18.4595 20.7018C18.1057 20.8821 17.5984 21.029 16.6066 21.11C15.5883 21.1932 14.271 21.195 12.3331 21.195H11.4281C9.49025 21.195 8.1729 21.1932 7.15464 21.11C6.16279 21.029 5.65556 20.8821 5.30173 20.7018C4.45035 20.268 3.75816 19.5758 3.32436 18.7244C3.14408 18.3706 2.99719 17.8634 2.91615 16.8715C2.83296 15.8533 2.8312 14.5359 2.8312 12.598V11.6931C2.8312 9.75519 2.83296 8.43784 2.91615 7.41958C2.99719 6.42773 3.14408 5.9205 3.32436 5.56667C3.75816 4.71529 4.45035 4.0231 5.30173 3.5893C5.65556 3.40902 6.16279 3.26213 7.15464 3.18109C8.1729 3.0979 9.49025 3.09614 11.4281 3.09614Z" fill="#F8F8F8"></path>
                                                  </svg>
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#" class="bg-black inline-block rounded-full hover:bg-primary ease-in-out duration-500">
                                                  <svg width="11" height="24" viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M10.1754 11.5204L10.7165 8.0821H7.33138V5.85185C7.33138 4.91098 7.80339 3.99331 9.31959 3.99331H10.8596V1.0661C10.8596 1.0661 9.4626 0.833786 8.1276 0.833786C5.33844 0.833786 3.5171 2.4809 3.5171 5.46156V8.0821H0.417969V11.5204H3.5171V23.4573H7.33138V11.5204H10.1754Z" fill="#F8F8F8"></path>
                                                  </svg>
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#" class="bg-black inline-block rounded-full hover:bg-primary ease-in-out duration-500">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M5.90441 3.56824C5.90441 5.07844 4.68268 6.3027 3.17559 6.3027C1.66851 6.3027 0.446777 5.07844 0.446777 3.56824C0.446777 2.05804 1.66851 0.833786 3.17559 0.833786C4.68268 0.833786 5.90441 2.05804 5.90441 3.56824Z" fill="#F8F8F8"></path><path d="M0.819949 8.31264H5.48459V23.4573H0.819949V8.31264Z" fill="#F8F8F8"></path><path d="M12.9947 8.31264H8.33003V23.4573H12.9947C12.9947 23.4573 12.9947 18.6895 12.9947 15.7085C12.9947 13.9193 13.5649 12.1222 15.8401 12.1222C18.4114 12.1222 18.3959 14.4637 18.3839 16.2777C18.3682 18.6489 18.4057 21.0687 18.4057 23.4573H23.0703V15.4643C23.0308 10.3605 21.7895 8.00881 17.706 8.00881C15.2809 8.00881 13.7776 9.18843 12.9947 10.2557V8.31264Z" fill="#F8F8F8"></path>
                                                  </svg>
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#" class="bg-black inline-block rounded-full hover:bg-primary ease-in-out duration-500">
                                                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M23.3735 22.7917C23.1985 24.0017 20.7285 27.14 19.5919 27.595C19.2052 27.75 18.8302 27.7117 18.5302 27.4817C18.3369 27.3317 18.1385 27.0284 15.4752 22.705L14.6835 21.4167C14.3785 20.955 14.4369 20.3467 14.8135 19.8834C15.1852 19.4334 15.7285 19.2667 16.2002 19.4467C16.2269 19.46 18.1919 20.1084 18.1919 20.1084C22.6719 21.58 22.8169 21.6367 23.0102 21.7784C23.2935 22.01 23.4252 22.3717 23.3669 22.7917H23.3735ZM14.3969 16.215C14.0802 15.7334 14.0852 15.165 14.4135 14.7734L15.6569 13.075C18.3935 9.35004 18.5435 9.15337 18.7285 9.02337C18.8892 8.91919 19.075 8.86046 19.2663 8.85342C19.4577 8.84637 19.6473 8.89128 19.8152 8.98338C20.9002 9.51004 23.0919 12.765 23.2235 14.015V14.0567C23.2471 14.2436 23.2194 14.4334 23.1433 14.6057C23.0673 14.7781 22.9458 14.9265 22.7919 15.035C22.5869 15.1667 22.4002 15.2434 17.3069 16.4784C16.5019 16.6834 16.0535 16.795 15.7902 16.89L15.8252 16.8517C15.3219 17.0034 14.7585 16.76 14.4402 16.2567L14.3969 16.215V16.215ZM11.2719 14.2834C11.0285 14.36 10.2869 14.5917 9.37353 13.1134C9.37353 13.1134 3.21687 3.42504 3.07353 3.12671C2.9852 2.79171 3.09187 2.41171 3.3902 2.10504C4.30687 1.15671 9.2802 -0.236625 10.5819 0.0800419C11.0069 0.190042 11.2985 0.458375 11.4002 0.835042C11.4752 1.25171 12.0802 10.245 12.1669 12.2584C12.2519 13.9817 11.5135 14.21 11.2719 14.2834V14.2834ZM12.0835 24.1384C12.0702 28.85 12.0585 29.0084 11.9819 29.2317C11.8502 29.5834 11.5485 29.8184 11.1319 29.895C9.93187 30.0984 6.17853 28.7117 5.39687 27.7834C5.25435 27.6059 5.16377 27.3925 5.1352 27.1667C5.11353 27.0167 5.1352 26.8667 5.1902 26.735C5.2852 26.4917 5.4152 26.3034 8.78686 22.3517L9.77687 21.175C10.1152 20.7417 10.7152 20.6117 11.2752 20.835C11.8169 21.0417 12.1552 21.51 12.1185 22.015V24.1134L12.0835 24.1384V24.1384ZM1.86687 21.125C1.49687 21.115 1.16687 20.8917 0.975199 20.5284C0.836866 20.2584 0.738532 19.815 0.675198 19.275C0.505198 17.6517 0.713532 15.2017 1.19853 14.4234C1.42853 14.0667 1.76187 13.8784 2.1302 13.8917C2.37353 13.8917 2.5902 13.9684 7.40853 15.9517L8.82187 16.5134C9.3252 16.6984 9.63686 17.225 9.60853 17.825C9.57186 18.405 9.2352 18.8517 8.7402 18.985L6.73687 19.6217C2.2552 21.0617 2.10687 21.1017 1.87187 21.0834L1.86687 21.125V21.125ZM20.5669 29.995H20.5602L20.5552 30L20.5669 29.995Z" fill="#F8F8F8"/>
                                                  </svg>

                                             </a>
                                        </li>
                                   </ul>
                                   <ul class="jobs-meta flex items-center flex-wrap flex-col text-center sm:text-left sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-6">
                                        <li><a href="#" class="flex flex-wrap flex-col text-sm text-lightBlack">Jobs Posted <span class="font-bold text-center md:text-left">64</span></a></li>
                                        <li><a href="#" class="flex flex-wrap flex-col text-sm text-lightBlack">Completed Jobs <span class="font-bold text-center md:text-left">50</span></a></li>
                                        <li><a href="#" class="flex flex-wrap flex-col text-sm text-lightBlack">Open Jobs <span class="font-bold text-center md:text-left">05</span></a></li>
                                   </ul>
                              </div>     
                         </div>
                         <div class="profile-description py-4 md:py-6 text-sm leading-25 text-center md:text-left text-paraColor">
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at cras ut dictum eu condimentum. Netus quis netus aliquet viverra lacinia iaculis auctor vitae, fusce. Vitae, lobortis tristique elit suspendisse facilisi consectetur. Tortor, non morbi nec tincidunt pellentesque nibh sit sem. Duis facilisi feugiat congue risus. Dictum felis risus turpis mollis sagittis quisque vel vitae porta. Pharetra, maecenas fermentum eu auctor pulvinar phasellus diam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at cras ut dictum eu condimentum. Netus quis netus aliquet viverra lacinia iaculis auctor vitae, fusce. Vitae, lobortis tristique elit suspendisse facilisi consectetur. Tortor, non morbi nec tincidunt pellentesque nibh sit sem. Duis facilisi feugiat congue risus. Dictum felis risus turpis mollis sagittis quisque vel vitae porta. Pharetra, maecenas fermentum eu auctor pulvinar phasellus diam. </p>
                         </div>
                         <div class="job-history w-full rounded-sm">
                              <div class="job-history-head px-4 md:px-8 py-4 md:py-6">
                                   <h2 class="font-bold text-lg lg:text-2xl xl:text-six text-lightBlack leading-30">Jobs History</h2>
                              </div>
                              <div class="job-history-list">
                                   <div class="list px-4 md:px-8 py-4 md:py-6">
                                        <div class="job-title-wrap flex flex-wrap md:items-center justify-between mb-2 flex-col md:flex-row">
                                             <a href="#" class="font-semibold text-base md:text-lg leading-30">House Contractor</a>
                                             <span class="date text-sm text-lightBlack">02-Dec-2021 - 12-Dec-2021</span>
                                        </div>
                                        <p class="mb-2 text-sm text-lightBlack"><strong class="font-semibold">To Client</strong> <img class="inline-block align-middle mx-1" :src="star" alt="" /> Loved working with this contractor</p>
                                        <p class="mb-2 text-sm italic text-paraColor">Job Completed</p>
                                        <p class="text-sm text-lightBlack"><strong class="font-semibold">To Freelancer:</strong> <span class="text-green"> David Yates</span> <img class="inline-block align-middle mx-1" :src="star" alt="" /> Amazing Experience working with Proffessional .
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
</template>
<script>
import user from '../../assets/images/user.jpg';
import stars from '../../assets/images/stars.png';
import star from '../../assets/images/star.png';

export default {
     data() {
          return {
               user: user,
               stars:stars,
               star:star,
          }         
     },
}
</script>
