require('./bootstrap');

import Vue from 'vue'
import router from './router'
import auth from './mixins/auth'

import Application from './components/Application/template.vue'

Vue.mixin(auth)


new Vue({
    router,
    render: h => h(Application)
}).$mount('#app')
