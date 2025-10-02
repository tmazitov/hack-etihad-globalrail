<!-- filepath: src/components/layouts/NavMenu.vue -->
<template>
  <nav class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
    <ul class="flex justify-around items-center">
      <!-- Home Button -->
    <li v-for="button in buttons" :key="button.route" class="flex-1 text-center flex justify-center" 
    @click="navigateTo(button.route)">
      <button :class="`flex flex-col items-center py-2 ${selectedStyle(button.route)}`">
        <Icon :icon="button.icon" class="w-6 h-6"></Icon>
        <span class="text-sm">{{ button.label }}</span>
      </button>
    </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";

const router = useRouter();
const navigateTo = (route: string) =>  {
    router.push({ name: route });
}

const route = useRoute();

const isSelected = (routeName: string) => {
    return route.name === routeName;
};
const selectedStyle = (routeName:string) => {
    if (isSelected(routeName)) {
        return "text-blue-500";
    }
    return "text-gray-600";
}

const buttons = [
    { label: "Home", icon: "tabler:home", route: "home" },
    // { label: "Map", icon: "tabler:map", route: "map" },
    { label: "Profile", icon: "tabler:user", route: "profile" },
];
</script>

<style scoped>
/* Add any additional styles if needed */
</style>