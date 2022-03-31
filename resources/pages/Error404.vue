<template>
    <div
        class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
    >
        <div>
            <div style="font-size: 30vh">404</div>

            <div class="text-h2" style="opacity: 0.4">
                Ups. No encontramos nada acá...
            </div>

            <q-btn
                class="q-mt-xl"
                color="white"
                text-color="primary"
                unelevated
                label="Volver atras"
                no-caps
                @click="$router.go(-2)"
            />
        </div>
    </div>
</template>
