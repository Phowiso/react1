import { motion } from 'framer-motion'
import { useContext } from 'react'
import { TodoContext } from '../../../app/providers/TodoProvider'
import { deleteTodo } from '../api/todoApi'

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext)

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id)
      dispatch({ type: 'DELETE_TODO', payload: todo.id })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}
    >
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </motion.div>
  )
}
