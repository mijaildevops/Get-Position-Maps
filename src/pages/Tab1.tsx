import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 //@ts-ignore
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 // @ts-ignore
 const renderMarkers = (map, maps, Lat, Long) => {
  let marker = new maps.Marker({
  position: { lat: Lat, lng: Long },
  map,
  title: 'Hello World!',
  draggable: true
  });
  return marker;
 };

 /* function initMap(): void {
  const myLatlng = { lat: -0.1862513, lng: -78.4937723 };
 // @ts-ignore
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: myLatlng
    }
  );
 // @ts-ignore
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom"
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
       // @ts-ignore
      map.panTo(marker.getPosition() as google.maps.LatLng);
    }, 3000);
  });

  marker.addListener("click", () => {
    map.setZoom(8);
     // @ts-ignore
    map.setCenter(marker.getPosition() as google.maps.LatLng);
  });
} */

 
class Tab1 extends Component {
  static defaultProps = {
    center: {
      lat: -0.1862513,
      lng: -78.4937723
    },
    zoom: 17
    
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
          //@ts-ignore
          onChildMouseDown={this.onCircleInteraction}
          //@ts-ignore
          onChildMouseUp={this.onCircleInteraction3}
          //@ts-ignore
          onChildMouseMove={this.onCircleInteraction}    
          //@ts-ignore
          onChildClick={() => console.log('child click') }
          //@ts-ignore
          onClick={(event) => console.log('mapClick',event)}
          
          // @ts-ignore
         
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, 
            // @ts-ignore
            -0.1862513,
            // @ts-ignore 
            -78.4937723)}
            
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
