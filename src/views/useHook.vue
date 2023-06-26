<template>
  <div class="fixed">{{ scroll.x }} :: {{ scroll.y }}</div>
  <div class="containner" ref="relEl">
    <div class="content">内容</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useScroll } from '../hooks/useScroll';

const relEl = ref();

let scroll = useScroll();
</script>
<style lang="scss">
.containner {
  width: 200px;
  height: 1010px;
  border: 1px solid red;
  overflow-y: scroll;
  margin: 0 auto;
  .fixed {
    position: fixed;
    top: 200;
    left: 300;
  }
  .content {
    height: 600px;
    background-color: #fff;
  }
}
</style>
