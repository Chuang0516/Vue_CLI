<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <TheSchool :getSchoolName="getSchoolName"></TheSchool>
        <hr>
        <BaseStudent v-on:wecreate.once="getStudentName"></BaseStudent>
        <BaseStudent ref="student"></BaseStudent>
    </div>
</template>

<script>
import BaseStudent from './components/BaseStudent.vue';
import TheSchool from './components/TheSchool.vue';

export default {
    name: 'App',
    components: { BaseStudent, TheSchool },
    data() {
        return {
            msg: '你好！'
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('APP收到了学校名：', name);
        },
        getStudentName(name) {
            console.log('APP收到了学校名：', name);
        }
    },
    mounted() {
        this.$refs.student.$once('wecreate', this.getStudentName);
    }
}
</script>

<style>
.app {
    background-color: rgb(210, 210, 210);
    padding: 5px;
}
</style>
