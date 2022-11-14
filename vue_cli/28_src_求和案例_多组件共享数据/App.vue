<template>
    <div>
        <TheCounter />
        <hr>
        <ThePerson />
    </div>
</template>

<script>
import TheCounter from './components/TheCounter.vue';
import ThePerson from './components/ThePerson.vue';

export default {
    name: 'App',
    components: { TheCounter, ThePerson },
};
</script>

<style>

</style>
