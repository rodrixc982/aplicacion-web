// Importamos vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Importamos los componentes de las vistas
import Inicio from '../views/Inicio.vue';
import Registro from '../views/Registro.vue';

// Creamos las rutas
const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/registro', name: 'Registro', component: Registro },
];

// Creamos el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exportamos el router
export default router;
