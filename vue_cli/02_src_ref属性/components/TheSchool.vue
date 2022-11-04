<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'TheSchool',
    data() {
        return {
            name: 'wecreate',
            address: '西安'
        }
    }
}
</script>

<style>
.school {
    background-color: rgb(176, 193, 201);
}
</style>