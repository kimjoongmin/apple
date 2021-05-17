<template>
    <div class="black-bg" v-if="modalopen == true"> 
        <div class="white-bg">
            <div><img :src="datarooms[modaltarget].image"></div>
            <h3>{{datarooms[modaltarget].title}}</h3>
            <p>{{datarooms[modaltarget].content}}</p>
            <p><input type="range" min="1" max="12" v-model="month"></p>
            <input type="text" class="month" v-model.number="month"> 개월 계산
            <!-- <input type="text" @input="month = $event.target.value"> -->
            <p class="price">{{month}}개월 선택함 : {{datarooms[modaltarget].price * month}}  원</p>
            <!-- <p class="price">{{datarooms[modaltarget].price}}원</p> -->
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
      return{
        month: 1,
      }
    },
    watch:{//데이터 감시
      month(a){//파라미터 작명 (a,b)(변경후데이터,변경전데이터)
        if(isNaN(a) == true){
          alert('숫자만 입력할 수 있습니다');
          this.month='1';
        } else if(a > 13){
          alert('13이상 입력하지 마세요');
          this.month='1';
        }
      },
    },
    props: {
      datarooms : Array,
      modalopen: Boolean,
      modaltarget: Number,
      //작명: 문자열(String)
      //작명: Object
    },
    updated() {//lifecycle hook
      if(this.month == 2){
        alert('숙제완료!!');
        this.month = 12;//2개월은 안팜 12개월부터
      }       
    },
}
</script>

<style>

</style>