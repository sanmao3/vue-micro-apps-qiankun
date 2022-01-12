<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h3>Hi, it's me, micro root</h3>
    <button @click="goToApp1">click</button>

    <div id="microAppContainer"></div>
  </div>
</template>

<script>
import { start } from 'qiankun'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  methods: {
    goToApp1(){
      this.$router.push('/home/app1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
