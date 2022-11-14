<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <Transition name="wecreate" appear>
            <h1 v-show="isShow">你好！</h1>
        </Transition>
    </div>
</template>

<script>
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

.wecreate-enter-active {
    animation: wecreate 1s;
}

.wecreate-leave-active {
    animation: wecreate 1s reverse;
}

@keyframes wecreate {
    from {
        transform: translateX(-100%)
    }

    to {
        transform: translateX(0px)
    }
}
</style>
