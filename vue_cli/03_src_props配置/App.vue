<template>
    <div>
        <BaseStudent name="李四" sex="女" :age="18"></BaseStudent>
    </div>
</template>

<script>
import BaseStudent from './components/BaseStudent.vue';

export default {
    name: 'App',
    components: { BaseStudent },
}
</script>

<style>

</style>
