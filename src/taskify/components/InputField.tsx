import React from 'react';
import styles from '../taskify.module.css';

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}:Props) => {
  return (
    <div>
        <form>
            <input type="text" className={styles.inputField} placeholder="Enter Task" />
            <input type="submit" className={styles.submit} value="Go" />
        </form>
    </div>
  )
}

export default InputField;