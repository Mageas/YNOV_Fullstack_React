import React from 'react'
import { Todo } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleTask } from '../../store';

const Todolist = () => {
    const tasks = useSelector((state) => {
        return state.todoList;
    });

    const dispatch = useDispatch();

  return (
    <Todo.List>
        {
            tasks.map((task, i) => {
                return <Todo.Task key={i} isDone={task.isDone} toggle={() => {
                    dispatch(toggleTask(task.id))
                }} remove={() => dispatch(deleteTask(task.id))} {...task}></Todo.Task>
            })
        }
    </Todo.List>
  )
}

export default Todolist