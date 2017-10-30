import React, {Component} from 'react'

export default class Form extends Component{
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
            <input type='text' ref="title" name="title" placeholder="Title" />
            <input type='text' ref="categories" name="categories" placeholder="Category" />
            <input type='text' ref="content" name="content" placeholder="Content"/>
            <button type='submit'>Save</button>
        </form>
      )
  }
}