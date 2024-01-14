<template>
    <PlatformMine v-if="clientType == 'platform'">
    </PlatformMine>
</template>
<script setup lang="ts">
import PlatformMine from "@/pages/platform/mine.vue";
const clientType: string = "platform";
</script>