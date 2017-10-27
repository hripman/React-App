import React from 'react'

export default function ListView(props) {
  return <div>
            <p><strong>Title</strong> {props.listItem.title}</p>
            <p><strong>Categories</strong> {props.listItem.categories}</p>
            <p><strong>Content</strong> {props.listItem.content}</p>
          </div>
}