import React, {Component} from 'react'

class Filter extends Component {
  render() {
    return (
      <div>
      <select onChange={this.props.sort}>
      <option value="all">All</option>
      <option value="greased" >Greased</option>
      <option value="name" >Name</option>
      <option value="weight" >Weight</option>
      </select>
      </div>
    )
  }
}


export default Filter;
