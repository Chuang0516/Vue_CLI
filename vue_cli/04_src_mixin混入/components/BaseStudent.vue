<template>
    <div>
        <h2 @click="showName">学校姓名：{{ name }}</h2>
        <h2>学校性别：{{ sex }}</h2>
    </div>
</template>

<script>
// 引入一个混合
import { mixin } from '../mixin';

export default {
    name: 'BaseStudent',
    data() {
        return {
            name: '张三',
            sex: '男'
        };
    },
    mixins: [mixin]
}

</script>

<style>

</style>