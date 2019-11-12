import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  scrollBehavior (to) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop, behavior: 'smooth'
      })
    }

    return window.scrollTo({
      top: 0, behavior: 'smooth'
    })
  },
  routes: [
    {
      path: '/',
      name: 'hello',
      component: require('../pages/hello.vue').default,
      meta: {
        title: 'O2System Framework'
      }
    }
  ]
})

Router.afterEach((to) => {
  document.title = to.meta.title
})

export default Router
