import React, {Component} from 'react';
import ListElement from './ListElement.js';

export default class List extends Component {
    constructor (props) {
      super(props);

      this.state = {
        data: props.data 
      }

      this.removeElement = props.removeElement;
      this.getItem = props.getItem;
    }

    componentWillReceiveProps(nextProps) {
      this.setState({data: nextProps.data })
    }

    render() {
      return (
            <ul> { this.state.data.map( (x) => <ListElement key={x.id} item={x} removeElement={this.removeElement} getItem={this.getItem} /> ) } </ul>
          )
    }
}

