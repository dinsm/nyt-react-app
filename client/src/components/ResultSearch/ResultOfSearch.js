import React from "react";

const ResultOfSearch = props => (
    <li className="list-group-item" key={props.article.headline.print_headline}>
        
        {props.article.headline.print_headline} {props.article.byline.original}
        
        <button className={"btn pull-right " + (props.btnSaved ? "btn-secondary" : "btn-primary")}
                            onClick={props.onClick}>Save
        </button>
        
    </li>

);

export default ResultOfSearch;
