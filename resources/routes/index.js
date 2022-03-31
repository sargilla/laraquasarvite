import UsersRoutes from "./usersRoutes";

const MainLayout = () => import("@/layouts/MainLayout.vue");
const Home = () => import("@/pages/Home.vue");
const About = () => import("@/pages/About.vue");
const Error404 = () => import("@/pages/Error404.vue");
const routes = [
    UsersRoutes,
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "", component: Home, name: "Home" },
            { path: "about", component: About, name: "About" },
        ],
    },
    {
        path: "/:catchAll(.*)*",
        component: Error404,
    },
];
export default routes;
