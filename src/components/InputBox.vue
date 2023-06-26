<template lang="">
  <div>
    <el-row>
      <!-- 输入框 -->
      <el-col :span="24">
        <el-input
          v-model="input"
          placeholder="请输入内容,确认请按Enter键"
          @keyup.enter="inputThing"
          @focus="isChange"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Ref, ref, toRefs, watch } from 'vue';
let props = defineProps({
  changeValue: {
    type: Object,
    required: true,
  },
});

let { changeValue } = toRefs(props);

let input = ref<any>('');

let emit = defineEmits(['addContent']);

let isChange: Ref<Boolean> = ref(false);

let inputThing = () => {
  emit('addContent', { value: input.value, item: changeValue.value });
  input.value = '';
};
</script>
<style lang="scss"></style>
