<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>
</template>

<script>

export default {
    name: 'TheSchool',
    props: ['getSchoolName'],
    data() {
        return {
            name: 'wecreate',
            address: '西安',
        }
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: rgb(255, 203, 61);
    padding: 5px;
}
</style>