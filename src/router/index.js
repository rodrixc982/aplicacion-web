// Importamos vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Importamos los componentes de las vistas
import Inicio from '@/views/Inicio.vue';
import Registro from '@/views/Registro.vue';
import IniciarSesion from '@/views/IniciarSesion.vue';
import Dashboard from '@/views/Dashboard.vue';

// Creamos las rutas
const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/registro', name: 'Registro', component: Registro },
  { path: '/iniciarSesion', name: 'IniciarSesion', component: IniciarSesion },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

// Creamos el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exportamos el router
export default router;
