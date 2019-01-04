import React, { Component } from 'react'

export default class ListViewItem extends Component {
  render() {
    return (
      <div className="row">
      <div className="col">
      <iframe width="250" height="150" src={this.props.videourl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="col">
              <h6><a onClick={(id)=>{
               
                this.props.handleClick(this.props.id)
              }}><b>{this.props.name}</b></a></h6>
      </div>
  </div>               
    )
  }
}
