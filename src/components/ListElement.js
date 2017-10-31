import React from 'react'

export default function ListElement(props) {
  return <div className="card cols-xs-4">
            <div className="card-body">
              <h4 className="card-title">{props.item.title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{props.item.categories}</h6>
              <p className="card-text">{props.item.content}</p>
              <a href="#" onClick={() => props.viewPost(props.item.id)} className="card-link">View Post</a>
              <a href="#" onClick={(id) => props.removeItem(props.item.id)} className="card-link">Remove Post</a>
            </div>
         </div>
}