<script setup lang="ts">
import { reactive, readonly, shallowReactive } from "vue";

type M = {
  name: string;
  age: number;
};

const myForm = reactive<M>({
  name: "呵呵了",
  age: 18,
});

const submit = () => {
  console.log(myForm);
};

// const myList: number[] = reactive([]);
const myList = reactive<string[]>([]);

//reactive 不能直接赋值，会破坏响应式对象
const addHandler = () => {
  //   const _v = new Date().getTime();
  //   myList.push(_v);

  setTimeout(() => {
    const res = ["A", "B", "C"];
    myList.push(...res);
    console.log(myList);
  }, 2000);
};

const myObj = reactive({
  name: "天气不错",
});
//readonly会受原始值的影响
const myReadonly = readonly(myObj);

const clickhandler = () => {
  //   myReadonly.name = "Nice weather";
  myObj.name = "Nice weather";
  console.log(myObj);
};

//shallowReactive

const myShallowReactive = shallowReactive({
  foo: {
    bar: {
      num: 1,
    },
  },
});

const clickhandler2 = () => {
  myShallowReactive.foo.bar.num = 10;
};
</script>

<template>
  <h2>MyReactive</h2>
  <div>
    <form>
      <div>
        <input v-model="myForm.name" type="text" />
      </div>
      <div>
        <input v-model="myForm.age" type="text" />
      </div>
      <div>
        <button @click.prevent="submit">提交</button>
      </div>
    </form>
    <hr />
    <ul>
      <li v-for="item in myList">{{ item }}</li>
    </ul>
    <button @click="addHandler">按钮</button>
    <hr />
    <div>
      readonly: {{ myObj }} -- {{ myReadonly }} --
      <button @click="clickhandler">按钮</button>
    </div>
    <hr />
    shallowReactive:
    {{ myShallowReactive }} -- <button @click="clickhandler2">按钮</button>
  </div>
</template>

<style scoped></style>
