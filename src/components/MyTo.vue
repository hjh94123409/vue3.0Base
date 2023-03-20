<script setup lang="ts">
import { reactive, toRef, toRefs, toRaw } from "vue";

const myObj = reactive({
  name: "呵呵了",
  age: 18,
  like: "王者荣耀",
});
//toRef只能修改响应式对象 ref reactive
const myLike = toRef(myObj, "like");

const changeHandler = () => {
  //   myObj.name = "嘻喆";
  //   console.log(myObj);
  myLike.value = "打游戏";
  console.log(myLike);
};

//toRefs
// const myToRefs = <T extends object>(obj: T) => {
//   const map: any = {};
//   for (let key in obj) {
//     map[key] = toRef(obj, key);
//   }
//   return map;
// };

// const { name, age, like } = myToRefs(myObj);
const { name, age, like } = toRefs(myObj);

const changeHandler2 = () => {
  name.value = "嘻直哆嗦嘻";

  console.log(name, age, like);
};

const myToRaw = toRaw(myObj);
</script>

<template>
  <div>
    <h2>toRef toRefs toRaw</h2>
    <div>{{ myObj }} -- <button @click="changeHandler">按钮</button></div>
    <hr />
    <div>toRef: {{ myLike }}</div>
    <hr />
    <div>
      {{ name }} -- {{ age }} -- {{ like }} --
      <button @click="changeHandler2">按钮</button>
    </div>
    <hr />
    <div>toRaw: {{ myToRaw }}</div>
  </div>
</template>

<style scoped></style>
