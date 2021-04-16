<template>
    <div class="inner">
        <div class="black-bg" v-if="modalopen == true" @click="btnmodalclose"> 
            <div class="white-bg">
                <div><img :src="datarooms[modaltarget].image"></div>
                <h3>{{datarooms[modaltarget].title}}</h3>
                <p>{{datarooms[modaltarget].content}}</p>
                <p class="price">{{datarooms[modaltarget].price}}원</p>
                <button @click="btnmodalclose">닫기</button>
            </div>
        </div>

        <div class="room-list" v-for="(a,i) in datarooms" :key="i">
            <div><a href="#" @click="btnmodalopen($event,i)"><img :src="a.image"></a></div>
            <div><a href="#" @click="btnmodalopen($event,i)" class="title">{{a.title}}</a></div>
            <p>{{a.content}}</p>
            <p class="price">{{a.price}}원</p>
            <button @click="btnincrease(i)">허위매물신고🚨</button> <span>신고수 : {{datarooms[i].Num}}</span>
        </div>
    </div>
</template>
<script>
import oneroom from '../assets/oneroom';

export default {
  name: 'Home',
  data(){
    return{
      datarooms : oneroom,
      modalopen: false,
      modaltarget: 0,
    }
  },
  methods: {
    btnmodalopen(event,i){
      event.preventDefault();
      this.modalopen = true; 
      this.modaltarget = i;
    },
    btnincrease(i){
      this.datarooms[i].Num += 100;
    },
    btnmodalclose(){
      this.modalopen = false;
    }
  },
}
</script>

<style>
.room-list{padding:50px 0;border-bottom:1px solid #ddd;}
.room-list a{display:inline-block;}
.room-list img{width:100%;max-width:300px;}
.room-list .title{font-weight: bold;font-size:20px;margin:10px 0;}
.price{font-weight:bold;}
.black-bg{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background:rgba(0,0,0,0.8);}
.black-bg .white-bg{background:#fff;padding:50px;position:absolute;top:50px;left:50%;width:600px;margin-left:-300px;box-sizing:border-box;border-radius:10px;}
.black-bg img{max-width:500px;}
</style>