import React, { Component } from 'react';

import './App.css';
import Search from './component/Search/Search';
import MainView from './component/MainView/MainView';
import ListView from './component/ListView/ListView';
import db from './component/ListView/video.json'
class App extends Component {
  constructor(props){
    super(props)
      this.state={
        id:0,
        name: "Bohemian Rhapsody",
        videourl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        view:'71.302.724',
        author: 'The Muppets',
        searchtext: '',
        content: db
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }
  handleClick(id){
    const selectedVideo = db.find((item)=> item.id === id)
   this.setState({
     id: selectedVideo.id,
     name: selectedVideo.name,
     videourl: selectedVideo.videourl,
     view: selectedVideo.view,
     author: selectedVideo.author,
   })
  }
  handleChange(event){
    event.preventDefault()
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    const searchfield = []
        this.state.content.forEach((item)=>{
            if(item.name.indexOf(this.state.searchtext) !== -1){
              searchfield.push(item)
            }
       
        })
    return (
     
          <div className="App">
          <Search handleChange={this.handleChange} searchtext={this.state.searchtext}/>
          <div className="container-fluid">
          <br/>
          <div className="row">
          <MainView name={this.state.name} videourl={this.state.videourl} view={this.state.view} author={this.state.author}/>

          <ListView handleClick={this.handleClick} content={searchfield}/>

          </div>
          </div>
      </div>
 
     
    );
  }
}

export default App;
