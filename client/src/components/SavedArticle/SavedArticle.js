import React, { Component } from "react";

const SavedArticle = props => (

    <li className="list-group-item" key={props.articles._id}>

        {props.articles.title} {props.articles.author}

        <button className="btn pull-right btn-danger" onClick={props.onClick}> Remove </button>

    </li>
);

export default SavedArticle;
