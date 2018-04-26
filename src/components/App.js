import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data'
import HogBrowser from './HogBrowser'
import Filter from './Filter'

class App extends Component {

  s = () => {
    let sorter = this.state.sort
    if(sorter === 'name') {
      return Hogs.sort(function(a, b) {
        var nameA = a[sorter].toUpperCase();
        var nameB = b[sorter].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if(sorter === 'weight'){
      sorter = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      return Hogs.sort(function (a, b) {
        return a[sorter] - b[sorter];
      });
    } else if(sorter === 'greased'){
       return Hogs.filter(hog => hog.greased === true)
    } else {
      return Hogs
    }
  }

  state = {
    sort: 'all'
  }

  sort = e => {
    this.setState({sort: e.target.value})
  }

  render() {

    return (

      <div className="App">
      < Nav/>
      <Filter sort={this.sort}/>
      <HogBrowser hogs={this.s()}/>
      </div>
    )
  }
}

export default App;
