// import React, {Component} from 'react';
//
// class Header extends Component{
//     constructor(){
//         super();
//         this.state = {
//
//         }
//         this.gotoSaved = this.gotoSaved.bind(this);
//         this.gotoHome = this.gotoHome.bind(this);
//     }
//     gotoSaved = () => {
//         window.location.pathname = "/saved";
//     }
//     gotoHome = () => {
//         window.location.pathname = "/"
//     }
//     render(){
//         return(
//             <div>
//                 <h1>New York Times Article Scrubber!</h1>
//                 <h3> Search and save articles you love </h3>
//                 <button onClick={this.gotoHome}>Home</button>
//                 <button onClick={this.gotoSaved}>Check Saved</button>
//             </div>
//         );
//     }
// }
//
// export default Header;

import React from "react";

const Header = () => {
    return (
        <div className="jumbotron text-center">
            <h1>New York Times Articles Scrubber</h1>
            <p className="lead">Search For And Annotate Article Of Interest !</p>
        </div>
    )
};

export default Header;

