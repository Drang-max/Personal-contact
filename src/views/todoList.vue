<template>
  <div class="content">
    <InputBox @addContent="addContent" :changeValue="changeValue"></InputBox>
    <Content
      :list="list"
      @deleteDate="deleteDate"
      :changeValue="changeValue"
      @setValue="setValue"
    ></Content>
    <!-- 底部全选和删除 -->
    <Footer :list="list" @deleteAll="deleteAll"></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import InputBox from '@/components/InputBox.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

//申明一个数组里面是对象的约束接口
interface TODO {
  id: number;
  title: string;
  isSelect: boolean;
  isEdit: boolean;
}

let list = reactive<TODO[]>([]);

let changeValue: any = ref(null);

//添加一个记录
let addContent = (obj: any) => {
  //如果输入为空就直接返回
  if (!obj.value.trim()) return;
  //否则创建一个对象
  let todoObj: TODO = {
    id: Date.now(),
    title: obj.value,
    isSelect: false,
    isEdit: false,
  };
  list.push(todoObj);
};

// 删除一个记录;
let deleteDate = (id: number) => {
  let findIndex = list.findIndex((item) => item.id == id);
  list.splice(findIndex, 1);
};
//删除已经选中的数据
let deleteAll = () => {
  let arr = list.filter((item) => item.isSelect);
  list.map((item, index) => {
    if (arr.map((item) => item.id).includes(item.id)) {
      list.splice(index, arr.length);
    }
  });
};
//
let setValue = (item: any) => {
  // changeValue = [];
  // changeValue.push(item);
  changeValue = item;
};

// //修改编辑状态
// let changeVal = (id: any) => {
//   let user: TODO | any = list.find((item) => (item.id = id));
//   user.isEdit = true;
// };

// //修改数据
// let changeNewVal = (id: any) => {
//   list.map((item) => {
//     if (item.id == id) {
//       item.title = changeInp;
//       item.isEdit = false;
//     }
//   });
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.content {
  margin: 0 auto;
  width: 500px;
  border: 1px solid red;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #eeeee7;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
</style>
