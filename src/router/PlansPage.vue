<template>
<PageLayout>
    <template #header>
        <div class="flex gap-2">
            <div class="bg-gray-100 p-2 rounded-md mr-4" @click="router.back()">
                <Icon icon="tabler:arrow-left" class="w-4 text-gray-600" />
            </div>
            <h1 class="text-2xl font-bold">Update Plan</h1>
        </div>
    </template>

    <template #default>
        <PlanCard v-for="plan in plans" :key="plan.title"
            @click="() => selectedPlanHandler(plan)"
            class="mb-4"
            :title="plan.title"
            :price="plan.price"
            :image-path="plan.imagePath"
            :description="plan.description"/>
    </template>
</PageLayout>

<PlanSubscriptionModal v-model="showSubscriptionModal" :plan="selectedPlan"
@onsubmit="submitHandler"/>
</template>

<script lang="ts" setup>
import PageLayout from '@/components/layouts/PageLayout.vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import PlanCard from '@/components/plan/PlanCard.vue';
import plans from '@/data/plans';
import { ref } from 'vue';
import PlanSubscriptionModal from '@/components/plan/PlanSubscriptionModal.vue';
import type Plan from '@/types/plan';
const router = useRouter();

const selectedPlan = ref<undefined | Plan>(undefined);
const showSubscriptionModal = ref(false);
const selectedPlanHandler = (plan: Plan) => {
    selectedPlan.value = plan;
    showSubscriptionModal.value = true;
}
const submitHandler = () => {
    if (selectedPlan.value) {
        localStorage.setItem('selectedPlan', String(selectedPlan.value.id));
    }
    showSubscriptionModal.value = false;
}
</script>