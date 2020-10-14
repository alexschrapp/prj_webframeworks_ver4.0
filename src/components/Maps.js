import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapClass extends Component {
    state={
        activeMarker:{},
        selectedLocation:{},
        showingInfoWindow: false,
    };
    clickMouse = (props, marker) =>{
      this.setState({
        activeMarker: marker,
        selectedLocation: props,
        showingInfoWindow: true
      })
      console.log(this.state.selectedLocation);
      console.log(props);
      console.log(marker);
    
    };
    InfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  render() 
  {
    return (
      <Map google={this.props.google} zoom={7}initialCenter={{lat: 65.05,lng: 25.5,}}>
        {this.props.stationArray.map((stationArray, index)=>
        <Marker onClick={this.clickMouse}
                name={stationArray.City} key={stationArray.id} title={stationArray.City} position={{lat:stationArray.lat, lng:stationArray.lng}}/>)}
        <InfoWindow
        marker={this.state.activeMarker}
        onClose={this.InfoWindowClose}
        visible={this.state.showingInfoWindow}>
          <h3>{this.state.selectedLocation.name}</h3>
          
        </InfoWindow>
        

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({

})(MapClass)