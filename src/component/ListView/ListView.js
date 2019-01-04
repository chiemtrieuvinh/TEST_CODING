import React, { Component } from 'react'
import ListViewItem from './ListViewItem';
export default class ListView extends Component {
  render() {
    return (
        <div className="col">
                {
                        this.props.content.map(function(value,key){
                                return  <ListViewItem key={key} id={value.id} name={value.name} videourl={value.videourl} handleClick={this.props.handleClick}/>
                        }.bind(this))
                }
        </div>
    )
  }
}
