<template>
<div class="h-40 flex flex-col items-center gap-2">

    <Icon icon="tabler:loader-2" class="w-12 h-12 text-blue-500 animate-spin" />
    <div class="flex flex-col items-center text-center ">
        <div class="font-medium text-lg">
            Please wait..
        </div>
        <div>
            We are working on your booking.
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';

const emits = defineEmits(['onsubmit']);

onMounted(() => {
    setTimeout(() => {
        // Simulate booking process
        emits('onsubmit');
    }, 2000);
}); 
</script>