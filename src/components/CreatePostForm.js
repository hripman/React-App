import React, {Component} from 'react'

export default class CreatePostForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();

    const postItem = {};

    for (const field in this.refs) {
      postItem[field] = this.refs[field].value;
    }

    this.props.onDataSubmit(postItem);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputTitle">Post Title</label>
            <input type="text" ref="title" className="form-control" id="exampleInputTitle" placeholder="Enter title" required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategories">Post Category</label>
            <input type="text" ref="categories" className="form-control" id="exampleInputCategories" placeholder="Enter categories" required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputContent">Post Content</label>
            <input type="text" ref="content" className="form-control" id="exampleInputContent" placeholder="Enter content" required/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-default" onClick={this.props.close}>Close</button>
        </form>
      )
  }
}