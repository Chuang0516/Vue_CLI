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
            address: '西安',
        }
    },
    methods: {
        demo(data) {
            console.log(data);
        }
    },
    mounted() {
        this.$bus.$on('wecreate', this.demo);
    },
    beforeDestroy() {
        this.$bus.$off('wecreate');
    }
}
</script>

<style scoped>
.school {
    background-color: rgb(255, 203, 61);
    padding: 5px;
}
</style>