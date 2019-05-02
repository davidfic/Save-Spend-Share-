import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chores from './components/Chores'
import WishlistsView from './views/WishlistsView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wishlists',
      name: 'wishlistsview',
      component: WishlistsView
    },
    {
      path: '/chores',
      name: 'chores',
      component: Chores
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
