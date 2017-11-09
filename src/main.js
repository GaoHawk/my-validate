import Vue from 'vue'
import App from './App.vue'
import validate from './lib/index.js'
import router from './router'
import Router from 'vue-router'
import MintUi from 'mint-ui'
import { sync } from 'vuex-router-sync'

Vue.use(validate);
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(MintUi)
console.log(2);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})