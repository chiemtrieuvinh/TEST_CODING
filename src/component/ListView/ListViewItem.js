import React, { Component } from 'react'

export default class ListViewItem extends Component {
  render() {
    return (
      <div className="row">
      <div className="col">
      <iframe width="250" height="150"
        src={this.props.videourl}>
      </iframe> 
      </div>
      <div className="col">
              <h6>{this.props.name}</h6>
      </div>
  </div>               
    )
  }
}
