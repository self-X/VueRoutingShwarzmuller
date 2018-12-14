import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {
        selector: to.hash  //#data
      };
    }
    return {
      x: 0,
      y: 0,
    }
  }
});
///execute before each routing action [for Guard]
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
  //next(false); or path
  //next('/'); 
  //next({}); 
});
router.afterEach() ///execute after each routing action [for Guard]

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
