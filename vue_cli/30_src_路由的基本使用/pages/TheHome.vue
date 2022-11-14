<template>
    <div class="panel-body">我是Home的内容</div>
</template>

<script>
export default {
    name: 'TheHome',
    // beforeDestroy() {
    //     console.log('home组件即将被销毁了');
    // },
    mounted() {
        console.log('home组件挂载完毕了', this);
    }
}

</script>

<style>

</style>
