import React, {Component} from 'react';
import ListElement from './ListElement.js';
import Modal from 'react-modal';
import ListView from './ListView.js'

export default class List extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isModalOpen: false,
      listItem: {}
    }
  }

  view(id) {
    this.props.getItem(id).then((data) => {
      this.setState({
        isModalOpen: true,
        listItem: data
      });
    });
  }

  closeModal = () => {
    this.setState({isModalOpen: false});
  }

  render() {
        const customStyles = {
            content : {
              top : '50%',
              left : '50%',
              right :'auto',
              bottom : 'auto',
              marginRight : '-50%',
              transform : 'translate(-50%, -50%)'
            }
          };
    return (
          <div className="list-component row">
            { this.props.posts.map((x) => <ListElement className="col-xs-3" key={x.id} item={x} removeItem={this.props.removePost} viewPost={(id) => this.view(id)} /> ) }
            <Modal
              isOpen={this.state.isModalOpen}
              style={customStyles}
              contentLabel="Modal">
              <h2>Create Post </h2>
              <ListView listItem={this.state.listItem} />
              <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
            </Modal>
          </div>
        )
  }
}

