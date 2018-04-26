import React, {Component} from 'react'
import Hog from './Hog'

class HogBrowser extends Component {
  render() {
    let hogs = this.props.hogs.map(hog => {
      return < Hog key={hog.name}hog={hog}/>
    })

    return (
      <div>{hogs}</div>
    )

  }
}

export default HogBrowser;
