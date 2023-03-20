<script setup lang="ts">
import { ref, Ref } from "vue";
const count = ref(0);
const clickHandler = () => {
  count.value++;
};

const arr: number[] = [1, 2, 3, 4, 5];

const myTxt: string = "我是一段文字";

const myHtml: string = "<h3 style='color: red'>我是一段HTML代码</h3>";

const myIf: boolean = true;
const myElseIf: string = "C";
const myShow: boolean = true;

const event = "click";
const eventHandler = () => {
  console.log("我是指令v-on输出的内容");
};

const myId: string = "hehele";

const myStyle = {
  color: "greenYellow",
  border: "2px solid #bfa",
};

const myClassBoolean: boolean = true;

const myFor: string[] = ["A", "B", "C"];

const myOnce: Ref = ref("我是once的值");
const onceHandler = () => {
  console.log("onceHandler执行了");
  myOnce.value = "我改变了once的值";
};

const myArr: Ref = ref([1, 2, 3]);
const addHandler = () => {
  myArr.value.push(myArr.value.length + 1);
};
</script>

<template>
  <div>{{ count }} -- <button @click="clickHandler">点我一下</button></div>
  <hr />
  <div>
    {{ arr.map((v) => ({ num: v })) }}
  </div>
  <hr />
  <div v-text="myTxt"></div>
  <div v-html="myHtml"></div>
  <div v-if="myIf">我是指令v-if</div>
  <div v-if="myElseIf === 'A'">我是v-if中的内容</div>
  <div v-else-if="myElseIf === 'B'">我是v-else-if中的内容</div>
  <div v-else>我是else中的内容</div>
  <div v-show="myShow">我是指令v-show</div>
  <hr />
  <div>
    <button @[event]="eventHandler">我是指令v-on</button>
  </div>
  <hr />
  <div v-bind:id="myId">我是指令v-bind</div>
  <div :id="myId">我是简写指令 :</div>
  <div :style="myStyle">我是style</div>
  <div :class="['myBorder', 'myColor']">我是验证class</div>
  <div :class="myClassBoolean ? 'myBorder' : 'myColor'">我是验证动态class</div>
  <hr />
  <ul>
    <li v-for="(elem, index) in myFor">{{ index }} -- {{ elem }}</li>
  </ul>
  <hr />
  <div v-once>
    {{ myOnce }} -- <button @click="onceHandler">点我改变once的值</button>
  </div>
  <div>
    <button @click="addHandler">点我增加值</button>
    <ul>
      <li v-for="item in myArr" v-memo="[item === 2]">
        显示{{ item }} -- {{ item === 2 }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.myBorder {
  border: 1px solid rebeccapurple;
}
.myColor {
  color: blueviolet;
}
</style>
