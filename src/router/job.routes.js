import CreateJob from '@views/Jobs/CreateJob.vue'
import JobListing from '@views/Jobs/JobListing.vue'
import JobListingPro from '@views/Jobs/JobListingPro.vue'
import JobDetails from '@views/Jobs/JobDetails.vue'
import ExploreJob from '@views/Jobs/ExploreJob.vue'

const jobsRoutes = [
     {
          path: '/create-job',
          name: 'CreateJob',
          component: CreateJob
     },
     {
          path: '/job-listing',
          name: 'JobListing',
          component: JobListing
     },
     {
          path: '/job-listing-pro',
          name: 'JobListingPro',
          component: JobListingPro
     },
     {
          path: '/explore-job',
          name: 'ExploreJob',
          component: ExploreJob
     },
     {
          path: '/job-details',
          name: 'JobDetails',
          component: JobDetails
     }
]

export default jobsRoutes;