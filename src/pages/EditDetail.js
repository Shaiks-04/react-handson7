import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { studentUpdated } from "../feature/StudentSlice";

function EditDetails(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=useLocation();
    const dataid=data.state.id;
    const stdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid))

    const stdName=stdDetail[0].Name;
    const stdAge=stdDetail[0].Age;
    const stdCourse=stdDetail[0].Course;
    const stdBatch=stdDetail[0].Batch;

    const [Name,setName]=useState(stdName);
    const [Age,setAge]=useState(stdAge);
    const [Course,setCourse]=useState(stdCourse);
    const  [Batch,setBatch]=useState(stdBatch);

    const SubmitHandler=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentUpdated({
                "id":dataid,
                "Name":Name,
                "Age":Age,
                "Course":Course,
                "Batch":Batch
            }));
            navigate('/Student');
        }
    }

    return (
<div>
<h1 style={{textAlign:'center'}}>Edit Student</h1>
<form>
  <div className="box">
    <div className="input-box">
      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
      <span className="sp">NAME</span>
    </div>
    <div className="input-box">
      <input type="number" value={Age} onChange={(e)=>setAge(e.target.value)} />
      <span>AGE</span>
    </div>
  </div>
  <div className="box">
    <div className="input-box">
      <input type="text" value={Course} onChange={(e)=>setCourse(e.target.value)} />
      <span className="sp">COURSE</span>
    </div>
    <div className="input-box">
      <input type="text" value={Batch} onChange={(e)=>setBatch(e.target.value)} />
      <span>BATCH</span>
    </div>
  </div>
  <br />
  <Link to="/Student">
    <button style={{ margin: '30px' }}>Cancel</button>
  </Link>
  <button onClick={SubmitHandler} style={{ margin: '30px' }}>Update</button>
</form>
</div>
)
}

export default EditDetails;