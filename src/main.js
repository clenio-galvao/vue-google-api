import Vue from 'vue'
import App from './App.vue'
import VueGoogleApi from '../index.js'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './auth'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBmDYldi1QZqj8mtx8gAcBx9jSdmqNeduk',
  clientId: '355107773529-cmm7kldqh7tc1kd8ghcactptun6stnt0.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/contacts',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/people/v1/rest']
}
Vue.use(VueGoogleApi, config)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
