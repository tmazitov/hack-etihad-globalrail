<template>
    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
        <div class="">
            <img class="w-full" :src="imagePath" alt="Card image" />
        </div>
        <div class="px-4 py-4">
            <div class="header flex gap-2 items-center">
                <div class="font-bold text-xl">{{ title }} </div>
                <div>{{ price }}</div>
            </div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
});
</script>