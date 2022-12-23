const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/LandingPage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../pages/Contact.vue'),
    },
];

export default routes;
