<template>
    <view class="page">
        <view class="header">
            <nav-bar>
                <text class="mall-icon icon-back back" @click="back"></text>
            </nav-bar>
        </view>
        <view class="main">
            <view class="logo"></view>
        </view>
        <view class="footer">
            <button class="wechat-login" @click="">
                <i class="mall-icon icon-wechat wechat-login-icon"></i>
                微信一键登录
            </button>
            <button class="password-login" @click="passwordLogin">
                密码登录
            </button>
            <view class="protocol">
                <i class="mall-icon" :class="protocolClass" @click="protocolSelect"></i>
                <text class="protocol-prefix">
                    我已阅读同意
                </text>
                <text class="protocol-subject">《用户协议》</text>
                <text class="protocol-subject">《隐私政策》</text>
                <text class="protocol-subject">《买家须知》</text>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
const protocolMark = ref(false)
const protocolSelect = () => {
    protocolMark.value = !protocolMark.value;
}
const protocolClass = computed(() => {
    return {
        'icon-tick-fill': protocolMark.value,
        'protocol-selected': protocolMark.value,
        'icon-circle': !protocolMark.value,
        'protocol-unselected': !protocolMark.value,
    }
});

const back = () => {
    uni.navigateBack();
}
const passwordLogin = () => {
    uni.navigateTo({ url: '/platform/pages/login/password-login' })
}

</script>
<style>
@import "@/static/iconfont/mall-icon.css";

.page {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    padding: 0 42rpx;
}

.back {
    font-size: 35rpx;
    color: black;
    text-align: center;
}

.main {
    flex: 1;
}

.logo {
    width: 100rpx;
    height: 100rpx;
    background-color: #01c1c2;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.footer {
    margin-bottom: 25%;
    padding: 0 42rpx;
    display: flex;
    flex-direction: column;
}

.wechat-login {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 30rpx;
    background-color: #10c2c3;
    color: white;
    border-radius: 2px;
}

.wechat-login-icon {
    vertical-align: middle;
    display: inline;
    font-size: 42rpx;
}

.password-login {
    margin: 25rpx 0 0;
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    color: black;
    font-size: 30rpx;
    background-color: #ffffff;
    border-radius: 2px;
    border: 1rpx solid #999999;
}

.protocol {
    margin: 20rpx 0 0;
    display: flex;
    align-items: center;
}

.protocol-unselected {
    margin: auto 10rpx auto 0;
    color: #999999;
    font-size: 25rpx;
    text-align: center;
}

.protocol-selected {
    margin: auto 10rpx auto 0;
    color: #10c2c3;
    font-size: 25rpx;
    text-align: center;
}

.protocol-prefix {
    font-size: 20rpx;
    color: #999999;
}

.protocol-subject {
    font-size: 20rpx;
    color: black;
}

button::after {
    border: none;
}

page {
    background-color: #ffffff;
    height: 100%;
}
</style>