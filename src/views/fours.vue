<template>
  <div>{{ title }}</div>
  <hr />
  <div>{{ name }}————{{ age }}</div>
  <hr />
  <div>
    <div>个人信息</div>
    <div>姓名：{{ obj.name }}</div>
    <div>年龄：{{ obj.age }}</div>
    <div>性别：{{ obj.sex }}</div>
    <div>家庭成员</div>
    |
    <div>父亲：{{ obj.family.father }}</div>
    <div>母亲：{{ obj.family.mather }}</div>
    <button @click="clickHandler">点我一下有惊喜</button>
  </div>
  <hr />
  <button @click="handlerGo">点我去home页面哦</button>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, reactive, ref } from 'vue';
//导入路由对象和路由实例
import { useRoute, useRouter } from 'vue-router';
//声明obj对象的约束接
interface OBJ_IF {
  name: string;
  age: number;
  sex: string;
  family: family;
}
//声明家庭成员的约束类型别民

type family = {
  father: string;
  mather: string;
};

export default defineComponent({
  setup() {
    let title = ref('我是vue3的基础');
    /**
     * 如何声明响应式数据
     * *{ref} //主要是声明基本数据类型的
     * *{reactive} //主要是申明引用数据类型的
     */
    //基本数据类型
    let name = ref<string>('布吉岛 · 沙比秋');
    let age = ref<number>(19);
    //引用数据类型
    let obj = reactive<OBJ_IF>({
      name: '小王阿布',
      age: 18,
      sex: '男',
      family: {
        father: '隔壁老王',
        mather: '如花',
      },
    });
    //点击事件改变页面数据内容
    let clickHandler = () => {
      (name.value = '奥特曼'),
        (age.value = 12679876543),
        (obj.name = 'hhh'),
        (obj.age = 1212),
        (obj.sex = '人妖'),
        (obj.family.father = '校长'),
        (obj.family.mather = '教师');
    };
    //使用路由
    let router = useRouter();
    //编程式导航
    let handlerGo = () => {
      router.push('/home?id=hahaahahahahahahahhhahahhhaahhhaahhh');
    };

    return {
      title,
      name,
      age,
      obj,
      clickHandler,
      handlerGo,
    };
  },
});
</script>

<style></style>
