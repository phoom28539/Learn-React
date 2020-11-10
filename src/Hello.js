import React from 'react';

class Hello extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            counter :0
        }
    }

    handleClick(){
        this.setState({
            counter : this.state.counter+1
        })
    }

    render(){
      return(
        <div>
          <h1>Hello React Class Component</h1>
          <p>{this.props.hello}</p>
          <button onClick={this.handleClick.bind(this)}>Click me to increment</button>
          <p>counter : {this.state.counter}</p>
        </div>
      );
    }
  }
  
  export default Hello;