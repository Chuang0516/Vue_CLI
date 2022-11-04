<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'TheSchool',
    data() {
        return {
            name: 'wecreate',
            address: '西安',
        }
    },
    methods: {
        demo(msgName, data) {
            console.log('有人发布了Hello消息！', data);
        }
    },
    mounted() {
        // this.$bus.$on('wecreate', this.demo);
        this.pubId = pubsub.subscribe('hello', this.demo)
    },
    beforeDestroy() {
        // this.$bus.$off('wecreate');
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.school {
    background-color: rgb(255, 203, 61);
    padding: 5px;
}
</style>