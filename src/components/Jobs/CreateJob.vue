<template>
  <div class="create-job mx-auto px-5">
    <h2 class="flex items-center justify-center font-bold text-six md:text-five lg:text-four xl:text-three 2xl:text-two mt-12 text-lightBlack leading-90">Create Post</h2>
    <div class="wrap-inner rounded-sm border border-blue bg-white p-6 md:p-12 my-6 md:my-12">
      <h2 class="text-lightBlack text-xl font-bold mb-4">Create a Post</h2>
      <form action="">
        <label class="block pb-4">
          <span class="block text-xs mb-2 text-lightBlack"> Job Category </span>
          <select name="" id="" class="px-4 py-2 bg-white placeholder-blackLight text-black  w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary">
               <option value="contractor">Contractor</option>
          </select>
        </label>
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">Job Title </span>
          <input type="text" name="job-title" class="px-4 py-2 bg-white placeholder-blackLight text-black  w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Job Title Name" />
        </label>
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">Job Description</span>
          <textarea name="" id="" cols="30" rows="4" class="px-4 py-2 bg-white placeholder-blackLight text-black  w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="Description"></textarea>
        </label>
        <div class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">Emergency</span>
          <div class="radio-wrapper flex items-center space-x-4">
            <label class="radio-wrap flex justify-left items-center cursor-pointer relative">
                <input type="radio" name="dark" checked class="absolute top-1/2 left-1/2">
                <span class="design rounded-full relative mr-2 transition-all">
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 right-0 m-auto bottom-0">
                    <path d="M0.816406 5.5L3.81641 7.5L9.31641 1.5" stroke="white" stroke-width="2.01011"/>
                  </svg>
                </span>
                <span class="text block text-xs text-black opacity-50">Yes</span>
            </label>
            <label class="radio-wrap flex justify-left items-center cursor-pointer relative">
                <input type="radio" name="dark" class="absolute top-1/2 left-1/2">
                <span class="design rounded-full relative mr-2 transition-all">
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 right-0 m-auto bottom-0">
                    <path d="M0.816406 5.5L3.81641 7.5L9.31641 1.5" stroke="white" stroke-width="2.01011"/>
                  </svg>
                </span>
                <span class="text block text-xs text-black opacity-50">No</span>
            </label>
          </div>
        </div>

        <div class="block pb-4 file-wrapper" for="upload-photos">
          <span class="block text-xs text-lightBlack mb-2">Photos</span>
          <label for="upload-photos" class="relative flex w-full items-center justify-center px-4 py-2 bg-white placeholder-blackLight text-black  w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary cursor-pointer">
            <input type="file" name="upload-photos" id="upload-photos" class="absolute opacity-0"/>
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
              <img src="../../assets/images/create-job-1.jpg" alt="">
            </figure>
            <figure class="shadow-xs border border-blue">
              <img src="../../assets/images/create-job-2.jpg" alt="">
            </figure>
          </div>
        </div>
        
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">End date</span>
          <input type="date" name="end-date" class="px-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="12-17-2021" />
        </label>
        
        <label class="block pb-4">
          <span class="block text-xs text-lightBlack mb-2">Address</span>
          <input type="text" name="address" class="px-4 py-2 bg-white placeholder-blackLight text-black w-full rounded-xs text-sm focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary" placeholder="400 Broad St, Seattle, WA 98109" />
        </label>
        <label class="block pb-4">
          <figure>
            <img src="../../assets/images/map.jpg" alt="" />
          </figure>
        </label>

        <label class="block pt-4">
          <button class="px-3 xl:px-5 py-3 font-semibold text-md 2xl:text-base bg-primary text-white rounded-sm shadow-sm w-full hover:bg-green duration-500 ease-in-out flex items-center justify-center">
               <span class="mr-3">Create a Job Post</span>
               <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.14966 8H13.483" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.81641 3.3335L13.4831 8.00016L8.81641 12.6668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
          </button>
        </label>        
      </form>
    </div>   
  </div>
</template>