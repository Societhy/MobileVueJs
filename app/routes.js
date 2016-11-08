export default [
    {
        path: '/login',
        name: 'login',
        component: require('./components/login.vue')
    },
    {
        path: '/',
        name: 'register',
        component: require('./components/register.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: require('./components/test.vue')
    },
    {
        path: '/profil',
        name: 'profil',
        component: require('./components/profil.vue')
    }

]