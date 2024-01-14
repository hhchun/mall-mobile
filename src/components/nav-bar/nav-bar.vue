
<template>
    <view :style="{ height: convert(statusBarHeight!) }"></view>
    <view :style="{ height: convert(navigationBarHeight), lineHeight: convert(navigationBarHeight) }"
        style="overflow: hidden;">
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
const statusBarHeight = uni.getSystemInfoSync().statusBarHeight!;
const rect = uni.getMenuButtonBoundingClientRect();
const navigationBarHeight = (rect.top - statusBarHeight) * 2 + rect.height;
const convert = (value: number) => {
    return value + 'px';
}
</script>