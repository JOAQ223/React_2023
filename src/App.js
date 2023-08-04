//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { Task } from './components/Task';
function App() {
  const [todoList,setTodoList]= useState([]);
  const [newTask,setNewTask] = useState("");
  const handleChange=(Event)=>{
     setNewTask(Event.target.value);
  };
  const addTask =() =>{
   // const newTodoList = [...todoList ,newTask];
   const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1 ,
    TaskName: newTask,
    completed: false,
   };
   setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };
  const deleteTask=(id)=>{
    //user filter option 
    //const newTodoList =todoList.filter((task)=>{
     //return task !==TaskName;
    //});
    setTodoList(todoList.filter((task) => task.id !== id));
   };
   const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
        if (task.id === id) { 
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1> how do u see the word </h1>
      <div className="addTask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task)=> {        
          return <Task TaskName={task.TaskName} 
          id={task.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
           />})}
      </div>
       
         </div>
  );
}

export default App;
