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
import React,{useState ,useEffect} from 'react';
import ReactDom from 'react-dom';
import "./App.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
function RandomColor(){
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
      }));
      
    const [color1, setcolor1] = useState(null)
    const [color2, setcolor2] = useState(null)
    const [color3, setcolor3] = useState(null)
    const [color4, setcolor4] = useState(null)
    const [color5, setcolor5] = useState(null)
    const [color6, setcolor6] = useState(null)
    const [col,setcol]=useState([])
   
   
    // if (color[0].includes("#b")==="true"){
    //        var col1=color[0]
    // }   else{
    //  do{ 
    //      n="#";
    //     color.splice(0,1)
    //     for (let i=0;i<=5;i++){
    //         const randomElement = array[Math.floor(Math.random() * array.length)];
    //            n=n+randomElement;  
    //         } 
    //  while(color[0].includes("#b")==="true");
     
     
   

    const handleKeyDown = (e) => {
        if(e.keyCode === 32){
           
            var array=['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9']
            var color=[];
            var n ="";
            for (let m=0;m<=5;m++){
                n="#"
            for (let i=0;i<=5;i++){
                    const randomElement = array[Math.floor(Math.random() * array.length)];
                       n=n+randomElement;               
             }
             color.push(n)
             console.log(color)
            }

           console.log(color)

            setcolor1(color[1])
     setcolor2(color[2])
     setcolor3(color[3])
     setcolor4(color[4])
     setcolor5(color[0])
     setcolor6(color[5])
     setcol(...col,color)
        }
      };


        useEffect(() => {
            window.addEventListener("keydown", handleKeyDown);
          }, []);



    return(
        // <div className="main" 
        // tabIndex="0" >
        //     <div className="d1" style={{backgroundColor:color1}}  onClick={() => { navigator.clipboard.writeText(color1)
        //      alert("copied")}}><p>{color1}</p></div>
        //     <div className="d2" style={{backgroundColor:color2}} onClick={() => { navigator.clipboard.writeText(color2)
        //     alert("copied")}}> <p>{color2}</p></div>
        //     <div className="d3" style={{backgroundColor:color3}} onClick={() =>  {navigator.clipboard.writeText(color3)
        //     alert("copied")}}><p>{color3}</p></div>
        //     <div className="d4" style={{backgroundColor:color4}} onClick={() =>  {navigator.clipboard.writeText(color4)
        //     alert("copied")}}><p>{color4}</p></div>
        //     <div className="d5" style={{backgroundColor:color5}} onClick={() =>  {navigator.clipboard.writeText(color5)
        //     alert("copied")}}><p>{color5}</p></div>
           
        // </div>
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {Array.from(Array(6)).map((_, index) => (

            //   {              console.log(col[index])            },
            <Grid item xs={12} sm={2} md={2} key={index}
>              <Item  onClick={() => { navigator.clipboard.writeText(col[index])
            alert("copied")}} style={{backgroundColor:col[index]}}>{col[index]}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      </div>
    )
}
export default RandomColor ;