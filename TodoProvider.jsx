import { createContext, useReducer, useMemo } from 'react'

export const TodoContext = createContext()

const initialState = { todos: [] }

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload }
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(t => t.id !== action.payload) }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      }
    default:
      return state
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
