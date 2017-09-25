import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
  constructor(){
    super();
    this.state = {

    }
    this.gotoSaved = this.gotoSaved.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
  }
  gotoSaved = () => {
    window.location.pathname = "/saved";
  }
  gotoHome = () => {
    window.location.pathname = "/"
  }
  render(){
    return(
      <div className="headerSection">
        <h1 className="header-title">New York Times Article Scrubber!</h1>

        <br/>
        <h4 className="header-subtitle"> Search For And Annotate Article Of Interest ! </h4>
        <button className="btn-header-home" onClick={this.gotoHome}>Home</button>
        <button className="btn-header-saved" onClick={this.gotoSaved}>Article(s) Saved</button>
      </div>
    );
  }
}

export default Header;
