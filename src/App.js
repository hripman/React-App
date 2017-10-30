import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';

class App extends Component {
    render() {
        return (
            <Posts store={this.props.store} />
        );
    }
}
  // constructor() {
  //   super();
  //   this.state = {
  //     data: null
  //   }

  //   this.getList();
  // }  

 
  // addNewList(item) {
  //   fetch('http://reduxblog.herokuapp.com/api/posts',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(item)
  //     })
  //     .then((data) => this.getList())
  // }

  // getById(id) {
  //   return fetch(`http://reduxblog.herokuapp.com/api/posts/${id}`, {method: 'GET'})
  //     .then((data) => data.json());
  // }

  // remove = (id) => {
  //   fetch(`http://reduxblog.herokuapp.com/api/posts/${id}`, {'method': 'DELETE'})
  //     .then((data) => {this.getList()})
  // }

  // onDataSubmit = (data) => {
  //   this.addNewList(data);
  // }

  // render() {
  //   let content;
  //   if(this.state.data) {
  //     content = <div>
  //                 <List data={this.state.data} removeElement={this.remove} getItem={this.getById}/>
  //                 <CreateList onDataSubmit={this.onDataSubmit} />
  //               </div>
  //   } else {
  //     content = <div>Loading</div>
  //   }

  //   return (
  //     <div>
  //       {content}
  //     </div>
  //   );
  // }
//}

export default App;
