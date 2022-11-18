<template>
    <div class="panel-body">
        <h2>我是Home的内容</h2>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/home/news">News</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <div class="card">
            <div class="card-body">
                <Keep-alive :include="['HomeNews', 'HomeMessage']">
                    <router-view></router-view>
                </Keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHome',
}

</script>

<style>

</style>
