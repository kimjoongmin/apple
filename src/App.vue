<template>
  <div id="app">
    <div id="wrap">
      <Header />
      <div id="container">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
}
</script>
<style>
body{margin:0;padding:0;overflow-y:scroll;}
#wrap{position:relative;}
.inner{min-height:500px;margin:10px;}
h1{padding:200px 0;}
a{color:#555;text-decoration: none;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input{height:36px;border:1px solid #ddd;margin-right:5px;padding:0 0 0 5px;font-size:14px;border-radius:3px;}
</style>
