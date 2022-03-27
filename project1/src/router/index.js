import {createRouter, createWebHashHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home = () => import('../App.vue')


const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: '/index',
        name: 'index',
        component: () => import('../components/index/IndexPage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/users/LoginPage.vue')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../components/users/RegisterPage.vue')
    },
    {
        path: '/users/:id',
        component: () => import('../components/users/Users_index.vue'),
        children: [
            {
                path: 'collection',
                name: 'collection',
                component: () => import('../components/users/CollectionPage.vue')
            },
            {
                path: 'regular',
                name: 'regular',
                component: () => import('../components/users/RegularPage.vue')
            },
            {
                path: 'feedback',
                name: 'feedback',
                component: () => import('../components/users/FeedbackPage.vue')
            }


        ]
    },
    {
        path: '/books', name: 'books', component: () => import('../components/book/BooksPage.vue')
    },

    {
        path: '/map', name: 'map', component: () => import('../components/map/MapPage.vue'),
        children: [{
            path: 'Bmap',
            name: 'Bmap',
            component: () => import('../components/map/BMAPPAGE.vue')
        }]
    },

    {
        path: '/yangsheng', name: 'yangsheng', component: () => import('../components/yangsheng/YSPage.vue'),

    },

    {
        path: '/jsys/:id', component: () => import('../components/yangsheng/JSYSPage.vue'),

    },

    {
        path: '/qiwu', name: 'qiwu', component: () => import('../components/qiwu/QWPage.vue'),

    },

    {
        path: '/qiwudetail/:id',
        name: 'qiwudetail',
        component: () => import('../components/qiwu/QWPageSon.vue')

    },

    {
        path: '/test', name: 'test', component: () => import('../components/test/TestPage.vue'),
        children: [{
            path: 'test_ys',
            name: 'test_ys',
            component: () => import('../components/test/Test_ys.vue')
        },
            {
                path: 'test_culture',
                name: 'test_culture',
                component: () => import('../components/test/Test_culture.vue')
            },
            {
                path: 'test_qw',
                name: 'test_qw',
                component: () => import('../components/test/Test_qw.vue')
            }
        ]
    },

    {
        path: '/culture', name: 'culture', component: () => import('../components/culture/CulturePage.vue'),
        children: [{
            path: 'CPage',
            name: 'CPage',
            component: () => import('../components/culture/CPage1.vue')
        }
        ]
    },

    {
        path: '/CPageSon/:id',
        name: 'CPageSon',
        component: () => import('../components/culture/CPageSon.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

export default router
