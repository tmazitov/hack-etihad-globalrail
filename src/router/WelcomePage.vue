<template>
    <PageLayout title="" without-footer without-header>
        <div class="flex flex-col items-center h-[100vh] justify-center mb-6">

            <div class="rounded-lg overflow-hidden mb-4">
                <img src="/trip.png" alt="">
            </div>

            <div class="text-2xl">
                Etihad Trip
            </div>
            <div class="text-md text-gray-600 mb-6">
                Your journey begins here.
            </div>

            <div class="flex items-center h-16" @click="moveTo">
                <img src="/pass.png" class="h-full" />
            </div> 
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import PageLayout from "../components/layouts/PageLayout.vue";

const router = useRouter()
const moveTo = () => {
    router.push({name : 'home'})
}
</script>