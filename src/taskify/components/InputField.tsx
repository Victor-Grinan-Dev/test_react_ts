import React, { useRef } from 'react';
import styles from '../taskify.module.css';

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=>void;
}
const InputField: React.FC <Props> = ({todo, setTodo, handleAdd}) => {
//const InputField = ({todo, setTodo}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
        <form onSubmit={(e)=>{
          handleAdd(e);
          inputRef.current?.blur();
          }}>
            <input ref={inputRef} type="text" className={styles.inputField} placeholder="Enter Task" value={todo} onChange={(e)=>setTodo(e.target.value) }/>
            <input type="submit" className={styles.submit} value="Go" />
        </form>
    </div>
  )
}

export default InputField;