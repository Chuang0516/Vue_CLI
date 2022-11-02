<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示校名</button>
  </div>
</template>

<script>
// 组件的交互
export default {
  name: 'AppSchool',
  data() {
    return {
      name: 'wecreate',
      address: '西安',
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: rgb(34, 152, 255);
}
</style>
