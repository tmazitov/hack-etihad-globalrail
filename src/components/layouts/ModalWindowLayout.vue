<template>
<div v-if="show" class="modal-overlay" @click="show = false"></div>
<transition name="slideup">
    <div v-if="show" class="modal-content" @click.stop>
        <slot></slot>
    </div>
</transition>
</template>

<script lang="ts" setup>

const show = defineModel({
    type: Boolean,
    required: true,
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    background-color: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    z-index: 1001;
}

@keyframes slideup-enter {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideup-leave {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100%);
        opacity: 0;
    }
}

.slideup-enter-active {
    animation: slideup-enter 0.3s ease-out forwards;
}

.slideup-leave-active {
    animation: slideup-leave 0.3s ease-in forwards;
}
</style>