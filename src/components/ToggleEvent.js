import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClick2 = () => {
    console.log('this is:', this);
  }

  handleClick3 = (id, e) => {
    console.log(id)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClick2}>
          see console
        </button>
        {/* 每次渲染的时候都会绑定一个不同的回调函数 */}
        <button onClick={(e) => this.handleClick3('xxxxx', e)}>
          for loop
        </button>
      </div>
    );
  }
}

export default Toggle