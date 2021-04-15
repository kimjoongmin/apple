<template>
  <!-- v-if 와 모달창 만들기 (Vue에서 동적인 UI 만드는 법) -->
  <div class="black-bg" v-if="modalOpen == true" @click="modalOpen = false">
    <div class="white-bg">
      <h3>{{ dataRoom[target].title }}</h3>
      <div><img :src="dataRoom[target].image" class="room-img"></div>
      <p>{{ dataRoom[target].content}}</p>
      <p class="price">{{ dataRoom[target].price}} 원</p>
      <button @click="modalOpen = false">닫기</button>
    </div>
  </div>
  
  <div class="menu">
    <a href="#" v-for="(a,i) in menuList" :key="i">{{a}}</a>
  </div>
  <!-- Vue 이벤트 핸들러로 click 감지하기 (허위매물 신고버튼 만들기) 반복문 -->
  <div v-for="(a,i) in roomList" :key="i">
    <img :src="roomImg[i]" class="room-img">
    <h3 @click="modalOpen=true">{{roomList[i]}}</h3>
    <p>{{priceList[i]}} 만원</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{Num[i]}}</span>
  </div> 
  <!-- <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h3 @click="modalOpen=true">{{roomList[0]}}</h3>
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
  <!-- 실제 데이터를 박아넣어 상품목록을 만들자 (import / export) 반복문 -->
  <div v-for="(a,i) in dataRoom" :key="i">
    <img :src="a.image" class="room-img">
    <h3 @click="modalOpen = true; target = i;">{{a.title}}</h3>
    <p class="price">{{a.price}} 원</p>
    <p>{{a.content}}</p>
  </div>
  
</template>

<script>
import data from './assets/oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      //누른거 
      target : 0,
      modalOpen : false,
      menuList: ['Home','Room','About'],
      Num: [1,0,3],
      roomImg: ['https://codingapple1.github.io/vue/room0.jpg','https://codingapple1.github.io/vue/room1.jpg','https://codingapple1.github.io/vue/room2.jpg'],
      roomList: ['청담동원룸','강남구원룸','도곡동원룸'],
      priceList: ['1000','2000','3000'],
      dataRoom: data
    }
  },
  methods: {
    increase(i){
      this.Num[i]+=1;
    },
    increase2(){
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
.room-img{width:100%;margin-top:50px;max-width:640px;}
body{margin:0;}
div{box-sizing: border-box;}
.black-bg{position:fixed;width:100%;height:100%;padding:20px;background:rgba(0,0,0,0.5);}
.white-bg{width:100%;background:#fff;border-radius:10px;padding:20px;}
.price{font-weight:bold;margin:10px 0;}
</style>
