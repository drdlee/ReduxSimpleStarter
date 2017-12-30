import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount(){
    this.props.fetchPost();  // remember to use () because function will run, if not use () function will not run
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
            Add New Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchtoProps(dispatch){
//   return bindActionCreators({ fetchPost }, dispatch);
// }  //  no need to use this function, we can just directly call it from export default connect below, so we dont need to import bindActionCreators anymore.

export default connect (null, { fetchPost })(PostIndex);  //  null, is the function for mapStatetoProps, because we dont have it now, so.. null.
//  { fetchPost } is short hand for { fetchPost: fetchPost } the first fetchPost is the object we want to use here (this.props.fetchPost)
//  the second fetchPost is the function we export from Action and we import here with the var fetchPost above
