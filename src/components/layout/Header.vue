<template>
    <div>
        <div class="menu">
            <router-link v-for="(a,i) in menu" :key="i" :to="links[i]">{{menu[i]}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data(){
        return{
            menu: ['Home','Blog','Rooms','Game'],
            links: ['/','/Blog','/Rooms','/Game'],
        }
    },
}
</script>
<style>
.menu{padding:20px;background:#336699;}
.menu a{color:#fff;padding:10px 30px;}
</style>