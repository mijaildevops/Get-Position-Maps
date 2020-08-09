import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Tab2.css';
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




 
class Tab2 extends Component {
  /* static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 15
    
  }; */

  state = {
    center: [-0.1862513, -78.4937723],
    zoom: 17,
    draggable: false,
    lat: -0.1862513,
    lng: -78.4937723
  };
  //@ts-ignore
  onCircleInteraction(childKey, childProps, mouse) {
    // function is just a stub to test callbacks
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng
    });
   
    console.log('onCircleInteraction called with', childKey, childProps, mouse);
  }
  //@ts-ignore
  onCircleInteraction3(childKey, childProps, mouse) {
    this.setState({draggable: true});
    // function is just a stub to test callbacks  
    console.log('onCircleInteraction called with', childKey, childProps, mouse);
    
  }
  //@ts-ignore
    _onChange = ({center, zoom}) => {
      this.setState({
        center: center,
        zoom: zoom,      
      });
    }




  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
        <GoogleMapReact 
        //@ts-ignore
        draggable={this.state.draggable}
        //@ts-ignore
        onChange={this._onChange}
        //@ts-ignore
        center={this.state.center}
        //@ts-ignore
        zoom={this.state.zoom}
        //@ts-ignore
        onChildMouseDown={this.onCircleInteraction}
        //@ts-ignore
        onChildMouseUp={this.onCircleInteraction3}
        //@ts-ignore
        onChildMouseMove={this.onCircleInteraction}    
        //@ts-ignore
        onChildClick={() => console.log('child click')}
        //@ts-ignore
        onClick={() => console.log('mapClick')}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, 
            // @ts-ignore
            -0.1862513,
            // @ts-ignore 
            -78.4937723)
            
          }
        
       >
        <div 
          className="place" 
          //@ts-ignore
          lat={this.state.lat} 
          //@ts-ignore
          lng={this.state.lng}>
            12
       </div>
      </GoogleMapReact>
      </div>
    );
  }
}

 
/* export default SimpleMap; */

export default Tab2;
