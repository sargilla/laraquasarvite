import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "vite-plugin-laravel";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
    plugins: [
        laravel(),
        vue({
            template: { transformAssetUrls },
        }),
        quasar({
            sassVariables: "./resources/css/quasar-variables.scss",
        }),
    ],
});
