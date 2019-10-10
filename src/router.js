import Vue from 'vue'
import Router from 'vue-router'
import ColorsPage from './Colors/ColorsPage'
import ColorsPageAdd from './Colors/ColorsPageAdd'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/colorspage',
            name: 'colorspage',
            component: ColorsPage
        },
        {
            path: '/colorspageadd',
            name: 'colorspageadd',
            component: ColorsPageAdd
        }
    ]
})