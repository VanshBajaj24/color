import logo from './logo.svg';
import './App.css';
import randomcolor from './RandomColors'
import React from 'react';

var ReactDOM = require('react-dom');

class Color extends React.Component {
  
  render () {
    let style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className="color"  style={style}>
        <div><button 
  onClick={() =>  navigator.clipboard.writeText(`${this.props.hexCode}`)}
>
  Copy
</button></div>
        <p className="color__code"   ref={(textarea) => this.textArea = textarea} onClick={this.props.update.bind(this, this.props.index)}>{this.props.hexCode}</p>
      </div>
    );
  }
};


class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      colorsNum: 5,
      colors: []
    };
    for (let i = 0; i < this.state.colorsNum; i +=1) {
      this.state.colors.push({hexCode: this.generateColor()});
    }
  }
  
 
  generateColor (){
    return '#' +  Math.random().toString(16).substr(-6);
  }
  
  updateColor (index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors : colors
    });
 }
  
  render () {
    return (
      <div className="color-container">
        { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}></Color>) }
      </div>
      
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
