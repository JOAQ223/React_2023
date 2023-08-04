export const Task =(props) =>{
    return ( <div className="Task" 
    style={{backgroundColor : props.completed ? "green": "white"}}>   
    <h3> {props.TaskName} </h3> 
    <button onClick={()=> props.deleteTask(props.id)}> complete</button>
    <button onClick={()=> props.deleteTask(props.id)}> X</button>
    </div>
    );
   };
