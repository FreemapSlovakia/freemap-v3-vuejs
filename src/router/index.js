import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:zoom/:lat/:lon/',
      name: 'home',
      component: home,
      props: true
    },
    {
      path: '/',
      name: 'home-without-params',
      component: home,
    }
  ],
  
})
