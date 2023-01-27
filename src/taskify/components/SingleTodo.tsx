import React from 'react';
import { Todo } from './model';
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import style from "../taskify.module.css";

type Props = {
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
    const handleDone = (id:number) =>{
        setTodos(todos.map((todo) => todo.id===id?{...todo, isDone:!todo.isDone} : todo))
    }
  return (
    <div className={style.todo_single}>
        <form >
            {
                todo.isDone ? (
                    <s className={style.todoSingleText}>{todo.todo}</s>
                ):(
                    <span className={style.todoSingleText}>{todo.todo}</span>
                )
            }
        
        <div>
            <span className={style.icon}><AiFillEdit/></span>
            <span className={style.icon}><AiFillDelete/></span>
            <span className={style.icon} onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
    </div>
  )
}

export default SingleTodo