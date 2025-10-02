<template>
    <div class="h-50 flex flex-col justify-between gap-2">
        
        <div class="flex flex-col items-center flex-1 justify-center">
            <Icon icon="tabler:check" class="w-12 h-12 text-blue-500" />
            <div class="flex flex-col items-center  text-center ">
                <div class="font-medium text-lg">
                    Booking Successful!
                </div>
                <div>
                    We will let you know about details.
                </div>
            </div>
        </div>
        <button class="w-full py-2 rounded-md text-white font-medium transition-opacity bg-blue-500" 
        @click="$emit('onsubmit')">
            Complete
        </button>
    </div>
    
</template>
    
<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const emits = defineEmits(['onsubmit']);


</script>