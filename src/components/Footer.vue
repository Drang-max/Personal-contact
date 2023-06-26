<template lang="">
  <el-row>
    <!-- 底部处理 -->
    <el-col v-if="list.length" :span="24" class="thing col2">
      <div>
        <el-checkbox
          size="large"
          lable="item"
          v-model="selectAll"
          @change="stateChange"
        />
        <span>全部 {{ list.length }}/已完成{{ count }}</span>
      </div>
      <el-button type="danger" size="small" @click="deleteSelete"
        >删除选中</el-button
      >
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { toRefs, computed, watch, ref } from 'vue';

let props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
let { list } = toRefs(props);

//已完成数量
let count = computed(() => {
  return list.value.reduce((pre: any, item: any) => {
    return pre + (item.isSelect ? 1 : 0);
  }, 0);
});
let selectAll = ref<any>(false);
//如果有一个没选全选就不选中
watch(
  () => list.value.map((item: any) => item.isSelect),
  (newVal, oldVal) => {
    let newState = newVal.every((item: any) => item == true);
    selectAll.value = newState;
  }
);
//全选全不选
let stateChange = () => {
  list.value.forEach((item: any) => (item.isSelect = selectAll.value));
};

let emit = defineEmits(['deleteAll']);
let deleteSelete = () => {
  emit('deleteAll');
};
</script>
<style lang="scss">
.thing {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeee;
}

.col2 {
  padding: 0 10px 0 10px;
}
</style>
