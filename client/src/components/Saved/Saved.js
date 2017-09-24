import React, {Component} from 'react';
import API from '../../utils/API';
import SavedItem from './SavedItem';

class Saved extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      savedArticles:[]
    }
    // Binding the event listeners which we will pass as props
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.showSavedArticles();
  }

  showSavedArticles = () => {
    API.getSavedArticles()
      .then(res => {
          console.log(res.data);
          this.setState({
              savedArticles: res.data
          })
      }).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <h2 id="savedTitle">SAVED</h2>
        {this.state.savedArticles.map((saved) =>{
          return(
            <SavedItem
            key = {saved._id}
            headline = {saved.title}
            url = {saved.link}
            date = {saved.date}
            buttonId = {saved._id}
            />
          )
        }
          )}

      </div>
    );
  }
}

export default Saved;
