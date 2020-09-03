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
      <div className={styles.hello}>
       <h1>Lista de Tarefas</h1>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={()=> setTodos([...todos, todo])}>Adicionar</button>
        {todos.map(todo =>(
          <>
            <h1>{todo}</h1>
            <button onClick={()=> removeTodo(todo)}> Remover</button>
          </>
        ))}
      </div>
    </>
  )
}