import React, { Component } from 'react'

export default class MainView extends Component {
  render() {
    return (
        <div className="col-9">
        <iframe width="1400" height="600"
        src={this.props.videourl}>
        </iframe> 
        <br/>
        <h2><b>{this.props.name}</b></h2>
        <h5>{this.props.view} lượt xem</h5>     
        <hr/>
        <div>
          <div className="row">
          <div className="col combine">
          <img src="http://application.denofgeek.com/pics/film/muppetskids/03.jpg" className="rounded-circle" alt="Cinque Terre" width="20" height="60"/> 
      
        </div>
        <div className="col author">
        <h4>{this.props.author}</h4> 
      
        </div>
         
          </div>
       
        </div>
        </div>
    )
  }
}
