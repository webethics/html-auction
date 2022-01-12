import Profile from '@views/Profile/Index.vue'
import BidderProfiles from '@views/Profile/BidderProfiles.vue'
import ViewBids from '@views/Profile/ViewBids.vue'

const profileRoutes = [
     {
          path: '/profile',
          name: 'Profile',
          component: Profile
     },
     {
          path: '/bidder-profile',
          name: 'BidderProfiles',
          component: BidderProfiles
     },
     {
          path: '/view-bids',
          name: 'ViewBids',
          component: ViewBids
     }
]

export default profileRoutes;