import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(
                /*webpackChunkName: "HandlerLayout"*/
                '../layouts/_handler/template.vue'
            ),
            children: routes
        },
    ]
})
