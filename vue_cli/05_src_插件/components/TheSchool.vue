<template>
    <div>
        <h2>学校名称：{{ name | mySlice }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="test">点我测试</button>
    </div>
</template>

<script>

export default {
    name: 'TheSchool',
    data() {
        return {
            name: 'wecreate',
            address: '西安',
        }
    },
    methods: {
        test() {
            this.hello();
        }
    }
}
</script>

<style>

</style>