<template>
  <div class="sequence-wrapper">
    <div id="diagram-container" class="diagram"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import mermaid from 'mermaid';

const diagram = `sequenceDiagram
    participant A as 上位测试仪
    participant B as 被测控制器
    participant C as 下位测试仪

    A->>B: 指令：读取控制器缓存
    B-->>A: 事件：指令执行完成

    Note over A,B: 建立连接并创建异步数据链路

    A->>B: 链路：单独发送1个数据包
    B->>C: 异步数据发送
    B-->>A: 事件：成功发送的数据包数量

    A->>B: 链路：连续发送N个数据包
    B->>C: 异步数据发送
    B-->>A: 事件：成功发送的数据包数量

    loop 异步数据发送
      B->>C: 异步数据发送
    end

    B-->>A: 事件：成功发送的数据包数量`;

onMounted(async () => {
  mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'default' });
  const { svg } = await mermaid.render('prototype-sequence', diagram);
  const container = document.getElementById('diagram-container');
  if (container) container.innerHTML = svg;
});
</script>

<style scoped>
.sequence-wrapper {
  padding: 16px;
  background: #ffffff;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.diagram :deep(svg) {
  width: 100%;
  height: auto;
}
</style>
