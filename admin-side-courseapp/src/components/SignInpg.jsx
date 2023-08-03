import { createContext, useState } from "react"
// export const Appcontexxt=createContext();
function SignInpg(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    // const [token,setToken]=useState(" ")
    // const dataInput={
    //     username:username,
    //     password:password
    // }
    function signin(){
fetch("http://localhost:3000/admin/login",{method:"POST",headers: {
    'Content-Type': 'application/json',
    'username':username,
    'password':password
  },}).then((response)=>{response.json().then((data)=>{
   localStorage.setItem("token",data.tokena)
   if(data.message==='Logged in successfully'){
   window.location='/welcome'
   }

  })})
    }
    return(
        <div>
            {/* <Appcontexxt.Provider value={{token,setToken}}> */}
            <input type="text" placeholder="Username..." onChange={(event)=>{setUsername(event.target.value)}}/>
            <input type="text" placeholder="Password..." onChange={(event)=>{setPassword(event.target.value)}}/>
            <button onClick={signin}>Login</button>
            {/* </Appcontexxt.Provider> */}
        </div>
    )
}
export default SignInpg;