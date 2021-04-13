<template>
  <!-- 모달 -->
  <div class="black-bg" v-if="modal == true" @click="modal = false">
    <div class="white-bg">
      <h3>상세페이지</h3>
      <div>상세페이지 내용</div>
      <button @click="modal = false">닫기</button>
    </div>
  </div>
  
  <div class="menu">
    <a href="#" v-for="(a,i) in menuList" :key="i">{{a}}</a>
  </div>
  <!-- <div v-for="(a,i) in roomList" :key="i">
    <h3>{{roomList[i]}}</h3>
    <p>{{priceList[i]}} 만원</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{Num[i]}}</span>
  </div> 반복문으로 작업했으나 이미지 반복이 어려워 실패-->
  <!-- <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h3 @click="modal=true">{{roomList[0]}}</h3>
    <p>{{priceList[0]}} 만원</p>
    <button @click="Num[0]+=1">허위매물신고</button> <span>신고수 : {{Num[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h3>{{roomList[1]}}</h3>
    <p>{{priceList[1]}} 만원</p>
    <button @click="Num[1]+=1">허위매물신고</button> <span>신고수 : {{Num[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h3>{{roomList[2]}}</h3>
    <p>{{priceList[2]}} 만원</p>
    <button @click="Num[2]+=1">허위매물신고</button> <span>신고수 : {{Num[2]}}</span>
  </div> -->
  <!-- data -->
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h3>{{dataRoom[0]}}</h3>
    <p>{{priceList[0]}} 만원</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      modal : false,
      menuList: ['Home','Room','About'],
      Num: [1,0,3],
      //roomImg: ['./assets/room0.jpg','./assets/room1.jpg','./assets/room2.jpg'],
      roomList: ['청담동원룸','강남구원룸','도곡동원룸'],
      priceList: ['1000','2000','3000'],
      dataRoom: data
    }
  },
  methods: {
    // increase(i){
    //   this.Num[i]+=1;
    // }
    increase(){
      this.Num+=1;
    }
  },
  components: {
    
  }
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
.menu{background:#336699;padding:15px;}
.menu a{color:#fff;padding:10px;}
.room-img{width:100%;margin-top:50px;}
body{margin:0;}
div{box-sizing: border-box;}
.black-bg{position:fixed;width:100%;height:100%;padding:20px;background:rgba(0,0,0,0.5);}
.white-bg{width:100%;background:#fff;border-radius:10px;padding:20px;}
</style>
