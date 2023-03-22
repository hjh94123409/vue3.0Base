import { createApp } from "vue";

import "reset.less";

// import Card from "./components/Card.vue";

import App from "./App.vue";

const app = createApp(App);

//定义全局组件
// app.component("Card", Card);

app.mount("#app");
