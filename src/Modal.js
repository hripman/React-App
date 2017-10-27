import React, {Component} from 'react'
import Form from './Form.js'

export default class Modal extends Component {
    constructor(props) {
      super(props);

      this.onDataSubmit = props.onDataSubmit;
      this.item = props.data;
      this.onClose = props.onClose;
      this.onlyView = props.onlyView;
    }

    closeModal() {
      this.setState({open: false});
    }

    render() {
      let modalContent;

      if(this.onlyView) {
          modalContent = <div>
                            <p><strong>Title</strong> {this.item.title}</p>
                            <p><strong>Categories</strong> {this.item.categories}</p>
                            <p><strong>Content</strong> {this.item.content}</p>
                        </div>
      } else {
          modalContent = <Form onDataSubmit={this.onDataSubmit} data={this.item}/>
      }

      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.onClose}>&times;</span>
            {modalContent}
          </div>
        </div>
      )
      
    }
 }