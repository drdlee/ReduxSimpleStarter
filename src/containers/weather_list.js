import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Sparkline, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component{
  constructor(props){
    super(props)
  }
  renderWeatherList(data){
    const cityName = data.city.name;
    const temps = data.list.map(weather => weather.main.temp)
    console.log(temps);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
        </td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
