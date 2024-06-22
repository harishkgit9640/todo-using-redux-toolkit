import React from 'react'
import AddTodo from './components/AddTodo'
import { useSelector } from 'react-redux'
import TodoItems from './components/TodoItems'

const App = () => {
  const todo_data = useSelector(state => state.todo_data)


  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todo's</h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo_data.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItems
                  todo={todo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App