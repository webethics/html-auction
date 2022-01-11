import CreateJob from '@views/Jobs/CreateJob.vue'
import JobListing from '@views/Jobs/JobListing.vue'
import JobListingPro from '@views/Jobs/JobListingPro.vue'

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
     }
]

export default jobsRoutes;