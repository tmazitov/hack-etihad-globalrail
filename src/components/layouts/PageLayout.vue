<!-- filepath: src/components/PageLayout.vue -->
<template>
  <div class="flex flex-col min-h-screen bg-white max-h-[100vh]">
    <!-- Header Slot -->
    <header class="p-4 " v-if="!withoutHeader">
      <slot name="header">
        <h1 class="text-2xl font-bold">{{title}}</h1>
      </slot>
    </header>

    <!-- Body Slot -->
    <main class="flex-grow p-4 overflow-y-auto pt-0">
      <slot>
        <p>Default Body Content</p>
      </slot>
    </main>

    <!-- Footer Slot -->
    <footer class="bg-gray-800 text-white p-4" v-if="!withoutFooter">
        <NavMenu />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from "./NavMenu.vue";

defineProps({
    title: {
        type: String,
        default: "Page Title",
    },
    withoutFooter: {
        type: Boolean,
        default: false,
    },
    withoutHeader: {
        type: Boolean,
        default: false,
    },
})

</script>

<style scoped>
/* Add any additional styles here if needed */
</style>