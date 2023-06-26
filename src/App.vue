<template>
  <nav>
    <router-link to="/fours">其他</router-link>|
    <router-link to="/echarts">数据可视化</router-link>|
    <router-link to="/todoList">todoList</router-link>|
    <router-link to="/validation">验证码输入框</router-link>|
    <router-link to="/conditionalfilter">多条件选择</router-link>|
    <router-link to="/lazyLoader">懒加载</router-link>|
    <router-link to="/usehook">功能函数的使用</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #e3e3e3e3;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
