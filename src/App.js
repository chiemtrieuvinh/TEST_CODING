import React, { Component } from 'react';

import './App.css';
import Search from './component/Search/Search';
import MainView from './component/MainView/MainView';
import ListView from './component/ListView/ListView';

class App extends Component {
 
  render() {

    return (
      <div className="App">
          <Search/>
          <div className="container-fluid">
          <div className="row">
          <MainView/>
          <ListView/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
