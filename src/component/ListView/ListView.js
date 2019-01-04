import React, { Component } from 'react'
import ListViewItem from './ListViewItem';
import db from './video.json'
export default class ListView extends Component {
  render() {
    return (
        <div className="col">
                {
                        db.map(function(value,key){
                                return   <ListViewItem key={key} name={value.name} videourl={value.videourl}/>
                        }.bind(this))
                }
        
        </div>
    )
  }
}
