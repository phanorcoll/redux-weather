import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/google-map.jsx';

class WeatherList extends Component {

    renderWeather = (cityData) => {
        let name = cityData.city.name;
        let temps = cityData.list.map(weather => weather.main.temp);
        let pressure = cityData.list.map(weather => weather.main.pressure);
        let humidities = cityData.list.map(weather => weather.main.humidity);
        let { lon, lat } = cityData.city.coord

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart color="orange" data={temps} units="K" />
                </td>
                <td>
                    <Chart color="blue" data={pressure} units="hPa" />
                </td>
                <td>
                    <Chart color="green" data={humidities} units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
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
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)