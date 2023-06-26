<template>
  <div class="containner">
    <div class="header">
      您的选择：
      <div class="header-title" v-for="item in list" :key="item.id">
        <p>{{ item.name }}</p>
        <span @click="remove(item)">X</span>
      </div>
    </div>
    <div class="content" v-for="item in propsList" :key="item.id">
      <List :itemList="item" :deleteID="deleteID" @addList="addList"></List>
    </div>
  </div>
</template>
<script setup lang="ts">
import List from '../components/List.vue';
interface GOODS {
  name: string;
  id: string;
  list: Array<LIST>;
}
interface LIST {
  name: string;
  id: string;
}
interface LISTONE {
  name: string;
  id: string;
  parentID: string;
}
import { reactive, ref } from 'vue';
//声明一个数组存放数据
let propsList = reactive<GOODS[]>([
  {
    name: '品牌',
    id: 'brand',
    list: [
      {
        name: '苹果',
        id: 'apple',
      },
      {
        name: '锤子',
        id: 'smartine',
      },
      {
        name: '华为',
        id: 'huawei',
      },
      {
        name: 'OPPO',
        id: 'oppo',
      },
      {
        name: '小米',
        id: 'xiaomi',
      },
    ],
  },
  {
    name: '尺寸',
    id: 'size',
    list: [
      {
        name: '3.0-3.9英寸',
        id: '3039',
      },
      {
        name: '4.0-4.9英寸',
        id: '4049',
      },
      {
        name: '5.0-5.9英寸',
        id: '5059',
      },
      {
        name: '6.0英寸以上',
        id: '6000',
      },
    ],
  },
  {
    name: '系统',
    id: 'system',
    list: [
      {
        name: '安卓',
        id: 'andriod',
      },
      {
        name: '苹果',
        id: 'ios',
      },
      {
        name: '其他',
        id: 'sys-other',
      },
    ],
  },
  {
    name: '网络',
    id: 'network',
    list: [
      {
        name: '双卡4G',
        id: 'shuang4g',
      },
      {
        name: '联通5G',
        id: 'telecom5g',
      },
      {
        name: '移动5G',
        id: 'mobile5g',
      },
      {
        name: '电信5G',
        id: 'tele5g',
      },
    ],
  },
]);
//申明一个渲染选中的数组
let list = reactive<LISTONE[]>([]);

let deleteID = ref<string>('');

let addList = function (item: LISTONE) {
  if (list.some((items) => items.parentID === item.parentID)) {
    let index = list.findIndex((items) => {
      return items.parentID === item.parentID;
    });
    list.splice(index, 1, item);
  } else {
    list.push(item);
  }
};

let remove = function (item: any) {
  let index = list.findIndex((items) => {
    return items.id == item.id;
  });
  console.log(item);

  list.splice(index, 1);
  deleteID.value = item.parentID;
};
</script>
<style lang="scss">
.containner {
  width: 550px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  .header {
    display: flex;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    background-color: #f1f8f8;
    .header-title {
      border: 1px solid #28a5c4;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      padding: 0 5px;
      margin: 0 4px;
      p {
        margin-right: 10px;
      }
      span {
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #28a5c4;
        cursor: pointer;
      }
    }
  }
}
</style>
