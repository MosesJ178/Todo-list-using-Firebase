import React from 'react'
import { addTask, deleteTask, readTask, updateTask } from '../firebase'
function Todo() {
  const [task, setTask] = React.useState("");
  const [data, setData] = React.useState([]);
  const [name, setname] = React.useState("jacky");
  const [updateAdd,setupdateAdd] = React.useState(false);

  const [id,setid] = React.useState("");
  React.useEffect(() => {
    const fdata = readTask(name);
    fdata.then((firebasedata) => setData(firebasedata))
  }, [updateAdd])
  const add = (value) => {
    const result = addTask(value);
  }
  const del = (id) => {
    console.log(id)
    const result = deleteTask({ name: name, id: id });
  }
  const update = () => {
    console.log(id,"=>id")
    const value = {name,id,task};
    updateTask(value);
    setid("");
  }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      { updateAdd ? <button onClick={() => {update(id, task);setupdateAdd(!updateAdd)}}>Update</button> : <button onClick={() => add({ name: name, task: task })}>Add</button> }
      {
        data.map((data,i) => {
          return (
            <div key={i} className='d-flex'>
              <div>
                {data.task}
              </div>
              <div>
                <button onClick={() => {setupdateAdd(!updateAdd);setid(data.id);setTask(data.task)}}>update</button>
                <button onClick={() => del(data.id)}>del</button>
              </div>
            </div>
          )
        })
      }
      {JSON.stringify(data)}
    </div>
  )
}

export default Todo