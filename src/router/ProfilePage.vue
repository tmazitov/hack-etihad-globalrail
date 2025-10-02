<!-- filepath: src/pages/Home.vue -->
<template>
    <PageLayout title="">
        <div class="flex-col gap-4 mt-6">

            <div class="flex flex-col items-center mb-6">
                <div class="border border-gray-300 rounded-full w-38 h-38 flex items-center justify-center mb-2">
                    <img src="/arab.png" class="w-full h-full rounded-full" />
                </div>
                <div class="text-lg font-medium">Said Al Mansuri</div>
                <div class="text-md"> {{planName}}</div>
            </div>
            
            <div class="flex flex-col border border-gray-200 rounded-lg">
                <div class="flex flex-col">
                    <div v-for="item in settings" :key="item.lable" :class="`text-gray-700 item flex items-center gap-4 p-2 pl-4 ${item.class}`"
                    @click="item.click ? item.click() : null">
                        <Icon :icon="item.icon" class="w-5 h-5 " />
                        <div class="select-none">{{ item.lable }}</div>
                    </div>  
                </div>
            </div>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import PageLayout from "../components/layouts/PageLayout.vue";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import plans from "@/data/plans";

const router = useRouter();

const logoutHandler = () => {
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('shuttleBooked')
    router.push({ name: 'welcome' })
}

const settings = [
    { icon: 'tabler:id', lable: 'Update Plan' , click: () => { router.push({ name: 'plans' }) } },
    { icon: 'tabler:user', lable: 'Personal Information' },
    { icon: 'tabler:settings', lable: 'Account Settings' },
    { icon: 'tabler:help-circle', lable: 'Help & Support' },
    { icon: 'tabler:logout', lable: 'Log Out', click: logoutHandler, class: 'text-red-500' },
]

const savedPlanId = localStorage.getItem('selectedPlan');
const planName = computed(() => {
    if (!savedPlanId) {
        return 'Basic Plan';
    }

    const planId = Number(savedPlanId);
    const plan = plans.find(p => p.id === planId);
    if (plan) {
        return plan.title;
    }

    return 'Basic Plan';
})

</script>

<style scoped>
.item + .item {
    border-top: 1px solid #e5e7eb; /* Tailwind's gray-300 */
    padding-top: 0.5rem; /* 2 */
}

</style>