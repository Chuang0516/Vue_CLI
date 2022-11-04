<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom" ref="btn">点我输出</button>
        <TheSchool ref="sch"></TheSchool>
    </div>
</template>

<script>
import TheSchool from './components/TheSchool.vue';

export default {
    name: 'App',
    components: { TheSchool },
    data() {
        return {
            msg: '欢迎学习vue'
        }
    },
    methods: {
        showDom() {
            console.log(this.$refs.title); // 真实 DOM 元素
            console.log(this.$refs.btn); // 真实 DOM 元素
            console.log(this.$refs.sch); // TheSchoos 组件的实例对象 vc
        }
    }
}
</script>

<style>

</style>
