<template>
<div class="flex flex-col gap-4">
    Price : 15 AED

    <button class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" 
    @click="$emit('onsubmit')">
        Proceed to Payment
    </button>
</div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['onsubmit']);
</script>