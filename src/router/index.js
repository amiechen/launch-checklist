import Vue from 'vue';
import Router from 'vue-router';
import Title from '@/components/Title';
import SidePanel from '@/components/SidePanel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title,
    },
    {
      path: '/',
      name: 'SidePanel',
      component: SidePanel,
    },
  ],
});
