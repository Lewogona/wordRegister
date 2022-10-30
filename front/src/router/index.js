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
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
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

const DEFAULT_TITLE = 'Word Register';

router.afterEach(() => {
  Vue.nextTick(() => {
    document.title = DEFAULT_TITLE;
  });
});

export default router
