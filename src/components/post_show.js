import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
      this.props.fetchSinglePost(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(()=>{
        this.context.router.push('/');
      })
  }

  render(){
    const { post } = this.props;
    console.log(this.props.post);
    if(!this.props.post){
      return <div>Loading ...</div>;
    }
    return(
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.post
  }
}

export default connect (mapStateToProps, {fetchSinglePost, deletePost})(PostShow);
