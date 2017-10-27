import React, {Component} from 'react'
import Button from './Button.js'
import Modal from './Modal.js'
import Form from './Form.js'

export default class CreateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.onDataSubmit = props.onDataSubmit;
    this.listItem = {};
  }

  showModal = () => {
    this.listItem = {};
    this.setState({isModalOpen: true})
  }

  closeModal = () =>{
    this.setState({isModalOpen: false});
  }

  saveData = () => {
    this.closeModal();
    this.onDataSubmit(this.listItem);
  }

  render() {
    let content = null;
    if(this.state.isModalOpen) {
      let modalContent = <Form onDataSubmit={this.saveData} data={this.listItem}/>
      content = <Modal content={modalContent} onClose={this.closeModal} />
    }

    return (
      <div> 
          <Button onClick={this.showModal} value="Create post"/>
          {content}
      </div>    
    )
  }
}

