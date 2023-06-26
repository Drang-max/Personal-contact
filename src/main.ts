import { Directive, createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入element-plus
import ElementPlus, { Direction } from 'element-plus';
import 'element-plus/dist/index.css';
//引入自定义指令
import * as directives from '@/directive/Loading/loading';

//引入Echarts
import * as echarts from 'echarts';

//定义全局自定义指令
const app = createApp(App);
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});
//将echarts成为全局变量
app.use(store).use(router).use(ElementPlus);
app.config.globalProperties.$echarts = echarts;

app.mount('#app');
