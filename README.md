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
