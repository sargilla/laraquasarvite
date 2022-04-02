<template>
    <q-layout view="hHh lpR lFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img
                            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                        />
                    </q-avatar>
                    App
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <q-scroll-area class="fit">
                <q-list padding class="text-grey-8">
                    <q-item v-ripple clickable :to="{ name: 'Home' }">
                        <q-item-section>
                            <q-item-label>Home</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list padding class="text-grey-8">
                    <q-item v-ripple clickable :to="{ name: 'About' }">
                        <q-item-section>
                            <q-item-label>About</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list padding class="text-grey-8">
                    <q-item v-ripple clickable :to="{ name: 'Users' }">
                        <q-item-section>
                            <q-item-label>Users</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list padding class="text-grey-8">
                    <q-item v-ripple clickable :to="{ name: 'Profile' }">
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <!-- <q-avatar>
                            <img
                                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                            />
                        </q-avatar> -->
                    <div>App</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const leftDrawerOpen = ref(false);
const route = useRouter();

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style lang="scss" scoped></style>
