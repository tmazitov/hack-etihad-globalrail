<template>
<ModalWindowLayout v-model="show">
    <div class="p-4 flex flex-col gap-4" v-if="plan">
        

        <div class="rounded-lg overflow-hidden">
            <img class="w-full" :src="plan.imagePath" alt="Card image" />
        </div>

        <div class="text-lg font-medium flex items-center">
            <div class="bg-gray-100 p-2 rounded-md mr-4" @click="backButtonHandler">
                <Icon icon="tabler:arrow-left" class="w-4 text-gray-600" />
            </div>
            <div class="header flex gap-2 items-center">
                <div class="font-bold text-xl">{{ plan.title }} </div>
                <div>{{ plan.price }}</div>
            </div>
        </div>

        <div class="transition-height">
            <transition name="section">

            <div class="flex flex-col gap-4" v-if="section == 0">
                <p class="text-gray-700 text-base">
                    {{ plan.fullDescription }}
                </p>



                <button class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" @click="submitButtonHandler">
                    Apply
                </button>
            </div>
            </transition>
            <transition name="section">

            <div class="h-40 flex flex-col items-center gap-2" v-if="section == 1">

                <Icon icon="tabler:loader-2" class="w-12 h-12 text-blue-500 animate-spin" />
                <div class="flex flex-col items-center text-center ">
                    <div class="font-medium text-lg">
                        Please wait..
                    </div>
                    <div>
                        We are working on your plan update.
                    </div>
                </div>
            </div>
            </transition>
            <transition name="section">

            <div class="h-50 flex flex-col justify-between gap-2" v-if="section == 2">
                
                <div class="flex flex-col items-center flex-1 justify-center">
                    <Icon icon="tabler:check" class="w-12 h-12 text-blue-500" />
                    <div class="flex flex-col items-center  text-center ">
                        <div class="font-medium text-lg">
                            Your Plan Updated!
                        </div>
                        <div>
                            Enjoy new benefits and features!
                        </div>
                    </div>
                </div>
                <button class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" 
                @click="completeHandler">
                    Complete
                </button>
            </div>
            </transition>
        </div>
        
    </div>
</ModalWindowLayout>
</template>

<script lang="ts" setup>
import Plan from '@/types/plan';
import { Icon } from '@iconify/vue';
import { ref, defineModel, defineProps, nextTick} from 'vue';
import ModalWindowLayout from '../layouts/ModalWindowLayout.vue';

const show = defineModel({
    type: Boolean,
    required: true,
})

const emits = defineEmits(['onsubmit']);

defineProps({
    plan: {
        type: Plan,
    }
})

const backButtonHandler = () => {
    show.value = false
}

const section = ref(0)
const submitButtonHandler = () => {
    updateSection((oldValue: number) => {
        section.value = oldValue + 1
        if (section.value == 1) {
            setTimeout(submitButtonHandler, 2000);
        }
        if (section.value > 2) {
            show.value = false
            section.value = 0
        }
        return section.value
    })
}

const completeHandler = () => {
    show.value = false
    emits('onsubmit')
    nextTick(() => {
        section.value = 0
    })
}

const updateSection = (updater: Function) => {
    const oldValue = section.value
    section.value = NaN
    setTimeout(() => {
        section.value = updater(oldValue)
    }, 300);
}


</script>

<style lang="css" scoped>

@keyframes slideleft-enter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideleft-leave {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes slideright-enter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideright-leave {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.section-enter-active {
    animation: slideleft-enter 0.3s ease-out forwards;
}

.section-leave-active {
    animation: slideright-leave 0.3s ease-out forwards;
}

.section-enter-from,
.section-leave-to {
    opacity: 0;
}

.section-leave-active {
    animation: slideleft-leave 0.3s ease-out forwards;
}

.section-enter-active {
    animation: slideright-enter 0.3s ease-out forwards;
}
</style>