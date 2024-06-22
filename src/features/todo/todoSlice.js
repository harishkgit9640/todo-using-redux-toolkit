import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo_data: []

}
export const todoSlice = createSlice({
    name: "todo_data",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todo_data.push(todo)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todo_data.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        },
        removeTodo: (state, action) => {
            state.todo_data = state.todo_data.filter(todo => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            const existingTodo = state.todo_data.find(todo => todo.id === action.payload);
            if (existingTodo.completed === false) {
                existingTodo.completed = true;
            } else {
                existingTodo.completed = false;
            }
        },
        filterTodo: (state, action) => {
            // console.log("all : " + JSON.stringify(state.todo_data));
            const filteredTodo = state.todo_data.filter(todo => todo.completed === true);
            if (filteredTodo.length > 0) {
                state.todo_data = filteredTodo
            }
        },
    }
})

export const { addTodo, removeTodo, updateTodo, completeTodo, filterTodo } = todoSlice.actions
export default todoSlice.reducer
