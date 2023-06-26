<template>
  <div class="containner">
    <div class="scrool">y:{{ scrool.y }}</div>
    <ul class="img-box">
      <li
        v-for="item of obj"
        :key="item.id"
        class="box"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <span>{{ item.title }}</span>
        <el-image
          :src="require(`../assets/${item.url}`)"
          :lazy="true"
          class="img"
        ></el-image>
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script lang="ts" setup>
interface ITEM {
  id: any;
  title: String;
  url: String;
}

import { useScroll } from '../hooks/useScroll';

import { reactive, ref, Ref, computed } from 'vue';

let obj = reactive<ITEM[]>([
  {
    id: new Date(),
    title: '山河秀丽',
    url: 'th (1).jpg',
  },
  {
    id: new Date(),
    title: '美丽中国',
    url: 'th (2).jpg',
  },
  {
    id: new Date(),
    title: '绚烂文化',
    url: 'th (3).jpg',
  },
  { id: new Date(), title: '源远流长', url: 'th.jpg' },
  {
    id: new Date(),
    title: '山河秀丽',
    url: 'th (1).jpg',
  },
  {
    id: new Date(),
    title: '美丽中国',
    url: 'th (2).jpg',
  },
  {
    id: new Date(),
    title: '绚烂文化',
    url: 'th (3).jpg',
  },
  { id: new Date(), title: '源远流长', url: 'th.jpg' },
  {
    id: new Date(),
    title: '山河秀丽',
    url: 'th (1).jpg',
  },
  {
    id: new Date(),
    title: '美丽中国',
    url: 'th (2).jpg',
  },
  {
    id: new Date(),
    title: '绚烂文化',
    url: 'th (3).jpg',
  },
  { id: new Date(), title: '源远流长', url: 'th.jpg' },
]);

let loading: Ref<boolean> = ref(false);
let noMore = computed(() => {
  return obj.length > 200;
});
const disabled = computed(() => loading.value || noMore.value);
let load = () => {
  loading.value = true;

  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
    obj.push(
      {
        id: new Date(),
        title: '山河秀丽',
        url: 'th (1).jpg',
      },
      {
        id: new Date(),
        title: '美丽中国',
        url: 'th (2).jpg',
      },
      {
        id: new Date(),
        title: '绚烂文化',
        url: 'th (3).jpg',
      },
      { id: new Date(), title: '源远流长', url: 'th.jpg' }
    );
    console.log('aaaaa');

    loading.value = false;
  }, 1500);
};
let scrool = useScroll();
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.containner {
  .scrool {
    position: fixed;
    bottom: 200px;
    background-color: bisque;
    font-size: 20px;
    left: 200px;
    z-index: 1;
  }
  .img-box {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;
    .box {
      width: 24.5%;
      height: 200px;
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      .img {
        width: 100%;
      }
    }
  }
}
</style>
