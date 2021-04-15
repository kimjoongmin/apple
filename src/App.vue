<template>

    <div class="black-bg" v-if="modalopen == true" @click="modalopen=false"> 
      <div class="white-bg">
        <div><img :src="datarooms[modaltarget].image"></div>
        <h3>{{datarooms[modaltarget].title}}</h3>
        <p>{{datarooms[modaltarget].content}}</p>
        <p class="price">{{datarooms[modaltarget].price}}원</p>
        <button @click="modalopen=false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a href="#" v-for="(a,i) in menu" :key="i">{{a}}</a>
    </div>

    <div class="room-list" v-for="(a,i) in datarooms" :key="i">
      <a href="#" @click="btnmodalopen();modaltarget=i;"><img :src="a.image"></a>
      <a href="#" @click="btnmodalopen();modaltarget=i;" class="title">{{a.title}}</a>
      <p>{{a.content}}</p>
      <p class="price">{{a.price}}원</p>
      <button @click="btnincrease()">허위매물신고🚨</button> <span>신고수 : {{신고수}}</span>
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
      modaltarget: 0,
      신고수: 0,
    }
  },
  methods: {
    btnmodalopen(){
      this.modalopen = true; 
    },
    btnincrease(){
      this.신고수 += 1;
    }
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
body{margin:0;padding:0;}
a{color:#555;text-decoration: none;}
.menu{padding:20px;background:#336699;border-radius:10px;}
.menu a{color:#fff;padding:10px;}
.room-list{margin:50px 0;padding-bottom:50px;border-bottom:1px solid #ddd;}
.room-list a{display:block;}
img{width:100%;max-width:500px;}
.room-list .title{font-weight: bold;font-size:20px;margin:10px 0;}
.price{font-weight:bold;}

.black-bg{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.6);}
.black-bg .white-bg{background:#fff;padding:50px;position:absolute;left:50%;top:150px;margin-left:-300px;width:600px;box-sizing:border-box;border-radius:10px;}
</style>
