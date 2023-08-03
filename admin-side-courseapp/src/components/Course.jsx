import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
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
  }, []);
  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) {
      course = courses[i];
    }
  }
  if (!course) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div style={{ display: "flex", marginLeft: "200px" ,height:'300px',width:'300px' }}>
        <div
          style={{
            border: "2px solid black",
            width: "100%",
            height:'100%'
           
          }}
        >
          <img src={course.imgLink} style={{ height: "50%",width:"100%" }} />
          <h2 style={{marginLeft:'10px'}}>Title:{course.title}</h2>
          <h2 style={{marginLeft:'10px'}}>Description:{course.description}</h2>
          <h2 style={{marginLeft:'10px'}}>Price:{course.price}</h2>
        </div>
      </div>
      <br/><br/>

      <UpdatedCard courseId={courseId} courses={courses}/>
    </div>
  );
}

function UpdatedCard(props) {
  const [title, setTitle] = useState("") ;
  const [description, setDescription] = useState("") ;
  const [published, setPublished] = useState(false) ;
  const [price, setPrice] = useState(0) ;
  const [imgLink, setImglink] = useState("") ;
  return (
    <div>
      <label htmlFor="Title">Title:</label>
      <input
        id="Title"
        type="text"
        placeholder="Title..."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        placeholder="Description..."
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <label htmlFor="Price">Price:</label>
      <input
        type="number"
        id="price"
        placeholder="Price..."
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <label htmlFor="ImgLink">Title:</label>
      <input
        id="ImgLink"
        type="text"
        placeholder="img link"
        onChange={(event) => {
          setImglink(event.target.value);
        }}
      />
      <label htmlFor="myDropdown">Published:</label>
      <select
        id="myDropdown"
        value={published}
        onChange={(event) => {
          setPublished(event.target.value);
        }}
      >
        <option value="">Select an option</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>

      <button
        onClick={() => {
          fetch("http://localhost:3000/admin/courses/" + props.courseId, {
            method: "PUT",
            body: JSON.stringify({
              title: title,
              description: description,
              imgLink: imgLink,
              published: true,
              price: price,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
         
          }).then((response) => {
            response.json().then((data) => {
          alert(data.message);
            });
          });
       
          let updatedCourse = {
            id: props.course.id,
            title: title,
            description: description,
            imageLink: imgLink,
            price
        };
          props.setCourses(updatedCourse) }}
      >
        Update Courses
      </button>
    </div>
  );
}
export default Course;
