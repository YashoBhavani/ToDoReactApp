import styles from "./todoitem.module.css";

export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        console.log("Deleted",item);
       setTodos(todos.filter((todo)=>todo !== item));
    }
    function handleClick(name){ 
      setTodos(todos.map((todo)=>
        todo.name === name ? { ...todo, done: !todo.done } : todo));
    }

const clsName = item.done ? styles.completed : "";
    return (
    <div className={styles.item}>
        <div className={styles.itemName}>
            <span className = {clsName} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
            <button 
            className={styles.deleteButton} 
            onClick={() => handleDelete(item)}>x</button>
        </span>
        </div>
        <hr className={styles.line}/>
    </div>
    );
}