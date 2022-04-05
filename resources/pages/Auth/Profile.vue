<template>
    <q-page padding>
        <p class="text-h6">User Profile</p>
        <p>
            {{ user.name }}
        </p>
        <q-btn @click="logout">Logout</q-btn>
    </q-page>
</template>

<script setup>
import axios from "@/boot/axios";
import { ref, onMounted } from "vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const user = ref({});

onMounted(async () => {
    await axios
        .get("/api/user")
        .then(({ data }) => (user.value = data))
        .catch((e) => console.log(e.response));
});

const logout = () => {
    axios
        .post("logout")
        .then((response) => {
            localStorage.removeItem("userLogged");
            router.push("/");
        })
        .catch(() => {});
};
</script>

<style lang="scss" scoped></style>
