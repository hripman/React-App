import React, {Component} from 'react'
import Modal from 'react-modal';
import CreatePostForm from './CreatePostForm.js'

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
    const customStyles = {
            content : {
              width: '70%',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          };
    return (
      <div> 
          <Modal
            isOpen={this.state.isModalOpen}
            style={customStyles}
            contentLabel="Modal">
            <h2>Create Post</h2>
            <CreatePostForm onDataSubmit={this.saveData} close={this.closeModal}/>
          </Modal>
          <button type="button" className="btn btn-primary" onClick={this.showModal}>Create Post</button>
      </div>    
    )
  }
}

