import React, {useState} from 'react'


function Dailies(){


  const [tasks, setTasks] = useState();
  const [newTask, setNewTask] = useState("");

  function inputChange(){
    setNewTask(event.target.value)
  }

  function addTask(){

  }

  function deleteTask(){

  }

  return(
    <div className='body'>
      <div className='main'>
        <div className="back-color"><p className='dailies-text'>Your Dailies...</p></div>
      </div>
      <div className='input-div'>
        <div className='back-color-input'>
          <input className='input-elem' type="text" placeholder='What I Do Today...' value={newTask} onChange={inputChange}/>
          <button className='submit-btn' onClick={addTask}>Submit</button>
        </div>
      </div>
    </div>
  );

}

export default Dailies