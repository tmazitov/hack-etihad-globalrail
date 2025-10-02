<!-- filepath: src/pages/Home.vue -->
<template>
    <div class="bg-white border-b border-gray-300 h-[40vh] overflow-hidden flex items-center justify-center">
        <img src="/image.png" class="w-full h-full object-cover" />
    </div> 
    <PageLayout v-if="trip">
        <template #header>
            <div class="flex gap-1 items-center text-lg font-semibold">
                <div class="bg-gray-100 p-2 rounded-md mr-4" @click="moveTo">
                    <Icon icon="tabler:arrow-left" class="w-4 text-gray-600" />
                </div>

                <div class="font-xl">{{ trip.source }}</div>
                <Icon icon="tabler:arrow-right" class="inline mx-2 text-gray-600" />
                <div class="font-xl">{{ trip.destination }}</div>
            </div>
        </template>
        <template #default>


            <div class="mb-4 flex flex-col gap-1">
                <div class="text-lg flex gap-2 items-center">
                    <Icon icon="tabler:calendar-event" class="h-6" />
                    <div class=" text-gray-700">
                        {{ formatUaeDateTime(trip.arrivalTime) }}
                    </div>
                </div>
                <div class="text-lg flex gap-2 items-center">
                    <Icon icon="tabler:ticket" class="h-6" />
                    <div class=" text-gray-700">
                        1 ticket
                    </div>
                    <Icon icon="tabler:armchair" class="ml-4 h-6" />
                    <div class=" text-gray-700">
                        {{ trip.place }}
                    </div>
                </div>
                <ShuttleBookingInfo v-if="showShuttleInfo" />
            </div>

            <div class="border border-gray-300 rounded-lg mb-4 bg-white  relative">

                <div class="text-lg p-4 pt-3 font-medium">4th carriage</div>

                <div class="grid grid-flow-col grid-rows-2 gap-x-2.5 w-full gap-y-6 px-4 mb-4 pt-0 relative">
                    <div 
                        v-for="seatPair in 16" 
                        :key="`${seatPair}-seat-pair`" 
                        class="flex flex-col gap-1 w-fit"
                    >
                        <div class="p-1 text-sm w-7 rounded-sm select-none text-center" v-for="seat in 2"
                        v-bind:class="{
                            'bg-blue-500 text-white': getSeatLabel(Math.floor((seatPair - 1) / 2), seat, seatPair) == trip.place,
                            'bg-gray-200 text-black' : getSeatLabel(Math.floor((seatPair - 1) / 2), seat, seatPair) != trip.place,
                        }"
                        :key="`${seat}-seat`">
                            {{  getSeatLabel(Math.floor((seatPair - 1) / 2), seat, seatPair)}}
                        </div>
                    </div>
                    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-300 rounded-r-md"></div>
                    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-300 rounded-l-md"></div>
                </div>

            </div>

            <div class="border border-gray-300 rounded-lg mb-4 bg-white ">
                <div class="text-lg font-semibold py-2 px-4">Services</div>

                <div class="flex flex-col">
                    <div v-for="item in additional" :key="item.lable" class="item flex items-center gap-4 p-2 pl-4"
                    @click="item.click ? item.click() : null">
                        <Icon :icon="item.icon" class="w-5 h-5 text-gray-700" />
                        <div class="text-gray-700 select-none">{{ item.lable }}</div>
                    </div>  
                </div>
            </div>
        </template>
    </PageLayout>

    <ShuttleBookingModal v-model="showShuttleBooking" 
        @on-completed="shuttleBookingCompleted"/>

</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import PageLayout from "../components/layouts/PageLayout.vue";
import { tickets } from "@/data/tickets";
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import ShuttleBookingModal from "@/components/shuttle/ShuttleBookingModal.vue";
import ShuttleBookingInfo from "@/components/shuttle/ShuttleBookingInfo.vue";

const route = useRoute()
const trip = computed(() => {
    const rawTripId = route.query["tid"]
    const tripId = Number(rawTripId);
    if (tripId === undefined || isNaN(tripId)) {
        return undefined
    }
    return tickets.find(t => t.id === tripId);
})

const router = useRouter();
const moveTo = () => {
    router.push({ name: 'home' });
}

const showShuttleBooking = ref(false);
const openShuttleBooking = () => {
    showShuttleBooking.value = true;
}
const showShuttleInfo = ref(localStorage.getItem('shuttleBooked') === 'true');
const shuttleBookingCompleted = () => {
    localStorage.setItem('shuttleBooked', 'true');
    setTimeout(() => {
        showShuttleInfo.value = true;
    }, 500);
}

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
const additional = [
    {icon: "tabler:rv-truck", lable: "Book a Shuttle", click: openShuttleBooking},
    {icon: "tabler:tools-kitchen-2", lable: "Order Food to Seat"},
    {icon: "tabler:calendar", lable: "Add to the Calendar"},
    {icon: "tabler:headset", lable: "Contact Support"},
]

function getSeatLabel(row: number, seat: number, seatPair: number): string {
    const letters = ['A', 'B', 'C', 'D']
    let seatLetter = null
    if (seatPair % 2 == 1 && seat == 1) {
        seatLetter = 'A'
    } else if (seatPair % 2 == 1 && seat == 2) {
        seatLetter = 'B'
    } else if (seatPair % 2 == 0 && seat == 1) {
        seatLetter = 'C'
    } else if (seatPair % 2 == 0 && seat == 2) {
        seatLetter = 'D'
    }
    return `${row+1}${seatLetter}`;
}


</script>   

<style scoped>
.item + .item {
    border-top: 1px solid #e5e7eb; /* Tailwind's gray-300 */
    padding-top: 0.5rem; /* 2 */
}

</style>