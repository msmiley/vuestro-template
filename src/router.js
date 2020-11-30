/* global Vue */
import Router from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Sidebar from './pages/Sidebar.vue';
import Links from './pages/Links.vue';
import Table from './pages/Table.vue';
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
        title: 'Sidebar',
        sidebar: true,
        icon: 'cubes',
      },
      name: 'sidebar',
      path: '/sidebar',
      component: Sidebar,
    },
    {
      meta: {
        title: 'Table',
        sidebar: true,
        icon: 'table',
      },
      name: 'table',
      path: '/table',
      component: Table,
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

