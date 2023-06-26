<template>
  <div class="context">
    <span>{{ itemList.name }}:</span>
    <p
      v-for="goods in itemList.list"
      :key="goods.id"
      @click="handleSelect(itemList.id, goods)"
      :class="{ active: goods.id === currentID }"
    >
      {{ goods.name }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { toRefs, onMounted, ref, watch } from 'vue';

let props = defineProps({
  itemList: {
    type: Object,
    required: true,
  },
  deleteID: {
    type: String,
    required: true,
  },
});

let { itemList, deleteID } = toRefs(props);

let emit = defineEmits(['addList']);

let currentID = ref<string>('');

let handleSelect = (id: string, goods: any) => {
  currentID.value = goods.id;
  emit('addList', { ...goods, parentID: id });
};

watch(deleteID, (newValue) => {
  console.log(newValue);
  if (itemList.value.id == newValue) {
    currentID.value = '';
  }
});
onMounted(() => {
  console.log(itemList.value);
});
</script>
<style lang="scss" scoped>
.context {
  width: 100%;
  height: 55px;
  border-bottom: 1px dashed #eee;
  display: flex;
  align-items: center;
  p {
    height: 20px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .active {
    background-color: #28a5c4;
  }
}
</style>
