<script lang="ts" setup>
import { Ticket } from '@/types/ticket';
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
    ticket: {
        type: Ticket,
        required: true
    }
});
function formatUaeDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour12: false
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
}

const router = useRouter();
const goTo = (name: string, tripId: number) => {
    router.push({ name, query: {"tid": tripId} });
}

</script>

<template>
    <div class="mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mb-4">
        <div class="w-full h-45 overflow-hidden">
            <img src="/image_1.png" class="w-full">
        </div>
        <div class="w-full px-4 py-2">
            <div class="flex gap-1 items-center text-md font-semibold">
                <div class="">{{ ticket.source }}</div>
                <Icon icon="tabler:arrow-right" class="inline mx-2" />
                <div class="">{{ ticket.destination }}</div>
            </div>
        </div>
        <div class="flex justify-between items-end p-4 pt-0">
            <div class="">
                <div class="text-sm flex gap-2 items-center">
                    <Icon icon="tabler:calendar" class="inline h-6" />
                    <div class="inline text-gray-700">
                        {{ formatUaeDateTime(ticket.arrivalTime) }}
                    </div>
                </div>
                <div class="text-sm flex gap-2 items-center">
                    <Icon icon="tabler:ticket" class="inline h-6" />
                    <div class="inline text-gray-700">
                        1 ticket
                    </div>
                    <Icon icon="tabler:armchair" class="inline ml-2 h-6" />
                    <div class="inline text-gray-700">
                        {{ ticket.place }}
                    </div>
                </div>

            </div>
            <button @click="goTo('trip', ticket.id)"
            class="border border-blue-500 rounded-lg border-1 py-1 px-3 text-center text-blue-500 transition-colors">
                Details
            </button>   
        </div>
    </div>
</template>
