import React , { Component } from "react";
import SavedArticleContainer from "../SavedArticle";


const Saved = props => (
    <div className="card">
        <h4 className="card-header bg-primary text-white">Saved</h4>

            <ul className="list-group list-group-flush">
                {props.articles.map(articles => {
                    return <SavedArticleContainer articles={articles} refreshList={props.refreshList}/>;
                })}
            </ul>
    </div>
);

export default Saved;
