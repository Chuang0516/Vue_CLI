<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给app</button>
    </div>
</template>

<script>
export default {
    name: 'BaseStudent',
    data() {
        return {
            name: '张三',
            sex: '男'
        };
    },
    methods: {
        sendStudentName() {
            // 触发 Student 组件实例的wecreate事件
            this.$emit('wecreate', this.name)
        }
    }
}
</script>

<style lang="less" scoped>
.student {
    background-color: rgb(98, 182, 255);
    padding: 5px;
}
</style>