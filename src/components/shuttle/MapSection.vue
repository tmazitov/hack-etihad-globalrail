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

    <div class="flex border border-gray-200 rounded-lg overflow-hidden">
        <div class="item p-2 flex-1 text-center font-medium" 
        v-for="(option, index) in options" 
        :key="option"
         @click="selected = index"
        v-bind:class="{
            'bg-blue-500 text-white': selected === index,
            'cursor-pointer hover:bg-gray-200 text-gray-700': selected !== index
        }">
            {{ option }}
        </div>
    </div>
    {{ messages[selected] }}

    <button class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" 
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

const selected = ref(0);

const options = [
    'Ride with me',
    'Take me',
    'Self-driving car'
]

const messages = [
    'You will be the driver of the shuttle. You will receive a 7 AED cashback.',
    'A driver will take you to your destination.',
    'The shuttle will drive autonomously.'
]
</script>

<style scoped>

.item + .item {
    border-left: 1px solid #d1d5db; /* Tailwind's gray-300 */
}

</style>