import { reactive, onMounted, onUnmounted, Ref, ref } from 'vue';
import _ from 'lodash';
export function useScroll(
  relEl: Ref<Element> | Window = window,
  isThrottle?: boolean
) {
  let scroll = reactive({
    x: 0,
    y: 0,
  });

  //抽取判断这个节点是window 还是 dom节点
  function isWindow(refEl: any) {
    return (
      refEl == window &&
      Object.prototype.toString.call(refEl) == '[object Window]'
    );
  }

  if (isWindow(relEl) || isThrottle) {
    _.throttle(scrollHandle, 100);
  }

  //给这个x , y 坐标赋值
  function scrollHandle() {
    if (isWindow(relEl)) {
      (scroll.x = window.scrollX), (scroll.y = window.scrollY);
    } else {
      scroll.x = (relEl as Ref).value.scrollLeft;
      scroll.y = (relEl as Ref).value.scrollTop;
    }
  }
  //手动清除这个事件的监听
  function stop() {
    if (isWindow(relEl)) {
      window.removeEventListener('scroll', scrollHandle);
    } else {
      (relEl as Ref).value.removeEventListener('scroll', scrollHandle);
    }
  }
  //在挂载完毕的时候绑定事件
  onMounted(() => {
    if (isWindow(relEl)) {
      window.addEventListener('scroll', scrollHandle);
    } else {
      (relEl as Ref).value.addEventListener('scroll', scrollHandle);
    }
  });
  //在页面销毁的时候移除事件
  onUnmounted(() => {
    stop();
  });

  return scroll;
}
