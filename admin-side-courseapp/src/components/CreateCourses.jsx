import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Appcontexxt } from "./SignInpg";
function CreateCourse(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [published,setPublished]=useState(false)
    const [price,setPrice]=useState(0)
    const [imgLink,setImglink]=useState("")
    let navigate=useNavigate();
// const {token}=useContext(Appcontexxt)
    const dataInput={
        title:title,
        description:description,
        published:published,
        price:price,
        imgLink:imgLink
    }
    function createHandler(){
        fetch("http://localhost:3000/admin/courses",{method:"POST",body:JSON.stringify(dataInput),headers: {
            'Content-Type': 'application/json',
'Authorization':"Bearer "+ localStorage.getItem("token")
          },}).then((response)=>{response.json().then((data)=>{alert(data.message)})})
    }

    return(
        <div>
            <label htmlFor="Title">Title:</label>
     <input id="Title" type="text" placeholder="Title..." onChange={(event)=>{setTitle(event.target.value)}}/>
     <label htmlFor="description">Description:</label>
     <input type="text" id="description" placeholder="Description..." onChange={(event)=>{setDescription(event.target.value)}}/>
     <label htmlFor="Price">Price:</label>
     <input type="number" id="price" placeholder="Price..." onChange={(event)=>{setPrice(event.target.value)}}/>
     <label htmlFor="ImgLink">Title:</label>
     <input id="ImgLink" type="text" placeholder="img link" onChange={(event)=>{setImglink(event.target.value)}}/>
     <label htmlFor="myDropdown">Published:</label>
     <select id="myDropdown" value={published} onChange={(event)=>{setPublished(event.target.value)}}>
     <option value="">Select an option</option>
  <option value="true" >True</option>
  <option value="false" >False</option>
</select>
<button onClick={createHandler}>Create Course</button>
<br></br><br></br>
<button onClick={()=>{navigate("/courses")}}>Show courses</button>

        </div>

    )

}
export default CreateCourse;