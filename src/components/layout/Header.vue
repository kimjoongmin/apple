<template>
    <div>
        <div class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/Rooms">Rooms</router-link>
            <router-link to="/Game">Game</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>
<style>
.menu{padding:20px;background:#336699;}
.menu a{color:#fff;padding:10px 30px;}
</style>