import Vue from 'vue'
import Router from 'vue-router'
import ColorsPage from './Colors/ColorsPage'
import ColorsPageAdd from './Colors/ColorsPageAdd'
import CostumesPage from "@/Costumes/CostumesPage";
import PatternsPage from "@/Patterns/PatternsPage";
import DucksPage from "@/Ducks/DucksPage";
import Admin from "@/Admin";

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
        },
        {
            path: '/costumespage',
            name: 'costumespage',
            component: CostumesPage
        },
        {
            path: '/patternspage',
            name: 'patternspage',
            component: PatternsPage
        },
        {
            path: '/duckspage',
            name: 'duckspage',
            component: DucksPage
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ]
})