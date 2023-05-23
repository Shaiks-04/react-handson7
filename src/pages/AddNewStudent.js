import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { StudentAdded } from '../feature/StudentSlice';

function AddNewStudent() {
  const navi = useNavigate();
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.student);

  const [Name,setName]=useState("");
  const [age,setAge]=useState("");
  const [course,setCourse]=useState("");
  const [batch,setBatch]=useState("");

  // const handleValues=(e)=>{
  //   setName(e.target.name.value);
  //   setAge(e.target.age.value);
  //   setBatch(e.target.batch.value);
  //   setCourse(e.target.course.value);
  // }

  const handleClick = () => {
    if(Name && age && course && batch){
      dispatch(StudentAdded({
            "id":data.length,
            "Name":Name,
            "Course":course,
            "Batch":batch,
            "Age":age
    }));
    navi('/student');
    }
  }
  return (
<div>
      <form>
        <div className='box'>
          <div className='input-box'>
      <input name='name' type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
      <span className="sp">NAME</span>
                </div>
                <div className="input-box">
      <input name='Age' type='number' placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
      <span>AGE</span>
                </div>
                </div>
                <div className="box">
                <div className="input-box">
      <input name='Course' type='text' placeholder='Enter course' onChange={(e)=>setCourse(e.target.value)} />
      <span className="sp">COURSE</span>
                </div>
                <div className="input-box">
      <input name='Batch' type='text' placeholder='Enter batch' onChange={(e)=>setBatch(e.target.value)} />
      <span>BATCH</span>
                </div>
                </div>
                <br/>
</form>
      <Link to="/Student"><button style={{ margin: '30px' }}>Cancel</button></Link>
      <Link to="/Student"><button onClick={handleClick} style={{ margin: '30px' }}>Submit</button></Link>     
    </div>
  )
}
export default AddNewStudent;