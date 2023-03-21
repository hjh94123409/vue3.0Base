# Vue 3 + TypeScript + Vite

## 指令

vue3.0 基础学习，指令：`v-on\v-bind\v-if\v-show\v-for`

## ref, isRef, shallowRef, triggerRef, customRef

`shallowRef` 浅层次

## reactive, readonly, shallowReactive

`reactive` 不能直接赋值，会破坏响应式对象
`readonly` 会受原始值的影响

## toRef, toRefs, toRaw

`toRef` 只能修改响应式对象

## computed

```bash
    const fullName = computed(() => {
        return firstName.value + "--" + lastName.value;
    });
```

```bash
    const fullName = computed({
        get() {
            return firstName.value + "--" + lastName.value;
        },
        set() {
            firstName.value + "--" + lastName.value;
        },
    });
```

## watch

基本用法：

```bash
    watch(message, (newVal, oldVal) => {
        console.log(newVal, oldVal);
    });
```

监听多个值

```bash
    watch([message, message2], (newVal, oldVal) => {
        console.log(newVal, oldVal);
    });
```

`ref` 必须要开启`deep:true`才可以深度监听，并且返回的新值和旧值是一样的
`reactive` 不需要开启`deep:true`，源码默认开启

一些属性设置

```bash
    watch(
        message,
        (newVal, oldVal) => {
            console.log(newVal, oldVal);
        },
        {
            // deep: true, //深度监听
            // immediate: true, //立即执行一次
            // flush: "pre", // pre 组件更新之前调用 sync 同步执行 post 组件更新之后执行
        }
    );
```

监听单一属性，需要写成函数形式

```bash
    watch(
        () => message.foo.bar.name,
        (newVal, oldVal) => {
             console.log(newVal, oldVal);
        }
    );
```

## watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行

```bash
    const stop = watchEffect(
        (onInvalidate) => {
            console.log("message===>", message.value);
            console.log("message1===>", message1.value);
            onInvalidate(() => {
                console.log("我先执行");
            });
        },
        {
            flush: "post", // 'pre' | 'post' | 'sync' // 默认：'pre'
            onTrigger(e) {
                debugger; //调试用
            },
        }
    );

    const stopHandler = () => {
        stop();
    };
```

## 生命周期

```bash
    //组件挂载前
    onBeforeMount(() => {
        console.log("onBeforeMount===", myTag.value);
    });
    //挂载完成
    onMounted(() => {
        console.log("onMounted", myTag.value);
    });
    //onBeforeMount 读不到dom，onMounted可以读取dom

    //更新之前
    onBeforeUpdate(() => {
        console.log("onBeforeUpdate", myTag.value?.innerText);
    });
    //更新完成
    onUpdated(() => {
        console.log("onUpdated", myTag.value?.innerText);
    });
    // onBeforeUpdate 获取的是更新前的dom
    // onUpdated 获取的是更新后的dom

    //卸载之前
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
    });
    //卸载完成
    onUnmounted(() => {
        console.log("onUnmounted");
    });

    //调试用的两个钩子
    onRenderTracked((e) => {
        console.log(e);
    });

    onRenderTriggered((e) => {
        console.log(e);
    });
```

## 父子组件传参

父组件给子组件传参：

```bash
    const props = defineProps<{
        title: string;
        arr: number[];
    }>();
```

ts 特有的 `withDefaults`

```bash
    const props = withDefaults(
        defineProps<{
            title: string;
            arr: number[];
        }>(),
        {
            arr: () => [1, 2, 3],
        }
    );
```

子组件给父组件传参：

```bash
    const emits = defineEmits<{
        (e: "on-click", value: string): void;
        (e: "on-click2", value: string): void;
    }>();

    const clickHandler = () => {
        emits("on-click", "给父组件的值");
        emits("on-click2", "给父组件的值");
    };
```

`defineExpose` 定义暴露

```bash
    defineExpose({
        name: "孙悟空",
        myChildFn: () => console.log("我是通过defineExpose暴露的方法"),
    });
```

```bash
    const myExpose = ref<InstanceType<typeof Child>>();

    const clickHandler = () => {
        console.log(myExpose.value?.name);
        myExpose.value?.myChildFn();
    };
```
