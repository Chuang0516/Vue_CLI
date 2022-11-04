<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <TheSchool :getSchoolName="getSchoolName"></TheSchool>
        <hr>
        <BaseStudent @wecreate="getStudentName" @demo="m1"></BaseStudent>
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
        },
        m1() {
            console.log('demo被调用了！');
        }
    },
    mounted() {
        this.$refs.student.$on('wecreate', this.getStudentName);
    }
}
</script>

<style>
.app {
    background-color: rgb(210, 210, 210);
    padding: 5px;
}
</style>
