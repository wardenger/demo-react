Elements are the smallest building blocks of React apps.

Unlike browser DOM elements, React elements are plain objects, and are cheap to create.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

组件
- function components
- class components

1. Props are Read-Only
2. All React components must act like pure functions with respect to their props.
3. Class components should always call the base constructor with props.

State
1. Do Not Modify State Directly
2. State Updates May Be Asynchronous（如果要根据State计算下一次状态的值，使用另位一个setState格式）
```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
3. State Updates are Merged（有多个状态需要分开调用this.setState）

单向数据流（top-down）：
- 子组件的props可能来自父组件的state、props、或者是硬编码；
- 组件的state的值只能向下传递


[条件渲染](https://reactjs.org/docs/conditional-rendering.html)
[循环渲染](https://reactjs.org/docs/lists-and-keys.html)
[表单](https://reactjs.org/docs/forms.html)

React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.(使用组件组合而不是继承来复用代码，children)

