import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data'
import Hog from './Hog'
import Filter from './Filter'

class App extends Component {


  // s = () => {
  //    if(this.state.sort === 'name') {
  //      // return Hogs.keys("name").sort().forEach(key => {
  //      //   console.log(key)
  //      // })
  //
  //      const ordered = {};
  //      Object.keys(Hogs).sort().forEach(function(name) {
  //        ordered['name'] = Hogs["name"];
  //      });
  //      return ordered
  //    } else if(this.state.sort === 'greased') {
  //      return ":)"
  //    } else if(this.state.sort === 'weight'){
  //      return ":O"
  //    } else {
  //      return Hogs
  //    }
  // }

  // s = () => {
  //   return Hogs.forEach(hog => {
  //
  //   })
  // }

  state = {
    hogs: Hogs,
    sort: 'all'
  }

  sort = e => {
    this.setState({sort: e.target.value})
  }

  render() {
    // console.log(this.s())
    let hogs = this.state.hogs.map(hog => {
      return < Hog key={hog.name}hog={hog}/>
    })
    return (
      <div className="App">
      < Nav/>
      <Filter sort={this.sort}/>
      {hogs}

      </div>
    )
  }
}

export default App;
