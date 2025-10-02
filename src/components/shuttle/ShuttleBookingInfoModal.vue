<template>
<ModalWindowLayout v-model="show">
    <div class="flex flex-col gap-4 p-4 ">
        <div class="text-lg font-medium flex items-center">
            <div class="bg-gray-100 p-2 rounded-md mr-4" @click="show = false">
                <Icon icon="tabler:arrow-left" class="w-4 text-gray-600" />
            </div>
            <div>Shuttle Details</div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 text-gray-700">
                <Icon icon="tabler:users-group" class="w-6 h-6" />
                5/8 seats booked
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div class="text-lg">Schedule</div>

            <div class="flex flex-col gap-2">
                <div v-for="(item, index) in scheduleExample" :key="`schedule-item-${index}`" class="flex justify-between items-center">
                    
                    <div class="text-gray-700">
                        <Icon icon="tabler:circle" class="w-3 h-3 text-gray-500 inline mr-1 flex " />
                    {{ item.title }}</div>
                    <div class="text-gray-500">{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</ModalWindowLayout>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import ModalWindowLayout from '../layouts/ModalWindowLayout.vue';
import { defineModel } from 'vue';

const show = defineModel({
    type: Boolean,
    required: true,
})

const scheduleExample = [
    { time: '08:12 AM', title: '3  person' },
    { time: '08:17 AM', title: '1 person' },
    { time: '08:20 AM', title: 'You' },
    { time: '08:29 AM', title: '2 persons' },
    { time: '09:00 AM', title: 'Etihad Rail Station' },
]
</script>