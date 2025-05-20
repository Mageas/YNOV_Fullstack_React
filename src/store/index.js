import { configureStore, createSlice } from '@reduxjs/toolkit'

const tasks  =  [
    {
        id: 1,
        isDone: true,
        taskName: "Pierre la pierre",
    },
    {
        id: 69,
        isDone: false,
        taskName: "Patrick la frite",
    },
];

const todoSlice = createSlice({
    name: 'todo',
    initialState: tasks,
    reducers: {
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            task.isDone = !task.isDone;
        },
        deleteTask: (state, action) => {
            const task = state.findIndex((task) => task.id === action.payload);
            state.splice(task, 1)
        },
    },
});

export const {
    toggleTask,
    deleteTask,
} = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
    }
})