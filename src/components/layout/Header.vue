<template>

        <div class="menu">
            <router-link v-for="(a,i) in menu" :key="i" :to="links[i]">{{menu[i]}}</router-link>
        </div>

</template>
<script>
export default {
    name: "Header",
    data(){
        return{
            menu: ['Home','Blog','Instagram','Rooms','Game'],
            links: ['/apple','/apple/Blog','/apple/Instagram','/apple/Rooms','/apple/Game'],
        }
    },
}
</script>
<style>
.menu{padding:20px;background:#336699;position:sticky;top:0;z-index:2;}
.menu a{color:#fff;padding:10px 30px;}
</style>