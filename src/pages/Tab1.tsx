import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 //@ts-ignore
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 // @ts-ignore
 const renderMarkers = (map, maps, Lat, Long) => {
  let marker = new maps.Marker({
  position: { lat: Lat, lng: Long },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 
class Tab1 extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAPu1qOxa9vOx9wvj9NQcW5-Ixy1kDI2bQ' }}
          //@ts-ignore
          defaultCenter={this.props.center}
          //@ts-ignore
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, 
            // @ts-ignore
            59.95,
            // @ts-ignore 
            30.33)}
        >
          <AnyReactComponent
          //@ts-ignore
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
/* export default SimpleMap; */

export default Tab1;
