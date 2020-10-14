import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Maps from './components/Maps.js';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={  
      stationArray:[],

    }
  }
componentDidMount(){
  axios.get('http://localhost:4000/')
    .then((response)=>{
      this.setState({stationArray: response.data})
    });
}
  render(){

    return(
      <>
      <Menu/>
      <Maps stationArray ={this.state.stationArray}/>
      </>
    )

  }

}


export default App;
