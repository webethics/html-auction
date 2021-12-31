import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, integer } from 'vee-validate/dist/rules';
import './index.css'


Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  ...required,
  message: 'This field is required'
})

// Add the email rule

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('integer', {
  ...integer,
  message: 'This field must be a numeric value'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
