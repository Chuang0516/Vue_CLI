<template>
    <div class="category">
        <h3>{{ title }}</h3>
        <!-- 定义一个插槽 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CommodityCategory',
    props: ['title']
}
</script>

<style>
.category {
    background-color: rgb(22, 217, 120);
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: rgb(245, 154, 17);
}

.category img {
    width: 100%;
}
</style>
