import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as const title = this.props.fields.title, categories = this.props.fields.categories
    // const handleSubmit = this.props.handleSubmit

    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
      {/*  // ^so handleSubmit is a function from reduxForm, will be available when we use reduxForm, and it will get the content from the form and pass it to the action createPost to process the new post  */}
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          {/*  ^{...title} is a destructuring the objects from from const title = this.props.fields.title, jadi isinya title di tuangkan disini. (bloleh liat isinya pake console.log(title))  */}
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

//  connect: 1st argument is mapStateToPros, 2nd argument is mapDispatchToPros
//  freduxForm: 1st argument is form config, 2nd argument is mapStateToPros, 3rd argument is mapDispatchToPros

export default reduxForm({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content' ]
}, null, { createPost })(PostNew);
