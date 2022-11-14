<template>
    <div id="container">
        <CommodityCategory title="美食">
            <img src="https://img.zcool.cn/community/01f17b5b5a8d8ca801215c8ff9f884.jpg@1280w_1l_2o_100sh.jpg" alt="">
        </CommodityCategory>
        <CommodityCategory title="游戏">
            <ul>
                <li v-for="game, index in games" :key="index">{{ game }}</li>
            </ul>
        </CommodityCategory>
        <CommodityCategory title="电影">
            <video src="https://vfx.mtime.cn/Video/2022/11/04/mp4/221104095044003193.mp4"></video>
        </CommodityCategory>
    </div>
</template>

<script>
import CommodityCategory from './components/CommodityCategory.vue';

export default {
    name: 'App',
    components: { CommodityCategory },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾'],
            games: ['红色警戒', '穿越火线', '劲舞团'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》'],
        };
    },
};
</script>

<style>
#container {
    display: flex;
    justify-content: space-around;
}
</style>
