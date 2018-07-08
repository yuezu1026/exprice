import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import table from '@/components/table'
import chart from '@/components/chart'
import form from '@/components/form'
import empty from '@/components/empty'

import tab_panel from '@/components/tab-panel'
import ui_elements from '@/components/ui-elements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },{
      path: '/chart',
      name: 'chart',
      component: chart
    },{
      path: '/form',
      name: 'form',
      component: form
    },{
      path: '/empty',
      name: 'empty',
      component: empty
    },{
      path: '/tab_panel',
      name: 'tab_panel',
      component: tab_panel
    },{
      path: '/ui_elements',
      name: 'ui_elements',
      component: ui_elements
    }
  ]
})
