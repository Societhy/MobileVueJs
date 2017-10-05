  /**
  * Managment of the route
  * @module App Route
  */
export default [
    {
        path: '/',
        name: 'login',
        props: true,
        component: require('./components/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        props: true,
        component: require('./components/register.vue')
    },
    {
        path: '/profil',
        name: 'profil',
        props: true,
        component: require('./components/profil.vue')
    },
    {
        path: '/orgaProfil',
        name: 'orgaProfil',
        props: true,
        component: require('./components/orgaProfil.vue')
    },
    {
        path: '/allOrga',
        name: 'allOrga',
        props: true,
        component: require('./components/allOrga.vue')
    },
     {
        path: '/searchS',
        name: 'searchS',
        props: true,
        component: require('./components/searchS.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        props: true,
        component: require('./components/chat.vue')
    },
    {
        path: '/projectProfil',
        name : 'projectProfil',
        props: true,
        component: require('./components/projectProfil.vue')
    },
    {
        path: '/createNews',
        name : 'createNews',
        props: true,
        component: require('./components/createNews.vue')
    },
    {
        path: '/notification',
        name : 'notification',
        props: true,
        component: require('./components/notification.vue')
    }
]