import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "vite-plugin-laravel";

export default defineConfig({
    plugins: [vue(), laravel()],
});
