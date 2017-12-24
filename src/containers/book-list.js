import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return <li key={book.title} className="list-group-item">{book.title}</li>
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
} // this function is for making a state from redux reducer,
  // books: is the state that will be used in react, state.books is the value from redux reducers

export default connect(mapStateToProps)(BookList);
