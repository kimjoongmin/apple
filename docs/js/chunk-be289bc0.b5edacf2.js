(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be289bc0"],{"0aed":function(t,e,s){"use strict";s("5480")},5480:function(t,e,s){},"7d36":function(t,e,s){"use strict";s.r(e);var c=s("7a23"),n={class:"inner"},r={class:"section"},i=Object(c["g"])("h3",null,"1. 좋아요~",-1),u={key:1,class:"like"},o=Object(c["f"])("좋아요 했습니다 "),l={class:"section"},a=Object(c["g"])("h3",null,"2. 구구단!!",-1),b={class:"problem"},d={class:"first"},h=Object(c["f"])("곱하기 "),f={class:"second"},j=Object(c["f"])("는?"),O=Object(c["g"])("button",{type:"submit"},"입력!!",-1),v={class:"result"},w={class:"section"},p=Object(c["g"])("h3",null,"3. 끝말잇기!",-1),g={class:"word"},m=Object(c["g"])("button",{type:"submit"},"입력!!",-1),k={class:"result"};function y(t,e,s,y,M,D){return Object(c["p"])(),Object(c["d"])("div",n,[Object(c["g"])("div",r,[i,1==M.like?(Object(c["p"])(),Object(c["d"])("button",{key:0,onClick:e[1]||(e[1]=function(){return D.btnlike&&D.btnlike.apply(D,arguments)})},"Like 👍")):(Object(c["p"])(),Object(c["d"])("div",u,[o,Object(c["g"])("button",{onClick:e[2]||(e[2]=function(){return D.btncancel&&D.btncancel.apply(D,arguments)})},"취소 😎")]))]),Object(c["g"])("div",l,[a,Object(c["g"])("div",b,[Object(c["g"])("span",d,Object(c["y"])(M.first),1),h,Object(c["g"])("span",f,Object(c["y"])(M.second),1),j]),Object(c["g"])("form",{onSubmit:e[4]||(e[4]=function(t){return D.btn99submit(t)})},[Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return M.value=t}),ref:"cursor"},null,512),[[c["A"],M.value]]),O],32),Object(c["g"])("div",v,Object(c["y"])(M.result),1)]),Object(c["g"])("div",w,[p,Object(c["g"])("div",g,Object(c["y"])(M.word),1),Object(c["g"])("form",{onSubmit:e[6]||(e[6]=function(t){return D.btnwordsubmit(t)})},[Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return M.wordvalue=t}),ref:"cursor2"},null,512),[[c["A"],M.wordvalue]]),m],32),Object(c["g"])("div",k,Object(c["y"])(M.wordresult),1)])])}var M={name:"Game",data:function(){return{like:!0,first:Math.ceil(9*Math.random()),second:Math.ceil(9*Math.random()),result:"맞출 수 있을까?",value:"",wordresult:"끝말잇기 시작",word:"김중민",wordvalue:""}},methods:{btnlike:function(){this.like=!1},btncancel:function(){this.like=!0},btn99submit:function(t){t.preventDefault(),this.first*this.second===parseInt(this.value)?(this.result="올~ 딩동댕 😊",this.value="",this.first=Math.ceil(9*Math.random()),this.second=Math.ceil(9*Math.random()),this.$refs.cursor.focus()):(this.result="땡ㅋㅋ 바보 😥",this.value="",this.$refs.cursor.focus())},btnwordsubmit:function(t){t.preventDefault();var e=this.word[this.word.length-1];this.word[this.word.length-1]==this.wordvalue[0]?(this.word=this.wordvalue,this.wordresult="딩동댕 😊",this.wordvalue="",this.$refs.cursor2.focus()):(this.wordresult="멍충아~ "+e+" (으)로 시작한다고  😥",this.wordvalue="",this.$refs.cursor2.focus())}}};s("0aed");M.render=y;e["default"]=M}}]);
//# sourceMappingURL=chunk-be289bc0.b5edacf2.js.map