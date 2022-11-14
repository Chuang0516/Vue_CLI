<template>
    <div class="panel-body">我是About的内容</div>
</template>

<script>
export default {
    name: 'TheAbout',
    // beforeDestroy() {
    //     console.log('about组件即将被销毁了');
    // },
    mounted() {
        console.log('about组件挂载完毕了', this);
    }
}

</script>

<style>

</style>
