import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Employeview() {
    const [empData , setEmpData] = useState("")

    const {empid} = useParams() ;
    //console.log(empid)

    useEffect(()=>{

      fetch("http://localhost:3001/employe/"+ empid)
      .then((res)=>{return res.json()})
      .then((data)=>{
          // console.log(data)
       setEmpData(data)

      })
      .catch((err)=>{
        console.log(err.message)

      })
    })

    

  return (
    <div>

     
            <h2>id:{empData.id}</h2>
            <h2>name:{empData.name}</h2>
            <h2>email:{empData.email}</h2>
            <h2>phone: {empData.phone}</h2>
            <h2>Active user: {(empData.active) ? "YES" : "NO"}</h2>
        
    </div>
  )
}

export default Employeview    