<template>
    <q-page padding>
        <h6 class="text-h6">Forms</h6>

        <div class="q-pa-md" style="max-width: 300px">
            <div class="q-gutter-md">
                <q-field
                    filled
                    v-model="price"
                    label="Price with v-money directive"
                    hint="Mask: $ #,###.00 #"
                >
                    <template
                        v-slot:control="{
                            id,
                            floatingLabel,
                            modelValue,
                            emitValue,
                        }"
                    >
                        <input
                            :id="id"
                            class="q-field__input text-right"
                            :value="modelValue"
                            @change="(e) => emitValue(e.target.value)"
                            v-money="moneyFormatForDirective"
                            v-show="floatingLabel"
                        />
                    </template>
                </q-field>
            </div>
        </div>
    </q-page>
</template>
<script setup>
import { ref } from "vue";

const price = ref(0.0);
const moneyFormatForDirective = {
    decimal: ".",
    thousands: ",",
    prefix: "$ ",
    suffix: "",
    precision: 2,
    masked: false /* doesn't work with directive */,
};
</script>
