<template>
    <div id="root">
        <SearchUser />
        <UserList />
    </div>
</template>

<script>
import SearchUser from './components/SearchUser.vue';
import UserList from './components/UserList.vue';

export default {
    name: 'App',
    components: { SearchUser, UserList }
}
</script>

<style>
#root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
