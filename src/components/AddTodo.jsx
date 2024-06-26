import React, { useState } from 'react'
import { addTodo, filterTodo } from '../features/todo/todoSlice.js';
import { useDispatch } from 'react-redux';


const AddTodo = () => {
    const [todoMsg, setTodoMsg] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!todoMsg) return
        dispatch(addTodo(todoMsg))
        setTodoMsg("")
    }

    return (
        <>
            <form className="flex" onSubmit={addTodoHandler}>
                <input
                    type="text"
                    placeholder="Write Todo..."
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
            <button className='rounded px-3 py-1 bg-red-600 text-white mt-3' onClick={() => dispatch(filterTodo())}> Completed </button>

        </>
    );
}


export default AddTodo