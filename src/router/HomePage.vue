<!-- filepath: src/pages/Home.vue -->
<template>
  <PageLayout title="Upcoming Trips">
      <TicketCard v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
  </PageLayout>
</template>

<script lang="ts" setup>
import TicketCard from "@/components/ticket/TicketCard.vue";
import PageLayout from "../components/layouts/PageLayout.vue";
import { tickets } from "@/data/tickets";

</script>