<template>
  <div>
    <div class="black-bg" v-if="modalopen == true"> 
        <div class="white-bg">
            <div><img :src="datarooms[modaltarget].image"></div>
            <h3>{{datarooms[modaltarget].title}}</h3>
            <p>{{datarooms[modaltarget].content}}</p>
            <p class="price">{{datarooms[modaltarget].price}}원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
      datarooms : Array,
      modalopen: Boolean,
      modaltarget: Number,
    },
}
</script>

<style>

</style>