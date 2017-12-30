import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';
import PropTypes from 'prop-types';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  } // this is for redirect after submit, so we will check all the react component and look for router, and below we will push it / redirect it.

  onSubmit(props){
    this.props.createPost(props)  // so after we pass the data from form to Action createPost, the return is Promise so we can use .then
      .then(()=> {
        this.context.router.push('/'); // redirect to '/'
      })
  }

  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as const title = this.props.fields.title, categories = this.props.fields.categories
    // const handleSubmit = this.props.handleSubmit

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      {/*  // ^so handleSubmit is a function from reduxForm, will be available when we use reduxForm, and it will get the content from the form and pass it to the action createPost to process the new post  */}
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
        {/*  ^says that if the title is touched and title is invalid, then add string has-danger else empty string  */}
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          {/*  ^{...title} is a destructuring the objects from from const title = this.props.fields.title, jadi isinya title di tuangkan disini. (bloleh liat isinya pake console.log(title))  */}
          <div className="text-help">{title.touched ? title.error : ''}</div>
          {/*  ^says if title is touched then title error else empty string  */}
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">{categories.touched ? categories.error : ''}</div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">{content.touched ? content.error : ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(value){
  const errors = {};
  if (!value.title){
    errors.title = 'Enter a title';
  }
  if (!value.categories){
    errors.categories = 'Enter a categories';
  }
  if (!value.content){
    errors.content = 'Enter some content';
  }
  return errors;
}  //  this is the validation for the form from redux,
   //  so the value.title need to be the same as fields: title below (form config)
   //  so the error will shows and can pass to error above on render JSX (title.error)

//  connect: 1st argument is mapStateToPros, 2nd argument is mapDispatchToPros
//  freduxForm: 1st argument is form config, 2nd argument is mapStateToPros, 3rd argument is mapDispatchToPros

export default reduxForm({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content' ],
  validate
}, null, { createPost })(PostNew);
