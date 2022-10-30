import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddSession from '../views/AddSession'
import AddProject from '../views/AddProject'
import AddEvent from '../views/AddEvent'
import NanoStatistics from '../views/NanoStatistics'
import AllProjects from '../views/AllProjects'
import NanoGraphics from '../views/NanoGraphics'
import ProjectPage from '../views/ProjectPage'
import UserPage from '../views/UserPage'
import LoginPage from '../views/LoginPage'
import SignupPage from '../views/SignupPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'home',
    component: SignupPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/addsession',
    name: 'addsession',
    component: AddSession
  },  
  {
    path: '/addproject',
    name: 'addproject',
    component: AddProject
  },
  {
    path: '/addevent',
    name: 'addevent',
    component: AddEvent
  },
  {
    path: '/nanostatistics',
    name: 'nanostatistics',
    component: NanoStatistics
  },
  {
    path: '/allprojects',
    name: 'allprojects',
    component: AllProjects
  },
  {
    path: '/nanographics',
    name: 'nanographics',
    component: NanoGraphics
  },  
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: UserPage
  },
]

const router = new VueRouter({
  routes
})

export default router
