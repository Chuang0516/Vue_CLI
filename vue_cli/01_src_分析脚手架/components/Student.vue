<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 组件的交互
export default {
  name: 'AppStudent',
  data() {
    return {
      name: '小明',
      age: 18,
    };
  },
};
</script>
