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
`bash
        watch(message, (newVal, oldVal) => {
            console.log(newVal, oldVal);
        });
    `
监听多个值
`bash
        watch([message, message2], (newVal, oldVal) => {
            console.log(newVal, oldVal);
        });
    `
`ref` 必须要开启`deep:true`才可以深度监听，并且返回的新值和旧值是一样的
`reactive` 不需要开启`deep:true`，源码默认开启

一些属性设置
`bash
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
    `
监听单一属性，需要写成函数形式

```bash
    watch(
        () => message.foo.bar.name,
        (newVal, oldVal) => {
            console.log(newVal, oldVal);
        }
    );
```
