import React from 'react';

class College extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
        // colleges : this.props.s
    }
  }
  render() {
      const colleges = this.props.data;

    return (
      <div>
        {
            <select onChange={(event) => this.getCollegeInfo(event)}>
            <option value="">Select</option>
            {
                colleges.map(function (city, key) {
                    return (
                        <option key={key} value={city}>{city}</option>)
                }
                )
            }

        </select>
        }
        <button type="button">View More</button>
      </div>
    )
  }
}
export default College;