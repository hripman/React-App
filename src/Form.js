import React, {Component} from 'react'

export default class Form extends Component{
  constructor(props) {
    super(props);

    this.onDataSubmit = props.onDataSubmit;
    this.data = props.data;
  }

  updateValue = (evt) => {
    this.data[evt.target.name] = evt.target.value;
  }

  render() {
    return (
        <form onSubmit={this.onDataSubmit}>
            <input type='text' value={this.data && this.data.title} name="title" placeholder="Title" onChange={this.updateValue}/>
            <input type='text' value={this.data && this.data.categories} name="categories" placeholder="Category" onChange={this.updateValue}/>
            <input type='text' value={this.data && this.data.content} name="content" placeholder="Content" onChange={this.updateValue} />
            <button type='submit'>Save</button>
        </form>
      )
  }
}