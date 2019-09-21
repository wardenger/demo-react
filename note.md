

# React

Elements 是构成 React App 最基本的单位

不同于浏览器的 DOM elements，React elements 是一个对象，而且很容易创建组件



你可以把任何有效的 JavaScript 表达式 放在大括号中

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```



## 组件

- function components

使用函数组件时不要在文件开头忘记`import React from 'react'`

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- class components
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



### props

- props 是只读的
- All React components must act like pure functions with respect to their props.
- Class components should always call the base constructor with props.

```js
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}
```



### State

- 不能直接修改State
- State的更新可能是异步的，所以如果要根据State计算下一次状态的值，需要使用另外一种 setState 的格式

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
有多个状态需要分开调用this.setState



### 单向数据流

- 子组件的props可能来自父组件的state、props、或者是硬编码；
- 组件的state的值只能向下传递



## 其他

[条件渲染](https://reactjs.org/docs/conditional-rendering.html)

[循环渲染](https://reactjs.org/docs/lists-and-keys.html)

[表单](https://reactjs.org/docs/forms.html)



React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.(使用组件组合而不是继承来复用代码，children)

