<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp">
            <h1 v-show="isShow" key="1">你好！</h1>
        </TransitionGroup>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: 'TheTest',
    data() {
        return {
            isShow: true
        }
    },

}
</script>

<style scoped>
h1 {
    background-color: rgb(33, 202, 103);
    color: #fff;
}

/* 进入的起点，离开的终点 */
.wecreate-enter,
.wecreate-leave-to {
    transform: translateX(-100%);
}

.wecreate-enter-active,
.wecreate-leave-active {
    transition: linear 1s;
}

/* 进入的终点，离开的起点 */
.wecreate-enter-to,
.wecreate-leave {
    transform: translateX(0);
}
</style>
