import React, {Component} from 'react';
import ListElement from './ListElement.js';
import Modal from './Modal.js'
import ListView from './ListView.js'

export default class List extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    // this.removeElement = props.removeElement;
    // this.getItem = props.getItem;
    // this.listItem = {};
  }

  // view(id) {
  //   this.getItem(id).then((data) => {
  //     this.listItem = data;
  //     this.setState({isModalOpen: true});
  //   });
  // }

  // closeModal = () => {
  //   this.setState({isModalOpen: false});
  // }

  render() {
    let content = null;
    // if(this.state.isModalOpen) {
    //   let modalContent = <ListView listItem={this.listItem} />
    //   content = <Modal content={modalContent} onClose={this.closeModal} />
    // }

    return (
          <div>
            <ul> { this.props.posts.map((x) => <ListElement key={x.id} item={x} removeItem={this.props.removePost} /> ) } </ul>
          </div>
        )
  }
}

