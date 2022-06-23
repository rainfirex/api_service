// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";

const About = () => import('../views/about/AboutPage');
const EquipmentAdd = () => import('../views/equipment-add/EquipmentAdd');
const ListEquipment = () => import('../views/equipment-list/ListEquipmentPage');
const Auth = () => import('../views/auth/AuthPage');
const Profile = () => import('../views/profile/ProfilePage');
const Registration = () => import('../views/registration/RegistrationPage');
const Equipment = () => import('../views/equipment/EquipmentPage');

const routes = [
    { path: '/', component: ListEquipment },
    { path: '/equipment/:id', component: Equipment, name: 'equipment' },
    { path: '/about', component: About, name: 'about' },
    { path: '/add-equipment', component: EquipmentAdd },
    { path: '/auth', component: Auth, name: 'auth' },
    { path: '/registration', component: Registration },
    { path: '/profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;