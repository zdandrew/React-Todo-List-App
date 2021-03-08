
import React, {useState} from 'react'

export default function TodoList() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className='todoListMain'>
      <div className='header'>
      <p>You have {count} items in your list</p>
        <input placeholder='Enter new task'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}>
        </input>
        <button
          onClick={() => {
          setCount(count + 1);
          setNewTask("");
          setTasks([...tasks, newTask]);
          }}
          >
          Add
        </button>
        <br />
        
        
        {tasks.map((task, i) => (
        <div id="list" key={i}>
          <button
            onDoubleClick={() => {
              const newTasks = tasks.filter((item, index) => index !== i);
              setTasks(newTasks);
              setCount(count - 1);
            }}
          >
            &nbsp;{task}&nbsp;
          </button>
        </div>
      ))}

      </div>
    </div>
  )
}

