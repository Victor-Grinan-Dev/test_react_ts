import React, { useState } from 'react';
import styles from './taskify.module.css';
import InputField from './components/InputField';

const Taskify: React.FC = () => {

    const [todo, setTodo] = useState<string>("")
  return (
    <div className={styles.screen }>
        <header className={styles.title}>Taskify</header>
        <InputField todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default Taskify;