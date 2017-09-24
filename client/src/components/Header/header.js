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
        <h1>New York Times Article Scrubber!</h1>

        <br/>
        <h4> Search For And Annotate Article Of Interest ! </h4>
        <button onClick={this.gotoHome}>Home</button>
        <button onClick={this.gotoSaved}>Check Saved</button>
      </div>
    );
  }
}

export default Header;
