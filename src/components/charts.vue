<!-- 
    封装echarts组件
    1.书写组件的模板

 -->

<template>
  <div class="chartBox" ref="charts"></div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import {
  getCurrentInstance,
  ref,
  defineProps,
  defineEmits,
  toRefs,
  onMounted,
  watch,
} from 'vue';
let $echarts =
  getCurrentInstance()?.appContext.config.globalProperties.$echarts;

//获取节点
let charts = ref<any>();

let chartsObj = ref<any>();

//接收父组件传过来的参数
let props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['change']);

let { option } = toRefs(props);

onMounted(() => {
  let chartInner = (chartsObj.value = $echarts.init(charts.value));
  chartInner.setOption(option.value);
  //开启响应式
  window.onresize = _.debounce(() => {
    chartInner.resize();
  }, 200);

  chartInner.on('click', (params: any) => {
    emit('change', params);
  });
});

watch(props.option, (newVal, oldVal) => {
  chartsObj.value.setOption(newVal);
});
</script>

<style>
.chartBox {
  height: 100%;
}
</style>
