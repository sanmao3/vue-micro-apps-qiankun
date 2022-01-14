<template>
  <div>
    <!-- 头部 -->
    <div class="header">root app header</div>
    <!-- 主体 -->
    <div class="main">
      <!-- 左侧菜单 -->
      <div class="menu">
        <div>root app aside menu</div>
        <button @click="backToHome">back to root app home</button>
      </div>
      <!-- 内容 -->
      <div class="content">
        <router-view></router-view>
        <div id="microAppContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  methods: {
    backToHome(){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
.header {
  padding: 10px 0;
  background: #eee;
  margin-bottom: 10px;
}

.main {
  display: flex;
}

.menu {
  width: 200px;
  background: #eee;
  padding: 15px;
  margin-right: 10px;
}

.content {
  flex: 1;
  border: 1px solid #eee;
  padding: 15px;
}
</style>>