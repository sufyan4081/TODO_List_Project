import React from 'react'

const TodoList = (props) => {
  return (
    <div className='todo-list-box'>
      <ul>
        <li>
          {props.items}
          <i className="fa-solid fa-trash-can" onClick={props.deleteItems}></i>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
