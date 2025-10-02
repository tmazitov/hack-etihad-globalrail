<template>
<div class="flex flex-col gap-4">
    <div class="border border-gray-200 rounded-lg bg-gray-100 h-50">
        <img src="/image_2.png" alt="Map" class="w-full h-50 object-cover rounded-lg"/>
    </div>

    <div class="relative input">
        <input type="text" placeholder="Enter your location" v-model="location"
        class="w-full border border-gray-300 rounded-md py-1.5 pl-9 px-3 ">
        </input>
        <div class="absolute top-2 left-2 z-1">
            <Icon icon="tabler:map-pin" class="w-5 h-5 text-gray-400" />
        </div>
    </div>

    <button 
        class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" 
        :class="{'': location, 'opacity-50 cursor-not-allowed': !location}" 
        :disabled="!location" @click="$emit('onsubmit')">
        Proceed
    </button>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const location = ref('');
const emits = defineEmits(['onsubmit']);

</script>