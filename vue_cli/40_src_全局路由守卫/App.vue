<template>
    <div id="root">
        <div class="page-header">
            <TheBanner />
        </div>
        <hr>
        <div class="nav-box">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home" active-class="active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about" active-class="active">About</router-link>
                </li>
            </ul>
            <div class="card">
                <div class="card-body">
                    <router-view>

                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheBanner from './components/TheBanner'

export default {
    name: 'App',
    components: { TheBanner },
    data() {
        return {

        }
    },
};
</script>

<style>
#root {
    width: 80%;
    margin: auto;
}

.nav-box {
    display: flex;
    width: 100%;
}

.flex-column {
    flex: 2;
    margin-right: 20px;
}

.nav-box .card {
    flex: 8;
}

.panel-default {
    flex: 8;
    margin: 0;
}

.nav-box>.flex-column>.nav-item a.active {
    background-color: rgb(15, 117, 177);
    color: #fff;
}

.nav-box>.flex-column>.nav-item a.active:hover {
    background-color: rgb(15, 117, 177);
}

.nav-box>.flex-column>.nav-item a:hover {
    background-color: rgb(243, 243, 243);
}
</style>
