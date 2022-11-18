<template>
    <ul>
        <li :style="{ opacity }">欢迎学习Vue</li>
        <li>news1 <input type="text"> </li>
        <li>news2 <input type="text"> </li>
        <li>news3 <input type="text"> </li>
    </ul>
</template>

<script>
export default {
    name: 'HomeNews',
    data() {
        return {
            opacity: 1
        }
    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01;
    //         if (this.opacity <= 0) this.opacity = 1;
    //     }, 16)
    // },
    // beforeDestroy() {
    //     console.log('news组件即将被销毁了');
    //     clearInterval(this.timer)
    // },
    activated() {
        this.timer = setInterval(() => {
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
        }, 16)
    },
    deactivated() {
        clearInterval(this.timer)
    }
}

</script>