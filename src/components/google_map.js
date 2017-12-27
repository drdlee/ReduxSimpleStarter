import React, {Component} from 'react';

class GoogleMap extends Component{
  componentDidMount(){
    map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render(){
    return <div ref="map" id="map" />;
  }
}

export default GoogleMap;
