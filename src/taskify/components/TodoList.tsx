import React from 'react';
import styles from "../taskify.module.css";
import { Todo } from './model';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList= ({todos, setTodos}:Props) => {
  return (
    <ul className={styles.todolist}>
        {todos.map((t)=>(
            <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos}/>
        ))}
    </ul>
  )   
}

export default TodoList;