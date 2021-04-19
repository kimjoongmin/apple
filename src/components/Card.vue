<template>
    <div>
        <!-- 자식에서 반복문 썼을 경우 -->
        <!-- <div class="room-list" v-for="(a,i) in datarooms" :key="i">
            <div><a href="#" @click="btnmodalopen($event,i)"><img :src="a.image"></a></div>
            <div><a href="#" @click="btnmodalopen($event,i)" class="title">{{a.title}}</a></div>
            <p>{{a.content}}</p>
            <p class="price">{{a.price}}원</p>
            <button @click="btnincrease(i)">허위매물신고🚨</button> <span>신고수 : {{datarooms[i].Num}}</span>
        </div> -->

        <!-- 자식에서 반복문 안썼을 경우 -->
        <div class="room-list">
            <div><a href="#" @click="$emit('openModal', datarooms.id)"><img :src="datarooms.image"></a></div>
            <div><a href="#" @click="openModalSend" class="title">{{datarooms.title}}</a></div>
            <p>{{datarooms.content}}</p>
            <p class="price">{{datarooms.price}}원</p>
            <button @click="increaseSend">허위매물신고🚨</button> <span>신고수 : {{datarooms.Num}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        datarooms: Object,
    },
    methods: {
        openModalSend(){
            this.$emit('openModal', this.datarooms.id);
        },
        increaseSend(){
            this.$emit('increase');
        }
    },
}
</script>

<style>

</style>