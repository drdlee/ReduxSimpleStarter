import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeatherList(data){
    const cityName = data.city.name;
    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const {lon, lat} = data.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} units="K" /></td>
        <td><Chart data={pressures} units="hPa" /></td>
        <td><Chart data={humidities} units="%" /></td>
      </tr>
    )
  }

  // renderList(){ // see on render method below this.renderList() also can be used to map out the list
  //   return this.props.weather.map((data)=>{
  //     return (
  //       <tr key={data.city.name}>
  //         <td>{data.city.name}</td>
  //       </tr>
  //     );
  //   });
  // }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.renderList()} */}
          {this.props.weather.map(this.renderWeatherList)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather}
}

export default connect (mapStateToProps)(WeatherList);
