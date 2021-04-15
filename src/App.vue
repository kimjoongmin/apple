<template>
    <div class="black-bg" v-if="modalopen == true"> 
      <div class="white-bg">
        <h3>{{datarooms[0].title}}</h3>
        <p>{{datarooms[0].content}}</p>
        <p class="price">{{datarooms[0].price}}원</p>
      </div>
    </div>

    <div class="menu">
      <a href="#" v-for="(a,i) in menu" :key="i">{{a}}</a>
    </div>

    <div class="room-list" v-for="(a,i) in datarooms" :key="i">
      <a href="#" ><img :src="datarooms[i].image"></a>
      <a href="#" @click="modalopen == true" class="title">{{datarooms[i].title}}</a>
      <p>{{datarooms[i].content}}</p>
      <p class="price">{{datarooms[i].price}}원</p>
      <button>허위매물신고🚨</button> <span>신고수 : 0</span>
    </div>

</template>

<script>
import oneroom from './assets/oneroom';
export default {
  name: 'app',
  data(){
    return{
      menu: ['Home','About','Rooms'],
      datarooms : oneroom,
      modalopen: false,
    }
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{color:#555;text-decoration: none;}
.menu{padding:20px;background:#336699;border-radius:10px;}
.menu a{color:#fff;padding:10px;}
.room-list{margin:50px 0;padding-bottom:50px;border-bottom:1px solid #ddd;}
.room-list a{display:block;}
.room-list img{width:100%;max-width:500px;}
.room-list .title{font-weight: bold;font-size:20px;margin:10px 0;}
.room-list .price{font-weight:bold;}
</style>
