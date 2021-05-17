<template>
  <div class="discount">
      <h3>지금 결제하면 <span class="sale">{{sale}}</span>% 할인</h3>
  </div>
</template>

<script>
export default {
    name: 'Discount',
    data(){
      return{
        sale: 30,
      }
    },
    mounted(){//lifecycle hook
      setInterval(()=>{
        if(this.sale > 0){
          this.sale -= 1;
        }
      }, 1000);
    },
}
</script>

<style scope>
  .sale{font-size:30px;color:red;}
</style>