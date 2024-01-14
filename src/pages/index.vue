<template>
    <button @click="test">
        测试
    </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const test = () => {
    uni.navigateTo({ url: '/platform/pages/login/login' })
}
</script>