<template>
    <q-page padding>
        <p class="text-h6">User Profile</p>
        <p>
            {{ user.name }}
        </p>
    </q-page>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const user = ref({});

onMounted(() => {
    axios
        .get("/api/user")
        .then(({ data }) => (user.value = data))
        .catch((e) => console.log(e.response));
});
</script>

<style lang="scss" scoped></style>
