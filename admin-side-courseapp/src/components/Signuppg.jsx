import { useState } from "react"

function Signuppg(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dataInput={
        username:username,
        password:password
    }
    function signup(){
fetch("http://localhost:3000/admin/signup",{method:"POST", body:JSON.stringify(dataInput),headers: {
    'Content-Type': 'application/json',
  },}).then((response)=>{response.json().then((data)=>{
    alert(data.message)
  })})
    }
    return(
        <div>
            <input type="text" placeholder="Username..." onChange={(event)=>{setUsername(event.target.value)}}/>
            <input type="text" placeholder="Password..." onChange={(event)=>{setPassword(event.target.value)}}/>
            <button onClick={signup}>Register</button>

        </div>
    )
}
export default Signuppg;