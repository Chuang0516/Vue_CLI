<template>
    <div class="panel-body">
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'TheAbout',
    // 组件内路由守卫
    // 通过路由规则进入改组件时调用
    beforeRouteEnter(to, from, next) {
        console.log('App--beforeRouteEnter');
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'wecreate') {
                next();
            } else {
                alert('学校名不对，无权限查看！');
            }
        } else {
            next();
        }
    },
    // 通过路由规则离开改组件时调用
    beforeRouteLeave(to, from, next) {
        console.log('App--beforeRouteLeave', to, from);
        next();
    }
}

</script>

<style>

</style>
