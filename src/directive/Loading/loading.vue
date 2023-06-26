<template>
  <div class="loading-wrap">
    <img src="./img/loading.gif" alt="正在加载中......" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.loading-wrap {
  position: absolute;
  top: 50%;
  width: 50%;
  transform: translateY(-50%);
}

.loading-wrap img {
  width: 100px;
  height: 100px;
}
</style>
