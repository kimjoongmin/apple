<template>
    <div class="inner">
        <!-- 컴포넌트 후 부모 자식간의 Props 및 custom event -->
        <!--<div class="start" :class="{ end : modalopen}"> transition 예시 -->
        <transition name="fade"><!--name="작명"-->
          <Modal :datarooms="datarooms" :modalopen="modalopen" :modaltarget="modaltarget" @closeModal="btnmodalclose" />
        </transition>
        <!-- </div> -->
        <!-- 컴포넌트 데이터 전송 Props :작명(:datarooms)="데이터항목(datarooms)" , custom event @작명(closeModal)="실행함수(btnmodalclose)" @click="$emit('작명(closeModal)')" -->

        <Discount v-if="showDiscount == true" />

        <!-- 데이터 정렬 -->
        <div class="sortArea right">
          <button @click="priceSort">가격순정렬</button>
          <button @click="priceBackSort">가격역순정렬</button>
          <button @click="wordSort">가나다순정렬</button>
          <button @click="sortBack">되돌리기</button>
        </div>

        <!-- <Ex :작명이름="오브젝트.name" :작명나이="오브젝트.age" />
        <Ex v-bind="오브젝트" /> 위에껄 아래껄로 줄일 수 있음 -->

        <!-- 원래 리스트 반복문 컴포넌트 때문에 주석함
        <div class="room-list" v-for="(a,i) in datarooms" :key="i">
            <div><a href="#" @click="btnmodalopen($event,i)"><img :src="a.image"></a></div>
            <div><a href="#" @click="btnmodalopen($event,i)" class="title">{{a.title}}</a></div>
            <p>{{a.content}}</p>
            <p class="price">{{a.price}}원</p>
            <button @click="btnincrease(i)">허위매물신고🚨</button> <span>신고수 : {{datarooms[i].Num}}</span>
        </div>-->

        <!-- 원룸 리스트 컴포넌트화 Props 및 custom event-->
        <!-- 자식에 반복문을 넣어놨을 경우
        <Card :datarooms="datarooms" />-->
        <!-- 자식에서 반복문 안썼을 경우 -->
        <Card :datarooms="datarooms[i]" v-for="(a,i) in datarooms" :key="i" @openModal="btnmodalopen(i)" @increase="btnincrease(i)" />

    </div>
</template>
<script>
import oneroom from '../assets/oneroom';
import Discount from '../components/Discount';
import Modal from '../components/Modal';
import Card from '../components/Card';


export default {
  name: 'Home',
  data(){
    return{
      showDiscount : true,
      //오브젝트 : {name : 'kim', age : 20},//ex
      datarooms : oneroom,
      originaldatarooms : [...oneroom], //사본만들기 
      modalopen: false,
      modaltarget: 0,
    }
  },
  methods: {
    btnmodalopen(i){
      event.preventDefault();
      this.modalopen = true; 
      this.modaltarget = i;
    },
    btnincrease(i){
      this.datarooms[i].Num += 10;
    },
    btnmodalclose(){
      this.modalopen = false;
    },
    priceSort(){//가격순정렬
      this.datarooms.sort(function(a,b){
        return a.price - b.price
      });
    },
    sortBack(){//되돌리기(복사데이터)
      this.datarooms = [...this.originaldatarooms];
    },
    priceBackSort(){//가격역순정렬
      this.datarooms.sort(function(a,b){
        return b.price - a.price
      });
    },
    wordSort(){//가나다순정렬//오름차순
      this.datarooms.sort(function(a,b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },    
  },
  created(){//html생성전 데이터만 있을때~

  },
  // mounted(){//메인페이지가 마운트 됐을때 2초 후에 사라지게~ lifecycle Hook
  //   setTimeout(()=>{
  //     this.showDiscount = false;
  //   }, 2000);
  // },
  components: {
    Discount,
    Modal,
    Card,
  }
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
.discount{background:#eee;padding:10px;border-radius:5px;}
input.month{width:30px;text-align:right;padding-right:5px;}
/* .start{opacity:0;transition:all 1s;}
.end{opacity:1;} */
/*transition 작명-enter-from*/
.fade-enter-from{opacity:0;margin-top:10px;} /*시작*/
.fade-enter-active{transition:all 0.5s;}
.fade-enter-to{opacity:1;margin-top:0;} /*끝*/
.fade-leave-from{opacity:1;margin-top:0;} /*시작*/
.fade-leave-active{transition:all 0.5s;}
.fade-leave-to{opacity:0;margin-top:10px;} /*끝*/
.sortArea{margin:10px 0;padding:10px 0;border-bottom:1px solid #999;}
.sortArea.right{text-align:right;}
.sortArea>button{padding:5px 10px;background:#f8f8f8;border:1px solid #ccc;color:#336699;margin:0 2px;}
</style>