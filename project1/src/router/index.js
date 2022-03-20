import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home=()=>import('../App.vue')





const routes = [
  { path: '/', name: 'home', component: Home},
  {
    path:'/index',
    name: 'index',
    component:()=>import('../components/index/IndexPage.vue')
  },
  {
    path:'/login',
    name: 'login',
    component:()=>import('../components/users/LoginPage.vue')
  },

  {
    path:'/register',
    name: 'register',
    component:()=>import('../components/users/RegisterPage.vue')
  },
  {
    path:'/users/:id',
    component:()=>import('../components/users/Users_index.vue'),
    children:[
      {
        path:'collection',
        name: 'collection',
        component:()=>import('../components/users/CollectionPage.vue')
      }
    ]
  },
  {
    path: '/books', name: 'books', component:()=>import('../components/book/BooksPage.vue')
  },

  {
    path: '/map', name: 'map', component:()=>import('../components/map/MapPage.vue')
  },

  {
    path: '/yangsheng', name: 'yangsheng', component:()=>import('../components/yangsheng/YSPage.vue')
  },

  {
    path: '/qiwu', name: 'qiwu', component:()=>import('../components/qiwu/QWPage.vue')
  },

  {
    path: '/test', name: 'test', component:()=>import('../components/test/TestPage.vue')
  },

  {
    path: '/culture', name: 'culture', component:()=>import('../components/culture/CulturePage.vue')
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
