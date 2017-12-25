import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'; //import the action function we make
import {bindActionCreators} from 'redux'; // for binding the function to the state

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)} // this will run the selectBook function
          className="list-group-item">
            {book.title}
        </li>
      )
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch)
} //this function will bind the action imported above(selectBook), to a new property of selectBook:
  // and pass it to every object in the state also this will be available in the state same as books

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
