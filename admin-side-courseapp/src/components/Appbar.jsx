import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Appbar(){
    let navigate=useNavigate();
    const [userEmail,setUserEmail]=useState(null)
    useEffect(()=>{
 fetch('http://localhost:3000/admin/me',{method:"GET",headers:{
    'Authorization':"Bearer "+ localStorage.getItem("token")
 }}).then((response)=>{response.json().then((data)=>{setUserEmail(data.username)})})
    },[])
    if(userEmail){
       return( <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <h4>Coursera</h4>
    
        </div>
        <div style={{display: "flex"}}>
            <div>
                <button onClick={()=>{
                    window.location='/admin/createcourse'
                }}>Add Course</button>
            </div>
        <div>
        {userEmail}
        </div>
        <div style={{marginRight: 10}}>
            <button onClick={()=>{localStorage.setItem('token',null);
            window.location='/';}}>
                Logout
            </button>
        </div>
        </div>
            
        </div>)
    }
    return(
        <div style={{display:"flex", justifyContent:"space-between", padding:4,background:''}}>
            <h3>Coursera</h3>
            <div style={{display:"flex ",}}>
                <div style={{marginRight:10}}>
            <button onClick={()=>{navigate('/signup')}}>SignUp</button>
            </div>
            <div>
            <button onClick={()=>{navigate('/signin')}}>SignIn</button>
            </div>
        </div>
        </div>
    )
}
export default Appbar;