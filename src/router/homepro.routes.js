import HomePro from '@views/HomePro/Index.vue'
import NotFound from '@views/Errors/404.vue'

const homeProRoutes = [
  {
    path: '/homepro',
    name: 'HomePro',
    component: HomePro
  },
  // redirect to not found page
  {
    path: '/:cacheAll(.*)',
    name: '404',
    component: NotFound
  }
]

export default homeProRoutes;