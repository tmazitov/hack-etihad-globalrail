<template>
    <ModalWindowLayout v-model="show">
        <div class="p-4 flex flex-col gap-4">
            <div class="text-lg font-medium flex items-center">
                <div class="bg-gray-100 p-2 rounded-md mr-4" @click="backButtonHandler" v-if="section != 3">
                    <Icon icon="tabler:arrow-left" class="w-4 text-gray-600" />
                </div>
                <div>Shuttle Booking</div>
            </div>

            <div class="transition-height">
                <transition name="section">
                    <MapSection v-if="section === 0" @onsubmit="submitButtonHandler"/>
                </transition>
                <transition name="section">
                    <PaymentSection v-if="section === 1" @onsubmit="submitButtonHandler"/>
                </transition>
                <transition name="section">
                    <ApprovalSection v-if="section === 2" @onsubmit="submitButtonHandler"/>
                </transition>
                <transition name="section">
                    <SuccessSection v-if="section === 3" @onsubmit="completeHandler"/>
                </transition>
            </div>

        </div>
    </ModalWindowLayout>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import ModalWindowLayout from '../layouts/ModalWindowLayout.vue';
import { ref, nextTick } from 'vue';
import MapSection from './MapSection.vue';
import PaymentSection from './PaymentSection.vue';
import ApprovalSection from './ApprovalSection.vue';
import SuccessSection from './SuccessSection.vue';

const show = defineModel({
    type: Boolean,
    required: true,
})

const section = ref(0)
const emits = defineEmits(['on-completed']);

const backButtonHandler = ( ) =>{
    if (section.value > 0) {
        updateSection((oldValue: number) => section.value = oldValue - 1)
    } else {
        show.value = false
    }
}

const submitButtonHandler = () => {
    updateSection((oldValue: number) => {
        section.value = oldValue + 1
        if (section.value > 3) {
            show.value = false
            section.value = 0
        }
        return section.value
    })
}

const completeHandler = () => {
    show.value = false
    emits('on-completed')
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

<style scoped>

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