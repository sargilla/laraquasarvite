const MainLayout = () => import("@/layouts/MainLayout.vue");
const Users = () => import("@/pages/Users/UsersIndex.vue");

let UsersRoutes = {
    path: "/users",
    component: MainLayout,
    children: [{ path: "", component: Users, name: "Users" }],
    meta: { requiresAuth: true },
};

export default UsersRoutes;
