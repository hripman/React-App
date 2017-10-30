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
  }

  showModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = () =>{
    this.setState({isModalOpen: false});
  }

  saveData = (data) => {
    this.closeModal();

    this.props.onDataSubmit(data);
  }

  render() {
    let content = null;
    if(this.state.isModalOpen) {
      let modalContent = <Form onDataSubmit={this.saveData} />
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

