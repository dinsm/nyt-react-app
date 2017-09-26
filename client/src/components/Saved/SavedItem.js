import React, {Component} from 'react';
import API from '../../utils/API';
import './SavedItem.css';

class SavedItem extends Component{
  constructor(){
    super();

    this.state = {

    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = event => {
    console.log(event.target);
  }

   deleteSavedArticles = (event) => {
    //  console.log(id);
    // console.log(event.target.id)

     API.deleteArticle(event.target.id)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    window.location.pathname = "/saved";
    };

  render(){
    return(
      <div className="row savedThing">
        <h4 className="col-md-4">
        <a className="links"
        href={this.props.url} target="_blank">{this.props.headline}
        </a></h4>
        <p className="col-md-4"> Date Published <br/>{this.props.date}</p>
        <div className="col-md-4">
          <button id={this.props.buttonId}
          onClick={this.deleteSavedArticles}>REMOVE</button>
        </div>
        <div className="row notes">

        </div>
      </div>
    )
  }
}

export default SavedItem;
