<template>
    <div class="title-input">
        <div class="page-header">
            <h1>搜索GitHub用户 <small>WeCreate</small></h1>
        </div>
        <div class="col-lg-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="请输入姓名" v-model="keyWord" />
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click="searchUsers">搜索</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SearchUser',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers() {
            // 请求前更新 List 的数据
            this.$bus.$emit('updataListData', { isFirst: false, isLoading: true, errMsg: '', users: [] });
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    this.$bus.$emit('updataListData', { isLoading: false, errMsg: '', users: response.data.items });

                },
                error => {
                    this.$bus.$emit('updataListData', { isLoading: false, errMsg: error.message, users: [] });
                }
            )
        }
    }
}
</script>

<style scoped>
.title-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.col-lg-6 {
    float: none;
    margin-bottom: 20px;
}
</style>
