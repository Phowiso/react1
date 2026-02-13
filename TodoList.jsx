import { useEffect, useContext } from 'react'
import { TodoContext } from '../../../app/providers/TodoProvider'
import { fetchTodos } from '../api/todoApi'
import TodoItem from './TodoItem'
import { AnimatePresence } from 'framer-motion'

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchTodos()
        dispatch({ type: 'SET_TODOS', payload: data })
      } catch (error) {
        alert(error.message)
      }
    }
    load()
  }, [dispatch])

  return (
    <AnimatePresence>
      {state.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </AnimatePresence>
  )
}
