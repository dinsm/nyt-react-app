import React, { Component } from "react";
//import Api from "../../utils/Api";
import ResultOfSearchContainer from "../ResultSearch/ResultOfSearch";

const Result = props => (

    <div className="card">

        <h4 className="card-header bg-primary text-white">RESULTS</h4>

            <ul className="list-group list-group-flush">
                {props.articles.map(articles => {
                   if (
                       articles.headline.print_headline && articles.byline.original
                   ) {
                       return (
                           <ResultOfSearchContainer
                               articles={articles}
                               refreshSavedArticles={props.refreshSavedArticles}
                           />
                       )
                   }
                   return;
                })}
            </ul>

    </div>
);

export default Result;


// import React, {Component} from "react";
// import Api from "../../utils/Api";
//
// class Result extends Component{
//     constructor() {
//         super();
//         // Setting initial state to store the input values
//         this.state = {
//
//         };
//         // Binding the event listeners which we will pass as props
//         this.handleSaveClick = this.handleSaveClick.bind(this);
//     }
//
//     handleSaveClick = (event) => {
//         event.preventDefault();
//         // console.log("the api request will go here");
//         Api.saveArticle(this.props)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//
//         window.location.pathname = "/saved";
//     }
//
//     render(){
//         return(
//             <div className="row">
//                 <a href={this.props.url}
//                    target="_blank"
//                    className="col-md-6">{this.props.headline}</a>
//                 <div className="col-md-6">
//                     <button onClick={this.handleSaveClick}>Save</button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Result;