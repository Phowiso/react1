const BASE_URL = 'http://localhost:3001/todos'

export async function fetchTodos() {
  try {
    const res = await fetch(BASE_URL)
    if (!res.ok) throw new Error('Fetch error')
    return await res.json()
  } catch (error) {
    throw error
  }
}

export async function createTodo(todo) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    if (!res.ok) throw new Error('Create error')
    return await res.json()
  } catch (error) {
    throw error
  }
}

export async function deleteTodo(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Delete error')
  } catch (error) {
    throw error
  }
}
