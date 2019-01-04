import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group md-form form-sm form-2 pl-0">
              <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <a name="" id="" className="btn btn-primary" href="#" role="button">Search</a>
            </div>
            </div>
        </form>

    </nav>
    
    )
  }
}
