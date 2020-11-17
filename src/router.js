/* global Vue */
import Router from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Objects from './pages/Objects.vue';
import Links from './pages/Links.vue';
import Settings from './pages/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      meta: {
        title: 'Dashboard',
        sidebar: true,
        icon: 'tachometer-alt',
      },
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      meta: {
        title: 'Objects',
        sidebar: true,
        icon: 'cubes',
      },
      name: 'objects',
      path: '/objects',
      component: Objects,
    },
    {
      meta: {
        title: 'Links',
        sidebar: true,
        icon: 'project-diagram',
      },
      name: 'links',
      path: '/links',
      component: Links,
    },
    {
      meta: {
        title: 'Settings',
        sidebarBottom: true,
        icon: 'cogs',
        bgColor: 'var(--vuestro-indigo)',
      },
      name: 'settings',
      path: '/settings',
      component: Settings,
    },
    { path: '/*', redirect: '/dashboard' } // redirect to dashboard
  ],
});

