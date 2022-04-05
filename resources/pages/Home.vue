<template>
    <q-page padding>
        <div>{{ message }}</div>
    </q-page>
</template>

<script setup>
import axios from "@/boot/axios";
import { ref, onMounted } from "vue";
const message = ref();
onMounted(() => {
    axios
        .get("/api/message")
        .then(({ data }) => (message.value = data))
        .catch((e) => console.log(e.response));
});
</script>

<style lang="scss" scoped></style>
