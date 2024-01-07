
<template>
    <view :style="{ height: convert(statusBarHeight!, 'px'), backgroundColor: props.statusBarColor }"></view>
    <view :style="{ height: convert(navigationBarHeight, 'px') }" style="overflow: hidden;">
        <slot></slot>
    </view>
</template>
<script setup lang="ts">

const props = defineProps({
    statusBarColor: { type: String, required: false, default: "#ffffff" }
});

const statusBarHeight = uni.getSystemInfoSync().statusBarHeight!;
const rect = uni.getMenuButtonBoundingClientRect();
const navigationBarHeight = rect.top - statusBarHeight * 2 + rect.height;
const convert = (value: number, unit: string) => {
    return value + unit;
}
</script>