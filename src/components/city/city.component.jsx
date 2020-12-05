import React from 'react';
import College from '../college/college.component';
class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesInfo: [],
            cities: [],
            selectedColleges: []
        }
    }
    getCityInfo() {
        fetch("http://localhost:3001/cityInfo")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                    this.setState({ citiesInfo: result });
                    this.uniqueCities();
                }, (error) => {
                    console.log(error);
                }
            )
    }

    componentDidMount() {
        this.getCityInfo();

    }

    uniqueCities() {
        const uniqueCities = [];
        this.state.citiesInfo.map(obj => {
            if (uniqueCities.indexOf(obj.city) === -1) {
                uniqueCities.push(obj.city)
            }
        });
        this.setState({ cities: uniqueCities });
    }

    getCityValue(event) {
        if (event.target.value !== "") {

            console.log(event.target.value);
            const collegeNames = [];
            this.state.citiesInfo.map(obj => {
                if (obj.city === event.target.value) {
                    collegeNames.push(obj.collegeName);
                }
            });
            this.setState({ selectedColleges : collegeNames})

        }
    }
    render() {
        return (
            <div>
                <h4> City Info</h4>
                <select onChange={(event) => this.getCityValue(event)}>
                    <option value="">Select</option>
                    {
                        this.state.cities.map(function (city, key) {
                            return (
                                <option key={key} value={city}>{city}</option>)
                        }
                        )
                    }

                </select>
               
                <College data={this.state.selectedColleges}/>
            </div>
        )
    }
}
export default City;