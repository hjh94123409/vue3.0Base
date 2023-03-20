<script setup lang="ts">
import { computed, ref, reactive } from "vue";

const firstName = ref("");
const lastName = ref("");

// const fullName = computed(() => {
//   return firstName.value + "--" + lastName.value;
// });

const fullName = computed({
  get() {
    return firstName.value + "--" + lastName.value;
  },
  set() {
    firstName.value + "--" + lastName.value;
  },
});

type Shop = {
  id: string;
  name: string;
  num: number;
  price: number;
};

const myData = reactive<Shop[]>([
  {
    id: "001",
    name: "js",
    num: 1,
    price: 10,
  },
  {
    id: "002",
    name: "ts",
    num: 10,
    price: 36,
  },
  {
    id: "003",
    name: "vue",
    num: 9,
    price: 88,
  },
]);

const changeHandler = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--;
  }

  if (item.num < 99 && type) {
    item.num++;
  }
};

const delHandler = (index: number) => {
  myData.splice(index, 1);
};

let $total = ref(0);

// const totalPrice = () => {
//   $total.value = myData.reduce((prev, next) => {
//     return prev + next.num * next.price;
//   }, 0);
// };

// totalPrice();

$total = computed(() => {
  return myData.reduce((prev, next) => {
    return prev + next.num * next.price;
  }, 0);
});
</script>

<template>
  <div>
    <h2>Computed</h2>
    <div>
      <input v-model="firstName" type="text" /><br />
      <input v-model="lastName" type="text" />
    </div>
    <div>{{ firstName }} -- {{ lastName }}</div>

    <div>computed: {{ fullName }}</div>
    <hr />
    <table border cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单位</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="(item, index) in myData">
          <td>{{ item.name }}</td>
          <td>
            <button @click="changeHandler(item, false)">-</button>{{ item.num }}
            <button @click="changeHandler(item, true)">+</button>
          </td>
          <td>{{ item.num * item.price }}</td>
          <td><button @click="delHandler(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="5">总价：{{ $total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<style scoped></style>
