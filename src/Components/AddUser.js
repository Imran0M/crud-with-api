import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Base from './Base'
import { AppCon } from './AppProvider'

function AddUser() {
  const { user, setUser } = AppCon()
  const history = useHistory()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [age, setAge] = useState('')
  const adding = async () => {
    const newUser = {
      id,
      name,
      dob,
      age
    }
    try {
      const response = await fetch("https://642903155a40b82da4cb3c1b.mockapi.io/students", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      console.log(data)
      setUser([...user, data])
      history.push('/')
    } 
    catch (error) {
    }
  }
  return (
    <Base tittle="Add Student Details">
      <div className="adduser-style container">
        <input
          placeholder="id"
          value={id}
          onChange={(event) => setId(event.target.value)} />
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input placeholder="Dob"
          value={dob}
          onChange={(event) => setDob(event.target.value)} />
        <input placeholder="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <Button className="adduser" onClick={adding} varient="dark">Add</Button>
      </div>
    </Base>
  )
}

export default AddUser