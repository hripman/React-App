import React, { Component } from 'react';
import './App.css';
import List from './List.js'
import Modal from './Modal.js'
import Button from './Button.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
        data: null,
        isModalOpen: false
    }

    this.listItem = {};
    this.getList();
  }  

  getList() {
    fetch('http://reduxblog.herokuapp.com/api/posts', {method: 'GET'})
        .then((data)=> data.json())
        .then((data)=> this.setState({data: data}));
  }

  addNewPost() {
    fetch('http://reduxblog.herokuapp.com/api/posts',
        {
          method: 'POST', 
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.listItem)
        })
        .then((data) => this.getList())
  }

  getById = (id) => {
    fetch(`http://reduxblog.herokuapp.com/api/posts/${id}`, {method: 'GET'}).then((data) => data.json())
    .then((data) => {
      this.listItem = data;
      this.onlyView = true;
      this.setState({isModalOpen: true})
    });
  }

  remove = (id) => {
    fetch(`http://reduxblog.herokuapp.com/api/posts/${id}`, {'method': 'DELETE'})
      .then((data) => {this.getList()})
  }

  showModal = () => {
    this.onlyView = false;
    this.listItem = {};
    this.setState({isModalOpen: true})
  }

  onDataSubmit = (data) => {
    this.setState({isModalOpen: false});
    this.addNewPost();   
  }

  closeModal = () => {
    this.setState({isModalOpen: false});
  }

  render() {
    let dataList;
    let modal;
    if(this.state.data) {
      dataList = <div>
          <List data={this.state.data} getById={this.getById} removeElement={this.remove} getItem={this.getById}/>
          <Button onClick={this.showModal} value="Create post"/>
      </div>
    } else {
      dataList = <div>Loading</div>
    }

    if(this.state.isModalOpen) {
      modal = <Modal data={this.listItem} onlyView={this.onlyView} onDataSubmit={this.onDataSubmit} onClose={this.closeModal} />
    }

    return (
      <div>
        {dataList}
        {modal}
      </div>
    );
  }
}

export default App;
