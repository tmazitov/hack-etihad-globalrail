<template>
<div class="underline">
    <div class="flex gap-2 text-gray-700" v-if="loading">
        <Icon icon="tabler:loader" class="w-6 h-6 animate-spin" />
        <div>
            Loading shuttle information...
        </div>
    </div>
    <div class="flex gap-2 text-gray-700" v-else @click="showShuttleDetails = true" style="cursor: pointer;">
        <Icon icon="tabler:bus" class="w-6 h-6" />
        <div>
            Your shuttle will pick you up at 8:20 AM.
        </div>
    </div>
</div>
<ShuttleBookingInfoModal v-model="showShuttleDetails" />

</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import ShuttleBookingInfoModal from './ShuttleBookingInfoModal.vue';
const showShuttleDetails = ref(false);

const loading = ref(true);
setTimeout(() => {
    loading.value = false;
}, 2500);

</script>
