import React from 'react';
import Details from './Details'

class Hog extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false
    }
  }

  showDetails = () => {
    let d = this.state.details
    this.setState({details: !d})
  }

  render() {
    let name = this.props.hog.name.toLowerCase().split(" ").join('_')

    return (
      <div id={name} onClick={this.showDetails}>
      <img src={require('../hog-imgs/' + name   + '.jpg')} alt="piggy" />
        <p>{this.props.hog.name}</p>
        {this.state.details ? <Details hog={this.props.hog}/> : ''}
      </div>
    )
  }
}

export default Hog
