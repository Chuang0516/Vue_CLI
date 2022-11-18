<template>
    <div>
        <h1>Vue<small>Router</small></h1>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">连续前进</button>
    </div>
</template>

<script>
export default {
    name: 'TheBanner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        test() {
            this.$router.go(3)
        }
    }
}
</script>

<style>

</style>
