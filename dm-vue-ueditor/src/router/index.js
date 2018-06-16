import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Demo1 from '@/pages/Demo1'
import ueditor from '@/pages/ueditor_demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ueditor',
      name: 'ueditor',
      component: ueditor
    }, {
      path: '/hi',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/demo',
      name: 'Demo1',
      component: Demo1
    }
  ]
})
