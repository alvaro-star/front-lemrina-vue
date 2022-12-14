import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TurmaView from '../views/TurmaView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TurmaView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  //Lista de Paths de Turmas
  {
    path: '/turmas',
    name: 'turmas',
    component: () => import('../views/TurmaView.vue')
  },
  {
    path: '/turmas/create',
    name: 'turmaCreate',
    component: () => import('../pages/turmas/TurmaForm.vue')
  },
  //Lista de Paths de Repositorios
  {
    path: '/repositorios',
    name: 'repositorios',
    component: () => import('../pages/repositorios/RepositorioIndex.vue')
  },
  {
    path: '/repositorio/formulario',
    name: 'repositorioCreate',
    component: () => import('../pages/repositorios/RepositorioForm.vue')
  },
  //Lista de Paths de Conteudos
  {
    path: '/conteudos',
    name: 'conteudos',
    component: () => import('../components/Breve.vue')
  },
  //Lista de Paths de Arquivos
  {
    path: '/arquivos',
    name: 'arquivos',
    component: () => import('../components/Breve.vue')
  },
  //Lista de Paths de Feedbacks
  {
    path: '/feedbacks',
    name: 'feedbacks',
    component: () => import('../components/Breve.vue')
  },
  //Lista de Paths de usuarios
  {
    path: '/usuarios/login',
    name: 'loginUsuario',
    component: () => import('../pages/usuarios/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
