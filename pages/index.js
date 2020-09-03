import { useState } from 'react'
import styles from '../styles.module.css'


export default () => {
  const [todos, setTodos] = useState(['todo 1','todo 2'])
  const [todo, setTodo] = useState('')
  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t !== todo))
  }
  return(
    <>
       <style jsx global>{`
      body {
        background-color: #000;
      }
      `}</style>
      <div className={styles.hello}>
       <h1 className={styles.title}>Lista de Tarefas</h1>
        <input className={styles.input} value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className={styles.button} onClick={()=> setTodos([...todos, todo])}> + Nova Tarefa</button>
        {todos.map(todo =>(
          <>
            <ul className={styles.ul}> 
              <li className={styles.li}>
                {todo}
                
              </li>
              <button className={styles.remove} onClick={()=> removeTodo(todo)}>Remover</button>
            </ul> 
          </>
        ))}
      </div>
    </>
  )
}