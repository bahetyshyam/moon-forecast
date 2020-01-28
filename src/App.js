import React, { Fragment } from 'react';
import Header from './Header';
import Search from './Search';
import Forecast from './Forecast';

const baseURL = 'https://api.ipgeolocation.io/astronomy';
const APIKEY = '33c0ccc95c754c86949c57034d94553b';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [
                {
                    "id": 1,
                    "name": "Bangalore",
                    "lat" : 12.9716,
                    "long" : 77.5946
                },
                {
                    "id": 2,
                    "name": "New Delhi",
                    "lat" : 28.7041,
                    "long" : 77.1025
                }
            ],
            selectedCity : undefined,
            moonrise : '',
            moonset : '',
        }
    }

    componentDidMount = async () => {
        let initialApiData;
        
        await fetch(`${baseURL}?apiKey=${APIKEY}&lat=12.9716&long=77.5946`)
        .then(response => response.json())
        .then(result => { initialApiData = result})
        .catch(error => error);
        this.setState({moonrise : initialApiData.moonrise, moonset: initialApiData.moonset})
    }

    onSearchChange = (e) => {
        // this.setState({selectedCity : e.target.value, inputChanged : true});
        this.callApi(e.target.value);
    }

    fetchLocation = (selectedCity) => {
        const cities = this.state.cities;
        // const selectedCity = this.state.selectedCity;
        const currentCity = cities.filter((item) => item.name === selectedCity);
        return currentCity[0];
    }

    callApi = async (selectedCity) => {
        const location =this.fetchLocation(selectedCity);
        const lat = location.lat;
        const long = location.long;
        let apiData;
        
        await fetch(`${baseURL}?apiKey=${APIKEY}&lat=${lat}&long=${long}`)
        .then(response => response.json())
        .then(result => { apiData = result})
        .catch(error => error);
        this.setState({moonrise : apiData.moonrise, moonset: apiData.moonset})
        console.log(apiData.moonrise);
        console.log(this.state);
    }

    render() {
        return(
            <Fragment>
                <Header>
                </Header>
                <Search cities={this.state.cities} onSearchChange={this.onSearchChange}>
                </Search>
                <Forecast moonrise={this.state.moonrise} moonset={this.state.moonset} inputChanged={this.state.inputChanged} cities={this.state.cities} selectedCity={this.state.selectedCity}>
                </Forecast>
            </Fragment>
        )
    }
}

export default App;