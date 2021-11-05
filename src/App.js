import logo from './logo.svg';
import './App.css';
import randomcolor from './RandomColors'
import React from 'react';
var ReactDOM = require('react-dom');


// function App() {
//   return (
//     <div className="App">
//       <div id='main'>
//         <h2> GENERATE YOUR OWN COLOR PALLETE</h2>
//       </div>
//       <div id='pallete'>
//         <div id="p1"></div>
//         <div id="p2"></div>
//         <div id="p3"></div>
//         <div id="p4"></div>
//         <div id="p5"></div>
//         <div id="p6"></div>
//       </div>
//       <randomcolor />
      
//       <div id="btn">
//         <button>GENERATE</button>
//       </div>
//     </div>
//   );
// }
class Color extends React.Component {
  
  render () {
    let style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
        <p className="color__code">{this.props.hexCode}</p>
      </div>
      
      
    );
    // <div>
    //   className="color" onhover={}
    // </div>
    
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
    
  generateColor () {
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
