import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    state={
        activeMarker:{},
        selectedPlace:{},
        showingInfoWindow: false,
    };
  render() {
    return (
      <Map google={this.props.google} zoom={7}initialCenter={{lat: 65.05,lng: 25.5,}}>
        {this.props.stationArray.map((stationArray, index)=>
        <Marker onClick={this.onMarkerClick}
                name={stationArray.City} key={stationArray.id} title={stationArray.City} position={{lat:stationArray.lat, lng:stationArray.lng}}/>)}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}
              </h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({

})(MapContainer)