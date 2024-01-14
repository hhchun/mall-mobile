<template>
    <view class="header">
        <nav-bar>
            <text class="mall-icon icon-back back" @click="back"></text>
        </nav-bar>
    </view>
    <view class="main">
        <text class="title">密码登录</text>
        <text class="title-tips">强烈使用微信登录</text>
        <view class="input-box">
            <input type="text" class="username" placeholder-class="placeholder" placeholder="用户名" v-model="username" />
            <i class="mall-icon icon-clear-fill input-icon" v-if="username.length > 0" @click="username = ''"></i>
        </view>
        <view class="input-box password-box">
            <input type="text" :password="passwordMark" placeholder-class="placeholder" class="password" placeholder="密码"
                v-model="password" />
            <i class="mall-icon icon-clear-fill input-icon" v-if="password.length > 0" @click="password = ''"></i>
            <i class="mall-icon input-icon" :class="passwordIconClass" @click="passwordMark = !passwordMark"></i>
        </view>
        <button class="password-login" :style="loginSubmitStyle" @click="">
            登录
        </button>
        <text class="wechat-login" @click="back">微信登录</text>
        <view class="protocol">
            <i class="mall-icon" :class="protocolClass" @click="protocolSelect"></i>
            <text class="protocol-prefix">我已阅读同意</text>
            <text class="protocol-subject">《用户协议》</text>
            <text class="protocol-subject">《隐私政策》</text>
            <text class="protocol-subject">《买家须知》</text>
        </view>
    </view>
    <view class="footer">
        <text class="help">遇到问题</text>
    </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const username = ref("");
const password = ref("gdfgfdg");
const protocolMark = ref(false);
const passwordMark = ref(true);
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
const passwordIconClass = computed(() => {
    return {
        'icon-open-eye': passwordMark.value,
        'icon-close-eye': !passwordMark.value,
    }
});


const loginSubmitStyle = computed(() => {
    if (username.value.length >= 6 && password.value.length >= 6) {
        return {
            'background-color': '#10c2c3'
        }
    }
    return {
        'background-color': '#a6e9ea'
    }
});

const back = () => {
    uni.navigateBack();
}

</script>
<style>
@import "@/static/iconfont/mall-icon.css";

.header {
    padding: 0 42rpx;
}

.back {
    font-size: 35rpx;
    color: black;
    text-align: center;
}

.main {
    margin-top: 100rpx;
    padding: 0 42rpx;
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 40rpx;
}

.title-tips {
    padding: 20rpx 0 0;
    font-size: 25rpx;
    color: #999999;
}

.input-box {
    margin: 70rpx 0 0;
    padding: 0 5rpx 10rpx;
    border-bottom: 1rpx solid #787878;
    display: flex;
    align-items: center;
}

.input-icon {
    width: 40rpx;
    font-size: 28rpx;
    color: #787878;
    text-align: center;
}

.username {
    flex: 1;
    font-size: 30rpx;
}

.password-box {
    margin: 50rpx 0 0;
}

.password {
    flex: 1;
    font-size: 30rpx;
}

.password-icon {
    width: 25rpx;
    font-size: 25rpx;
    margin-left: 20rpx;
    color: #787878;
}

.placeholder {
    font-size: 25rpx;
    color: #787878;
}

.password-login {
    margin: 80rpx 0 0;
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 30rpx;
    background-color: #10c2c3;
    color: white;
    border-radius: 2px;
}

.password-login::after {
    border: none;
}

.wechat-login {
    margin: 20rpx 0 0;
    align-self: center;
    color: black;
    font-size: 25rpx;
}

.protocol {
    margin: 20rpx 0 0;
    display: flex;
    align-items: center;
}

.protocol-unselected {
    margin: auto 10rpx auto 0;
    color: black;
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

.help {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #999999;
    font-size: 25rpx;
}

page {
    background-color: #ffffff;
}
</style>