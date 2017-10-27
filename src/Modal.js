import React, {Component} from 'react'
import Form from './Form.js'

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.content = props.content;
    this.onClose = props.onClose;
  }

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.onClose}>&times;</span>
          {this.content}
        </div>
      </div>
    )
  }
 }