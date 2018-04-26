import React, {Component} from 'react'

class Details extends Component {

  render() {
    return (
      <div className='details'>

        <li>Specialty: {this.props.hog.specialty}</li>
        <li>{this.props.hog.greased ? 'Greased' : 'Not Greased'}</li>
        <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
        <li>Highest Medal Acheived: {this.props.hog['highest medal achieved']}</li>
        <br/>
      </div>
    )
  }
}

export default Details;
