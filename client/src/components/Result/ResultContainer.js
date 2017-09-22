import React, { Component } from "react";
import Result from "./Result";

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Result articles={this.props.articles} refreshSavedArticles={this.props.refreshSavedArticles} />
        );
    }
}

export default SearchContainer;
