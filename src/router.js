import Vue from 'vue';
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ProjectInfoPage from './pages/ProjectInfoPage'

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage,
    },
    {
        path:'/project',
        name: 'project-page',
        component: ProjectInfoPage
    }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: routes
})
export default router