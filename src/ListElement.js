import React from 'react'

export default function ListElement(props) {
  return <li>
          <a href="#" onClick={() => props.getListItem(props.item.id)}>{props.item.title} </a>
          <span className="remove" onClick={() => props.removeElement(props.item.id)}>&times;</span>
        </li>
}