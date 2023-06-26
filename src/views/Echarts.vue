<template>
  <el-row>
    <el-col :span="12">
      <Chart :option="option" @change="handleOne"></Chart>
    </el-col>
    <el-col :span="12"> <div id="chartTwo"></div> </el-col>
  </el-row>

  <el-row>
    <el-col :span="12"> <div id="chartThr"></div></el-col>
    <el-col :span="12"> <div id="chartFro"></div></el-col>
  </el-row>
</template>

<script setup lang="ts">
/**
 * *{getCurrentInstance} 获取全局
 */
import Chart from '@/components/charts.vue';

import { getCurrentInstance, ref, onMounted, reactive } from 'vue';
//引入乐山json数据
import leShan from '@/assets/leshan.json';
let $echarts =
  getCurrentInstance()?.appContext.config.globalProperties.$echarts;

// let chartFirst = ref<any>(null);
let chartSec = ref<any>(null);
let chartThi = ref<any>(null);
let chartFourth = ref<any>(null);

let option = reactive<any>({
  title: {
    text: '销售记录',
  },
  tooltip: {}, //hover到图表的小提示
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '三月销量',
      type: 'bar', //图形
      data: [12, 34, 576, 79, 1, 123],
    },
  ],
});
let handleOne = (params: any) => {
  console.log(params);
};
//折线图
const initOne = () => {
  let chartOne = (chartFirst.value = $echarts.init(
    document.getElementById('chartOne')
  ));

  chartOne.setOption({
    title: {
      text: '每周学习人数趋势',
      left: 'center',
      textStyle: {
        fontSize: 14,
        color: '#6e7079f2',
      },
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
    },
    yAxis: {
      name: '人数',
      type: 'value',
    },
    series: [
      {
        itemStyle: {
          color: '#87c7e9',
        },
        smooth: true,
        lineStyle: {
          width: 1,
        },
        areaStyle: {},
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line', //折线图
      },
      {
        itemStyle: {
          color: '#87c7e9',
        },
        smooth: true,
        lineStyle: {
          width: 1,
        },
        data: [50, 260, 124, 118, 195, 177, 250],
        type: 'line', //折线图
      },
    ],
  });
};
//柱形图
const initTow = () => {
  let chartTwo = (chartSec.value = $echarts.init(
    document.getElementById('chartTwo')
  ));
  chartTwo.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  });
};
//饼图
const initThr = () => {
  let chartThr = (chartThi.value = $echarts.init(
    document.getElementById('chartThr')
  ));

  chartThr.setOption({
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' },
        ],
      },
    ],
  });
};
//地图
/***
 * 需要下载geojson数据
 *
 */
const inintMap = () => {
  //注册地图
  $echarts.registerMap('leshan', leShan);

  let chartFro = (chartFourth.value = $echarts.init(
    document.getElementById('chartFro')
  ));

  chartFro.setOption({
    tooltip: {},
    geo: [
      {
        map: 'leshan', //注：名字必须与注册的名字保持一致
        aspectScale: 1, //设置1:1的显示比例
        itemStyle: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          shadowColor: 'rgba(128, 217, 248, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        label: {
          show: true,
          color: '#fff',
        },
        select: {
          //设置选中样式
          itemStyle: {
            areaColor: '#2B91B7', //自定义选中区域颜色
          },
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff',
          },
          itemStyle: {
            areaColor: '#2B91B7', //自定义hover区域颜色
          },
        },
      },
    ],
    series: [
      {
        type: 'map',
        map: 'ls',
        geoIndex: 0,
        textFixed: {
          Alaska: [20, -20],
        },
        data: [
          {
            pCode: 511132,
            value: 130,
            name: '峨边彝族自治县',
          },
          {
            pCode: 511129,
            value: 100,
            name: '沐川县',
          },
          {
            pCode: 511126,
            value: 100,
            name: '夹江县',
          },
          {
            pCode: 511114,
            value: 100,
            name: '峨眉山市',
          },
          {
            pCode: 511124,
            value: 100,
            name: '井研县',
          },
          {
            pCode: 511111,
            value: 100,
            name: '沙湾区',
          },
          {
            pCode: 511102,
            value: 100,
            name: '市中区',
            selected: true,
          },
          {
            pCode: 511133,
            value: 100,
            name: '马边彝族自治县',
          },
          {
            pCode: 511112,
            value: 100,
            name: '五通桥区',
          },
          {
            pCode: 511113,
            value: 100,
            name: '金口河区',
          },
          {
            pCode: 511123,
            value: 110,
            name: '犍为县',
          },
        ],
        itemStyle: {
          normal: {
            label: {
              show: true, //false是隐藏地图上的地名
              textStyle: {
                color: '#ccfcc0',
                fontSize: 12,
              },
            },
            color: '#b03a5b',
            borderColor: '#ccc0ff',
            borderWidth: 1,
            shadowColor: '#1846a4',
            shadowBlur: 5,
            borderJoin: 'round',
          },
        },
      },
    ],
  });
};
onMounted(() => {
  // initOne();
  initTow();
  initThr();
  inintMap();
});
</script>

<style scoped>
#chartOne,
#chartTwo,
#chartThr,
#chartFro {
  height: 360px;
}
</style>
