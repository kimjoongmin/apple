<template>
    <div>
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
export default {
    name: 'Card',
    props:{
        datarooms: Array,
    },
}
</script>

<style>

</style>