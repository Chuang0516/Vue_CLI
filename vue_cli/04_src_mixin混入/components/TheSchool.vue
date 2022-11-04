<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import { mixin } from '../mixin';

export default {
    name: 'TheSchool',
    data() {
        return {
            name: 'wecreate',
            address: '西安',
        }
    },
    mixins: [mixin]
}
</script>

<style>

</style>