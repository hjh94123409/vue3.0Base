<template>
  <div>
    case1: <input v-model="message" type="text" />
    <hr />
    case2: <input v-model="message2" type="text" />
    <hr />
    case3: <input v-model="message3.foo.bar.name" type="text" />
    <hr />
    case4: <input v-model="message4.foo.bar.name" type="text" />
    <input v-model="message4.foo.bar.age" type="text" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue";

let message = ref<string>("呵呵了");
let message2 = ref<string>("嘻嘻嘻");
let message3 = reactive({
  foo: {
    bar: {
      name: "哈哈哈",
    },
  },
});

let message4 = reactive({
  foo: {
    bar: {
      name: "哈哈哈",
      age: 18,
    },
  },
});

watch(message, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// ref 必须要开启deep:true才可以深度监听，并且返回的新值和旧值是一样的
// reactive 不需要开启deep:true，源码默认开启
watch(
  message3,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    // deep: true, //深度监听
    // immediate: true, //立即执行一次
    // flush: "pre", // pre 组件更新之前调用 sync 同步执行 post 组件更新之后执行
  }
);

//监听单一属性，需要写成函数形式
watch(
  () => message4.foo.bar.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
</script>

<style scoped></style>
