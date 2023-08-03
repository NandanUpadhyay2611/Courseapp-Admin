import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()

useEffect(()=>{
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setCourses(data.courses);
        });
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  },[])

  return (
    <div>
      <div style={{display:'flex' ,marginLeft:'200px',height:"300px",width:'300px'}}>
      {courses.map((value) => (
        <div key={value.id} style={{ border:'2px solid black',width:'300px' ,height:"300px"}}>
          <img src={value.imgLink} style={{ height: "50%",width:"100%" }} />
          <h2 style={{marginLeft:'10px'}}>Title:{value.title}</h2>
          <h2 style={{marginLeft:'10px'}}>Description:{value.description}</h2>
          <h2 style={{marginLeft:'10px'}}>Price:{value.price}</h2>
          <button onClick={()=>{
            navigate('/courses/'+ value.id)
          }}>Edit</button>
        </div>
      ))}
      </div>
    </div>
  );}


export default GetCourses;
