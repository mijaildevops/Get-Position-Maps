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

 // @ts-ignore
const NewCordenadas = (Latitud, Longitud) => {
  console.log('Nueva Latitud: ', Latitud);
  console.log('Nueva Longitud: ', Longitud);

  
  
}

 
class Tab1 extends Component {
  static defaultProps = {
    center: {
      lat: -0.1862513,
      lng: -78.4937723
    },
    zoom: 17
    
  };



 
  render() {
    console.log('State Incial')
    //@ts-ignore
    console.log('Center: ', this.props.center)
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
          onClick={(event) => 
            // console.log('mapClick',event.lat, event.lng)
            //@ts-ignore
            //NewCordenadas (event.lat, event.lng)
            //@ts-ignore
            onMapChange (event.lat, event.lng)
            
          }
          
          // @ts-ignore
         
          
            
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
