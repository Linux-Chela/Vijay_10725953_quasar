
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'hobbies', component: () => import('pages/MineHobbies.vue') },
      { path: 'intro', component: () => import('pages/MyIntroduction.vue') },
      { path: 'skills', component: () => import('pages/TechnicalSkills.vue') },
    ]
  },
   
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
