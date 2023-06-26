<template lang="">
  <el-row>
    <!-- 事件内容 -->
    <el-col :span="24" class="col1">
      <template v-for="item in list" :key="item.id">
        <div class="thing">
          <div>
            <el-checkbox size="large" lable="item" v-model="item.isSelect" />
            <span name="item">{{ item.title }}</span>
          </div>
          <div>
            <el-button type="primary" size="small" @click="changeVal(item)"
              >修改</el-button
            >
            <el-button type="danger" size="small" @click="deleteOne(item.id)"
              >删除</el-button
            >
          </div>
        </div>
      </template>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue';

let props = defineProps({
  list: {
    type: Object,
    required: true,
  },
  changeValue: {
    type: Object,
    required: true,
  },
});
let { list, changeValue } = toRefs(props);

let emit = defineEmits(['deleteDate', 'setValue']);

let deleteOne = (id: number) => {
  emit('deleteDate', id);
};

let changeVal = (item: object) => {
  emit('setValue', item);
};
</script>
<style lang="scss">
.col1 {
  padding: 10px 10px 10px 10px;
}
</style>
