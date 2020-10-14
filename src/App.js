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
      stationSearch:"",

    }
  }
componentDidMount(){
  axios.get('http://localhost:4000/chargingStations')
    .then((response)=>{
      this.setState({stationArray: response.data})
      console.log('test')
    });
}
ChangeOfField = (event)=>{
  console.log('ActionOnKeyboard');
  console.log(event.target.value);
  this.setState({stationSearch: event.target.value})
}
  render(){

    return(
      <>
      <Menu onChange={this.ChangeOfField}/>
      <Maps stationArray ={this.state.stationArray.filter((station) => station.City.includes(this.state.stationSearch))}/>
      </>
    )

  }

}


export default App;
