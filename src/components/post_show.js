import React, { Component } from 'react';

class PostShow extends Component {
  render(){
    return(
      <div>Post Page for: {this.props.params.id}</div>
    );
  }
}

export default PostShow;
