<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div v-show="info.users.length" class="col-xs-6 col-md-3" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" class="thumbnail">
                <img :src="user.avatar_url" alt="..." />
                <p>{{ user.login }}</p>
            </a>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用!</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'UserList',
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: []
            }
        }
    },
    mounted() {
        this.$bus.$on('updataListData', (dataObj) => {
            this.info = { ...this.info, ...dataObj }
        })
    }
}
</script>

<style scoped>
.thumbnail {
    text-decoration: none !important;
}

.thumbnail p {
    text-align: center;
    color: #000;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.row .col-xs-6 {
    width: 25%;
}
</style>
