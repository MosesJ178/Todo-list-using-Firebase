import React from 'react'
import Todo from './Todo'
function Home() {
  const [username,setusername] = React.useState("");
  React.useEffect(() => {
    // prompt("Enter your Name : ")
    setusername("jack");
  },[]);
  return (
    <div>
    {(username) ? <Todo/> : (<p>Enter your username to continue...</p>)}
    </div>
  )
}

export default Home