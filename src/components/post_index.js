import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount(){
    this.props.fetchPost();  // remember to use () because function will run, if not use () function will not run
  }

  renderPosts(){
    return this.props.posts.map((post)=>{
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    })
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
            Add New Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all  // remember in out reducer_posts we set our state to be like this >>> INITIAL_STATE = { all:[], post: null };
  }                         // so theres all: for the posts that has been stored.
}

// function mapDispatchtoProps(dispatch){
//   return bindActionCreators({ fetchPost }, dispatch);
// }  //  no need to use this function, we can just directly call it from export default connect below, so we dont need to import bindActionCreators anymore.

export default connect (mapStateToProps, { fetchPost })(PostIndex);  //  null, is the function for mapStatetoProps, because we dont have it now, so.. null.
//  { fetchPost } is short hand for { fetchPost: fetchPost } the first fetchPost is the object we want to use here (this.props.fetchPost)
//  the second fetchPost is the function we export from Action and we import here with the var fetchPost above
