import React, { useState } from 'react'
const To_Do_App= () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const[editlist, setEditlist]=useState(null);
  const addTask = () => {
    if(input){
      if(editlist!==null)
        {
          const updatedTasks = tasks.map((item, i) => i===editlist? input : item);
          setTasks(updatedTasks);
          setEditlist(null);
          setInput('');
        }
      else{
        setTasks([...tasks, input]);
        setInput('');
    }
    // else{
    //   alert('Please enter a task!');
    // }
  }
}
  const deleteitem = (task) => {
    const updatedTasks = tasks.filter((item) => item!== task);
    setTasks(updatedTasks);
  }
  const startEditing = (index) => {
    setInput(tasks[index]);
    setEditlist(index);
    
  };
  return (
    <div className="container" style={{backgroundColor: '#57C5EE',padding: '100px', height:'750px' , width:'700px', marginTop:'2%', marginBottom:'2%', border:'5px solid black'}}>
           <h1 className="text-center"style={{color:'#1F3E6A', marginBottom:'10%', fontFamily:'revert-layer', fontSize:'60px'}} >To Do App</h1>
  <div class="container-fluid d-flex justify-content-center">
    {/* <form class="d-flex" role="search"> */}
      <input class="form-control me-2" value={input}  type="search" placeholder="Add a Task..." aria-label="Search" onChange={(e)=>setInput(e.target.value)}/>

      <button class="btn btn-light"  onClick={addTask}>
        {editlist ==null ? 'addtask' : 'editlist' } 
      </button>
    {/* </form> */}
  </div>
  <div>
      {tasks.map((task, index) => (
        <div key={index} className='d-flex justify-content-between'>
          <h3 style={{marginTop:'5%' , border:'1px solid White', padding:'2px'}}>{task}</h3>
          <div className='p-3 '>
          <button className="btn btn-danger "   onClick={()=>deleteitem(task)} >Delete</button>
          <button className="btn btn-warning " onClick={()=>startEditing(index)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
</div>
  )
}
export default To_Do_App

  
 
 


