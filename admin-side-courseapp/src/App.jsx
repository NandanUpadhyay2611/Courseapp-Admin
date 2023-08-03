import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Signuppg from './components/Signuppg'
import SignInpg from './components/SignInpg'
import CreateCourse from './components/CreateCourses'
import Getcourses from './components/Getcourses'
import Appbar from './components/Appbar'
import Course from './components/Course'
import Intro from './components/Intro'

function App() {


  return (
    <div  style={{width: "100vw",
    height: "100vh",
    backgroundColor: "#eeeeee"}}>
      <Router>
        <Appbar/>
        <Routes>
          {/* <Route path='/' element={<Landing/>}/> */}
          <Route path='/signup' element={<Signuppg/>}/>
          <Route path='/signin' element={<SignInpg/>}/>
          <Route path='/welcome' element={<Intro/>}/>
          <Route path='/admin/createcourse' element={<CreateCourse/>}/>
          <Route path='/courses' element={<Getcourses/>}/>
          <Route path='/courses/:courseId' element={<Course/>}/>
        </Routes>
      </Router>
{/* <Signuppg/>

<SignInpg/>
<CreateCourse/>
<Getcourses/> */}
</div>
  )
}

export default App;
