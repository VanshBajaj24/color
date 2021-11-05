// import React from 'react';
// var ReactDOM = require('react-dom');




// const getRandomColors = (colorCount) => {
//     const newArray = [];

//     const isColorExist = (tempColor) =>{
//         for(var j = 0; j < newArray.length && tempColor !== newArray[j]; j=j+1);
//         if(j < newArray.length)return true;
//         return false;
//     }

//     for ( let i =0; i < colorCount; i = i+1){
//         const color = COLORS[Math.floor(Math.random()* COLORS.length)]   //math.floor to convert into int value
//         if(isColorExist(color)) i--;

//         else {
//             newArray.push(color)
//         }
//     }

//     return newArray;
// }
// class Color extends React.Component {
  
//     render () {
//       let style = {
//         backgroundColor: this.props.hexCode
//       }
//       return (
//         <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
//           <p className="color__code">{this.props.hexCode}</p>
//         </div>
//       );
//     }
//   };
  
  
//   class App extends React.Component {
    
//     constructor () {
//       super();
//       this.state = {
//         colorsNum: 5,
//         colors: []
//       };
//       for (let i = 0; i < this.state.colorsNum; i +=1) {
//         this.state.colors.push({hexCode: this.generateColor()});
//       }
//     }
      
//     generateColor () {
//       return '#' +  Math.random().toString(16).substr(-6);
//     }
    
//     updateColor (index) {
//       let colors = this.state.colors.slice();
//       const currentColor = this.generateColor();
//       colors[index].hexCode = currentColor;
//       this.setState({
//         colors : colors
//       });
//    }
    
//     render () {
//       return (
//         <div className="color-container">
//           { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}></Color>) }
//         </div>
//       )
//     }
//   }
  
//   ReactDOM.render(<App />, document.getElementById('root'));