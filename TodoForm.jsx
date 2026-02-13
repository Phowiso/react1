import { useState, useContext } from 'react'
import { TodoContext } from '../../../app/providers/TodoProvider'
import { createTodo } from '../api/todoApi'

export default function TodoForm() {
  const [title, setTitle] = useState('')
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!title.trim()) return
    try {
      const newTodo = await createTodo({ title, completed: false })
      dispatch({ type: 'ADD_TODO', payload: newTodo })
      setTitle('')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  )
}
