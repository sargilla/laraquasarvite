const Login = () => import("@/pages/Auth/Login.vue");
const Profile = () => import("@/pages/Auth/Profile.vue");
const Register = () => import("@/pages/Auth/Register.vue");
const MainLayout = () => import("@/layouts/MainLayout.vue");

let AuthRoutes = {
    path: "/user",
    component: MainLayout,
    children: [
        { path: "login", component: Login, name: "Login" },
        {
            path: "profile",
            component: Profile,
            name: "Profile",
            meta: { requiresAuth: true },
        },
        { path: "register", component: Register, name: "Register" },
    ],
};

export default AuthRoutes;
