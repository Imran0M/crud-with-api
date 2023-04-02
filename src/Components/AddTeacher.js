import React, { useState } from 'react'
import Base from './Base'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AppCon } from './AppProvider'

function AddTeacher() {

  const {teacher , setTeacher}= AppCon()
  const[id , setId]= useState('')
   const [teachername , setTeachername]=useState('')
    const [department, setDepartment]=useState('')
    const [qualification, setQualification]=useState('')
    
 const history= useHistory()
    const addTeacher=()=>{
        const newTeacher={
          id,
            teachername,
            department,
            qualification,
        }
        // console.log(newTeacher.nam)
      setTeacher([...teacher , newTeacher])
      history.push('/teacher/details')
    }
    return (
        <Base tittle="Add Teacher Details">
         
            <div className='adduser-style'>
            <input
          placeholder="id"
          value={id}
          onChange={(event)=>setId(event.target.value)}
          />
            <input placeholder="Teacher Name"
            value={teachername}
            onChange={(event)=>setTeachername(event.target.value)}
            />
            <input placeholder="Teacher Department"
              value={department}
              onChange={(event)=>setDepartment(event.target.value)}/>
            <input placeholder="qualification"
              value={qualification}
              onChange={(event)=>setQualification(event.target.value)}/>
            <Button onClick={addTeacher}>Add</Button>
            </div>
          
        </Base>
    )
}

export default AddTeacher