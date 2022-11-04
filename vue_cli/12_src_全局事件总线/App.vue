<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <TheSchool></TheSchool>
        <hr>
        <BaseStudent></BaseStudent>
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
    }
}
</script>

<style>
.app {
    background-color: rgb(210, 210, 210);
    padding: 5px;
}
</style>
