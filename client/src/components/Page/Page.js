import React from "react";
import Header from "../Header";
import Container from "../Page/Container";

import SearchContainer from "../Search";
//import Container from "../Bootstrap/Container";

import ResultContainer from "../Result";

import SavedContainer from "../Saved";

const Page = props => (

    <div>
        <Header />
        <Container>

            <SearchContainer searchCallback={props.searchCallback} />

            <ResultContainer
                 articles={props.articles}
                 refreshSavedArticles={props.refreshSavedArticles} />

            <SavedContainer
                savedArticles={props.savedArticles}
                refreshSavedArticles={props.refreshSavedArticles} />

        </Container>
    </div>
);

export default Page;