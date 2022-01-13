const routes = [
  { 
    path: '/', 
    redirect: '/home'
  }, {
    path: '/home', 
    component: () => import('./pages/Home.vue'),
    redirect: '/home/hello',
    children: [{
      path: 'hello', 
      component: () => import('./components/HelloWorld.vue')
    }]
  }, {
    path: '/home/*', 
    component: () => import('./pages/Home.vue')
  }
]

export default routes