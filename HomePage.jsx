import TodoList from '../features/todos/components/TodoList'
import TodoForm from '../features/todos/components/TodoForm'

export default function HomePage() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
