import Vue from 'vue'
import Router from 'vue-router'
import ColorsPage from './views/Colors/ColorsPage';
import ColorsPageAdd from './views/Colors/ColorsPageAdd';
import ColorsPageUpdate from "@/views/Colors/ColorsPageUpdate";
import CostumesPage from "@/views/Costumes/CostumesPage";
import CostumesPageAdd from "@/views/Costumes/CostumesPageAdd";
import CostumesPageUpdate from "@/views/Costumes/CostumesPageUpdate";
import PatternsPage from "@/views/Patterns/PatternsPage";
import PatternsPageAdd from "@/views/Patterns/PatternsPageAdd";
import PatternsPageUpdate from "@/views/Patterns/PatternsPageUpdate";
import DucksPage from "@/views/Ducks/DucksPage";
import DucksPageAdd from "@/views/Ducks/DucksPageAdd";
import DucksPageUpdate from "@/views/Ducks/DucksPageUpdate";
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
            path: '/colorspageupdate/:colorId',
            name: 'colorspageupdate',
            component: ColorsPageUpdate
        },
        {
            path: '/costumespage',
            name: 'costumespage',
            component: CostumesPage
        },
        {
            path: '/costumespageadd',
            name: 'costumespageadd',
            component: CostumesPageAdd
        },
        {
            path: '/costumespageupdate/:costumeId',
            name: 'costumespageupdate',
            component: CostumesPageUpdate
        },
        {
            path: '/patternspage',
            name: 'patternspage',
            component: PatternsPage
        },
        {
            path: '/patternspageadd',
            name: 'patternspageadd',
            component: PatternsPageAdd
        },
        {
            path: '/patternspageupdate/:patternId',
            name: 'patternspageupdate',
            component: PatternsPageUpdate
        },
        {
            path: '/duckspage',
            name: 'duckspage',
            component: DucksPage
        },
        {
            path: '/duckspageadd',
            name: 'duckspageadd',
            component: DucksPageAdd
        },
        {
            path: '/duckspageupdate/:duckId',
            name: 'duckspageupdate',
            component: DucksPageUpdate
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ]
})