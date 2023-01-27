import React, { useState } from 'react';
import styles from './taskify.module.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
const Taskify: React.FC = () => {

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    
    // const handleAdd = (e: React.FormEvent) => { // not working? React.FormEvent<HTMLFormElement>
    const handleAdd = (e: React.SyntheticEvent) => { // not working? 
        e.preventDefault();
        if(todo){
          setTodos([...todos, {id:Date.now(), todo, isDone: false}])
        }
        setTodo("")
    }

    console.log(todo);
    
    
  return (
    <div className={styles.screen }>
        <header className={styles.title}>Taskify</header>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Taskify;