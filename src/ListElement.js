import React from 'react'

export default function ListElement(props) {
  return <li>
          <a href="#" >{props.item.title} </a>
          <span className="remove" onClick={(id) => props.removeItem(props.item.id)}>X</span>
        </li>
}