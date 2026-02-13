import { TodoProvider } from './app/providers/TodoProvider'
import { AppRouter } from './app/router/AppRouter'

export default function App() {
  return (
    <TodoProvider>
      <AppRouter />
    </TodoProvider>
  )
}
