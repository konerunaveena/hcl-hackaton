import React from 'react';

class College extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCollegeInfo: null,
      showCollegeInfo: false
    }
  }

  collegeInfo(event) {
    const colleges = this.props.colleges;
    colleges.map(college => {
      if (college.collegeId == event.target.value) {
        this.setState({ selectedCollegeInfo: college })
      }
    })
  }

  getCollegeInfo(){
    this.setState({showCollegeInfo: true});
  }


  render() {
    const colleges = this.props.colleges;

    return (
      <div>
        <select onChange={(event) => this.collegeInfo(event)}>
          <option value="">Select</option>
          {
            colleges.map(function (college, key) {
              return (
                <option key={key} value={college.collegeId}>{college.collegeName}</option>
              )
            }
            )
          }

        </select>

        <button type="button" onClick={()=>this.getCollegeInfo()}>View More</button>
        {
          this.state.showCollegeInfo && this.state.selectedCollegeInfo && (
            <div>
              <p>City ID: {this.state.selectedCollegeInfo.cityId}</p>
              <p>College ID: {this.state.selectedCollegeInfo.collegeId}</p>
              <p>College Nane :{this.state.selectedCollegeInfo.collegeName}</p>
            </div>
          )
        }



      </div>
    )
  }
}
export default College;