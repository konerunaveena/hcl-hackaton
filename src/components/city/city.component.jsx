import React from 'react';
import College from '../college/college.component';
class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesInfo: [],
            collegesInfo: [],
            selectedColleges: []
        }
    }
    getCityInfo() {
        fetch("http://localhost:3001/cityInfo")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ citiesInfo: result });
                }, (error) => {
                    console.log(error);
                }
            )
    }

    getColleges() {
        fetch("http://localhost:3002/collgeInfo")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ collegesInfo: result })
                }, (error) => {
                    console.log(error);
                }
            )
    }

    componentDidMount() {
        this.getCityInfo();
        this.getColleges();
    }

    getCityValue(event) {
        if (event.target.value) {
            const selectedColleges = []
            this.state.collegesInfo.map(collegeInfo => {
                if (collegeInfo.cityId == event.target.value)
                    selectedColleges.push(collegeInfo)
            })
            this.setState({ selectedColleges: selectedColleges })
        }
    }
    render() {
        return (
            <div>
                <h4> City Info </h4>
                <select onChange={(event) => this.getCityValue(event)}>
                    <option value="">Select</option>
                    {
                        this.state.citiesInfo.map(city =>
                            <option key={city.city + city.id} value={city.id}>{city.city}</option>

                        )
                    }

                </select>
                { this.state.selectedColleges.length && <College colleges={this.state.selectedColleges} />}
            </div>
        )
    }
}
export default City;