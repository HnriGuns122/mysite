import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid red',
    fontSize: '24px',
  },
}

export default TodoItem