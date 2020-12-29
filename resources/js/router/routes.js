import auth from './middlewares/auth'
import guest from './middlewares/guest'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'auth'
        }
    },
    {
        path: '/auth',
        component: () => import(
            /*webpackChunkName: "AuthView"*/
            '../views/auth/template.vue'
        ),
        name: 'auth',
        beforeEnter: guest,
        meta: {
            layout: 'default',
            title: 'Acceso'
        }
    },
    {
        path: '/home',
        component: () => import(
            /*webpackChunkName: "HomeView"*/
            '../views/home/template.vue'
        ),
        beforeEnter: auth,
        name: 'home',
        meta: {
            layout: 'dash',
            title: 'Panel'
        }
    }
]

export default routes


