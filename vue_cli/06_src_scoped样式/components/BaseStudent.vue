<template>
    <div class="demo">
        <h2 class="wecreate">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
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
}
</script>

<style lang="less" scoped>
.demo {
    background-color: rgb(98, 182, 255);

    .wecreate {
        font-size: 40px;
    }
}
</style>