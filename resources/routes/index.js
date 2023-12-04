import UsersRoutes from './usersRoutes';

const AuthLayout = () => import("@/layouts/AuthLayout.vue");
const MainLayout = () => import("@/layouts/MainLayout.vue");
const Home = () => import("@/pages/Home.vue");
const About = () => import("@/pages/About.vue");
const Forms = () => import("@/pages/Forms.vue");

const Login = () => import("@/pages/Auth/Login.vue");
const Profile = () => import("@/pages/Auth/Profile.vue");
const Register = () => import("@/pages/Auth/Register.vue");

const Error404 = () => import("@/pages/Error404.vue");
const routes = [
    UsersRoutes,
    {
        /* Root Routes */
        path: "/",
        component: MainLayout,
        children: [
            { path: "", component: Home, name: "Home" },
            { path: "about", component: About, name: "About" },
            { path: "forms", component: Forms, name: "Forms" },
            { path: "login", component: Login, name: "Login" },
            {
                path: "profile",
                component: Profile,
                name: "Profile",
                meta: { requiresAuth: true },
            },
            { path: "register", component: Register, name: "Register" },
        ],
    },
    {
        /* Auth Routes */
        path: "/",
        component: AuthLayout,
        children: [
            { path: "login", component: Login, name: "Login" },
            { path: "register", component: Register, name: "Register" },
        ],
    },
    {
        path: "/:catchAll(.*)*",
        component: Error404,
    },
];
export default routes;
