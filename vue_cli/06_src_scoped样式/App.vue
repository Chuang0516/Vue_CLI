<template>
    <div>
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
}
</script>

<style>
.title {
    color: red;
}
</style>
