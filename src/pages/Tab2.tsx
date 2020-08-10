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



 
class Tab2 extends Component {
  static defaultProps = {
    center: {
      lat: -0.1862513,
      lng: -78.4937723
    },
    zoom: 17
    
  };

  constructor(props:any){
    super(props);
    this.state={
      lat:0,
      lng:0,
    }
  }

 /*  // @ts-ignore
  const onMapChange = ({ lat, lng }:any) => {
    this.setState({
      center: {
        lat: -10.2062513,
        lng: -36.5037723
      }
    });
    console.log('onMapChange Funtion')
    console.log('Nuevos estados')
    //@ts-ignore
    console.log('Center: ', this.props.center)
  } */



 
  render() {
    
    const onMapChage = (lat:any , lng:any) => {
      this.setState({lat:lat,lng:lng});
      console.log(lat,lng);
    }
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
            onMapChage (event.lat, event.lng)
            
          }
          
          // @ts-ignore
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, 
            // @ts-ignore
            this.state.lat,
            // @ts-ignore 
            this.state.lng)}
          
            
        >
          <AnyReactComponent
          //@ts-ignore
            lat={this.state.lat}
            //@ts-ignore
            lng={this.state.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
/* export default SimpleMap; */

export default Tab2;
