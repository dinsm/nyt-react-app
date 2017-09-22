import React, { Component } from "react";
import SavedItem from "./SavedArticle";
import Api from "../../utils/Api";

class SavedArticleContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    deleteArticle = id => {
        Api.deleteSavedArticle(id)
            .then(res => this.props.refreshList())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <SavedItem
                articles={this.props.articles}
                onClick={() => this.deleteArticle(this.props.articles._id)}
            />
        );
    }
}

export default SavedArticleContainer;
