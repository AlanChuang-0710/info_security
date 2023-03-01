import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {path: '/Member',name: 'Member', component: () => import('@/views/Member.vue')},
      {path: '/Dashboard',name: 'Dashboard', component: () => import('@/views/Dashboard.vue')},
      {path: '/Dashboard2',name: 'Dashboard2', component: () => import('@/views/Dashboard2.vue')},
      {path: '/Dashboard3',name: 'Dashboard3', component: () => import('@/views/Dashboard3.vue')},
      {path: '/Dashboard4',name: 'Dashboard4', component: () => import('@/views/Dashboard4.vue')},
      {path: '/Dashboard5',name: 'Dashboard5', component: () => import('@/views/Dashboard5.vue')},
      {path: '/ProjectList',name: 'ProjectList', component: () => import('@/views/portfolio/projects/ProjectList.vue')},
      {
        path: '/Vulnerabilities',
        name: 'Vulnerabilities',
        component: () => import('@/views/portfolio/vulnerabilities/VulnerabilityList.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes
})

export default router
