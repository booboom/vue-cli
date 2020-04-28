import Vue from 'vue'
import Router from 'vue-router'
// import NotFound from 'views/404.vue'
// import store from '@/store/index'
// import Auth from './auth'

import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/helloWorld',
        component: HelloWorld
    }
]

Vue.use(Router)
let router = new Router({
    scrollBehavior() {
        return { y: 0 }
    },
    routes
})
// router.beforeEach((to, from, next) => {
//     const { user = {}, menu } = store.state
//     const { meta: { permission = '' }, path } = to
//     // 未登录
//     if (!user || !user.accountName) {
//         Auth.userLogin(path)
//             .then((menuItem) => {
//                 if (menuItem) {
//                     next(menuItem.url)
//                 } else {
//                     next('/404/deny')
//                 }
//             })
//     } else {
//         if (path === '/') {
//             Auth.initIndexPath(menu.menuList, (item) => {
//                 next(item.url)
//             })
//         } else {
//             if (menu.routerPermission[permission]) {
//                 next()
//             } else {
//                 next('/404/deny')
//             }
//         }
//     }
// })
export default router