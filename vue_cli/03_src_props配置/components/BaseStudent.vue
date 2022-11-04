<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校性别：{{ sex }}</h2>
        <h2>学校年龄：{{ myAge + 1 }}</h2>
        <button @click="updateAge">点我更新</button>
    </div>
</template>

<script>
export default {
    name: 'BaseStudent',
    data() {
        return {
            msg: '我是一名学生',
            myAge: this.age,
        }
    },
    methods: {
        updateAge() {
            this.myAge++;
        }
    },
    props: ['name', 'sex', 'age']

    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String,
    // },

    // 接受的同时对数据进行类型限制，默认值指定，必要性。
    // props: {
    //     name: {
    //         type: String, // name的类型是字符串
    //         required: true, // name是必要的
    //     },
    //     age: {
    //         type: Number,
    //         default: 99, // 默认值
    //     },
    //     sex: {
    //         type: String,
    //         required: true,
    //     }
    // }
}
</script>

<style>

</style>