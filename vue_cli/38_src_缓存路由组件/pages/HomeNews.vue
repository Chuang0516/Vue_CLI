<template>
    <ul>
        <li>news1 <input type="text"> </li>
        <li>news2 <input type="text"> </li>
        <li>news3 <input type="text"> </li>
    </ul>
</template>

<script>
export default {
    name: 'HomeNews',
    beforeDestroy() {
        console.log('news组件即将被销毁了');
    }
}

</script>