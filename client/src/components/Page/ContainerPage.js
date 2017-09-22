import React, { Component } from "react";
import Page from "./Page";
import Api from "../../utils/Api";

class ContainerPage extends Component {
    constructor() {
        super();
        this.state = {
            searchArticles: [],
            savedArticles: []
        };
    }

    componentWillMount() {
        this.refreshSavedArticles();
    }

    componentDidMount() {}

    searchCallback = searchQueryFromChild => {

        Api.getArticles(searchQueryFromChild)
            .then(res => {

                this.setState({ searchArticles: res.data.response.docs });
            })

            .catch(err => console.log(err));
    };

    refreshSavedArticles = () => {
        Api.getSavedArticles().then(res => {

            this.setState({ savedArticles: res.data });
        });
    };

    render() {
        return (
            <Page
                searchCallback={this.searchCallback}
                article={this.state.searchArticles}
                savedArticles={this.state.savedArticles}
                refreshSavedArticles={this.refreshSavedArticles}
            />
        );
    }
}

export default ContainerPage;