import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home.routes'
import blogRoutes from './blog.routes'
import jobsRoutes from './job.routes';
import homeProRoutes from './homepro.routes'
import profileRoutes from './profile.routes';
import ContactUs from '@views/ContactUs/Index.vue'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
  ...blogRoutes,
  ...jobsRoutes,
  ...profileRoutes,
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  ...homeRoutes,
  ...homeProRoutes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
