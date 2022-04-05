<template>
    <q-page class="flex flex-center q-pa-md">
        <div class="col col-md-8" style="min-width: 30rem">
            <q-card square class="shadow-24">
                <q-form @submit="onSubmit">
                    <q-card-section class="bg-primary" style="width: 100%">
                        <h4 class="text-h5 text-white q-my-md">
                            Register to My Company
                        </h4>
                        <div
                            class="absolute-bottom-right q-pr-md"
                            style="transform: translateY(50%)"
                        >
                            <q-btn
                                fab
                                icon="add"
                                color="blue-4"
                                :to="{ name: 'Register' }"
                            />
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="q-px-sm q-pt-xl">
                            <q-input
                                square
                                v-model="form.name"
                                type="text"
                                label="Name"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="person" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                v-model="form.email"
                                type="email"
                                label="Email"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="email" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                v-model="form.password"
                                type="password"
                                label="Password"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="lock" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                v-model="form.password_confirmation"
                                type="password"
                                label="Retype Password"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="lock" />
                                </template>
                            </q-input>
                        </div>
                    </q-card-section>

                    <q-card-actions class="q-px-lg">
                        <q-btn
                            unelevated
                            size="lg"
                            color="primary"
                            class="full-width text-white"
                            label="Get Started"
                            type="submit"
                        />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-sm">
                        <q-btn :to="{ name: 'Login' }" class="text-grey-6" flat>
                            Return to login
                        </q-btn>
                    </q-card-section>
                </q-form>
            </q-card>
        </div>
    </q-page>
</template>
<script setup>
import axios from "@/boot/axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const onSubmit = async () => {
    await axios.get("/sanctum/csrf-cookie");
    await axios.post("/register", form.value).then((response) => {
        router.push("/profile");
    });
};
</script>
