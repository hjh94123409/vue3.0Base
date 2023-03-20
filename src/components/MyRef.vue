<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";

import type { Ref } from "vue";

type M = {
  name: string;
  age: number;
};

// const Jab = ref<M>({
//   name: "jabriel",
//   age: 35,
// });

const Jab: Ref<M> = ref({
  name: "jabriel",
  age: 35,
});

const myIsRef: Ref<boolean> = ref(false);

const clickHandler = () => {
  //   Jab.value.name = "XXX";
  //   myIsRef.value = isRef(Jab);
};

// shallowRef 浅层次
const myShallowRef: Ref = shallowRef({ name: "呵呵了" });

const clickHandler2 = () => {
  myShallowRef.value = {
    name: "嘻嘻",
  };
};

const clickHandler3 = () => {
  myShallowRef.value.name = "嘻嘻";
  triggerRef(myShallowRef);
};

//customRef

const MyRef = <T>(value: T) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
};

const obj = MyRef<string>("呵呵了");

const clickHandler4 = () => {
  console.log(obj);
  obj.value = "customRef 修改了";
};

const myH1 = ref<HTMLElement>();

const clickHandler5 = () => {
  console.log(myH1.value?.innerText);
};
</script>

<template>
  <div>Ref: {{ Jab }} -- <button @click="clickHandler">按钮</button></div>
  <hr />
  <div>
    {{ myIsRef }}
  </div>
  <hr />
  <div>
    shallowRef: {{ myShallowRef }} --
    <button @click="clickHandler2">按钮</button>
  </div>
  <hr />
  <div>
    triggerRef: {{ myShallowRef }} --
    <button @click="clickHandler3">按钮</button>
  </div>
  <hr />
  <div>
    customRef: {{ obj }} -- <button @click="clickHandler4">按钮</button>
  </div>
  <hr />
  <div>
    <h1 ref="myH1">我是H1</h1>
    ref获取dom元素 -- <button @click="clickHandler5">按钮</button>
  </div>
</template>

<style scoped></style>
