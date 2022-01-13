<template>
  <div>
    <div class="header">home header</div>
    <div class="content">
      <div class="menu">home menu</div>
      <div class="main">
        <router-view></router-view>
        <div id="microAppContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { start } from 'qiankun'

export default {
  mounted(){
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  }
}
</script>

<style scoped>
.header {
  padding: 10px 0;
  background: #eee;
}

.content {
  display: flex;
}

.menu {
  width: 200px;
  border: 1px solid #ccc;
}
</style>>