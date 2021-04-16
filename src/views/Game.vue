 <template>
    <div class="inner">
      
      
      <div class="section">
        <h3>1. 좋아요~</h3>
        <button v-if="like == true" @click="btnlike">Like 👍</button>
        <div  v-else class="like">좋아요 했습니다 <button @click="btncancel">취소 😎</button></div>
      </div>
      
      <div class="section">
        <h3>2. 구구단!!</h3>
        <div class="problem"><span class="first">{{first}}</span>곱하기 <span class="second">{{second}}</span>는?</div>
        <form @submit="btn99submit($event)">
          <input type="text" v-model="value" ref="cursor">
          <button type="submit">입력!!</button>
        </form>
        <div class="result">{{result}}</div>
      </div>

      <div class="section">
        <h3>3. 끝말잇기!</h3>
        <div class="word">{{word}}</div>
        <form @submit="btnwordsubmit($event)">
          <input type="text" v-model="wordvalue" ref="cursor2">
          <button type="submit">입력!!</button>
        </form>
        <div class="result">{{wordresult}}</div>
      </div>

    </div>
</template>
<script>

export default {
  name: 'Game',
  data(){
    return{
      like: true,
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      result: '맞출 수 있을까?',
      value: '',
      wordresult: '끝말잇기 시작',
      word: '김중민',
      wordvalue: '',
    }
  },
  methods: {
    btnlike(){
      this.like = false;
    },
    btncancel(){
      this.like = true;
    },
    btn99submit(event){
      event.preventDefault();
      if(this.first*this.second===parseInt(this.value)){
        this.result = '올~ 딩동댕 😊';
        this.value = '';
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.$refs.cursor.focus();
      }else{
        this.result = '땡ㅋㅋ 😥';
        this.value = '';
        this.$refs.cursor.focus();
      }
    },
    btnwordsubmit(event){
      event.preventDefault();
      var endword =  this.word[this.word.length - 1];
      if(this.word[this.word.length - 1] == this.wordvalue[0]){
        this.word = this.wordvalue;
        this.wordresult = '딩동댕 😊';
        this.wordvalue = '';
        this.$refs.cursor2.focus();
      }else{
        this.wordresult = '멍충아~ ' + endword + ' (으)로 시작한다고  😥';
        this.wordvalue = '';
        this.$refs.cursor2.focus();
      }
    },
  }
}
</script>

<style scope>
.section{padding:50px 0;border-bottom:1px solid #ddd;}
.problem{font-size:20px;color:#555;margin-bottom:20px;}
.problem span{font-size:30px;margin-right:5px;}
.first{color:red}
.second{color:blue;margin-left:10px;}
input{height:36px;border:1px solid #ddd;margin-right:5px;padding:0 0 0 5px;font-size:14px;border-radius:3px;}
button{background:#f2f2f2;border:1px solid #bbb;box-sizing:border-box;height:38px;line-height:33px;font-size:14px;border-radius:3px;}
.result{margin:10px 0;font-size:50px;font-weight:bold;}
.word{font-size:40px;color:#555;font-weight:bold;margin-bottom:10px;}
</style>