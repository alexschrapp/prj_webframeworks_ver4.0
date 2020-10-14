import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapClass extends Component {
    state={
        activeMarker:{},
        selectedPlace:{},
        showingInfoWindow: false,
    };
    clickMouse = (props, marker) =>{
      this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true
      })
      console.log(this.state.selectedPlace);
      console.log(props);
      console.log(marker);
    
    };
    onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  render() 
  {
    return (
      <Map google={this.props.google} zoom={7}initialCenter={{lat: 65.05,lng: 25.5,}}>
        {this.props.stationArray.map((stationArray, index)=>
        <Marker onClick={this.onclickMouse}
                name={stationArray.City} key={stationArray.id} title={stationArray.City} position={{lat:stationArray.lat, lng:stationArray.lng}}/>)}

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({

})(MapClass)