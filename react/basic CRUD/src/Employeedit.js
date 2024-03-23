import React, { useState,useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function EmpEdit() {

    const [id,idChnage] = useState("")
    const [name,nameChange]  = useState("")
    const [email,emailChange] = useState("")
    const [phone,phoneChange] = useState("")
    const [active,activeChange] = useState(false)

    const {empid} = useParams();
    const navigate = useNavigate()



    useEffect(()=>{
      fetch("http://localhost:3001/employe/"+empid)
      .then((res)=>{ return res.json()})
      .then((data)=>{
        
        
        console.log(data) 

        idChnage(data.id)
        nameChange(data.name)
        emailChange(data.email)
        phoneChange(data.phone)
        activeChange(data.active)




      
      })
      .catch((err)=>{console.log(err.message)})
    },[]

  
    )



    const handleClick = (e)=>{
      e.preventDefault();
     

      const imp = {id , name , email , phone , active}

      fetch("http://localhost:3001/employe/"+empid ,{
        method : "PUT",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(imp)
        
      })
      .then((res)=>{

        if(res)
        {
         alert("edited successfully")
         navigate("/")
         
        }
      })

      
      .catch()




    }

  
  return (
    <div className="container text-center m-5">
    <div className="row d-flex justify-content-center">
      <div className="card">
          <div className="card-title">
              <h3>Edit Employee</h3>
          </div>

      </div>
      <div className="col-lg-6">
        <div className="card-body">
          <form onSubmit={handleClick} className="container text-start m-3">

            <div className="col-12">
              <label className="form-label">Id</label>
              <input value={id} disabled="disabled" className="form-control"></input>
            </div>

            <div className="col-12">
              <label className="form-label">Name</label>
              <input value={name} onChange={(e)=>{nameChange(e.target.value)}} className="form-control"></input>
            </div>

             <div className="col-12">
              <label className="form-label">Email</label>
              <input value={email} onChange={(e)=>{emailChange(e.target.value)}} className="form-control"></input>
            </div>

             <div className="col-12">
              <label className="form-label">Phone</label>
              <input value={phone} onChange={(e)=>{phoneChange(e.target.value)}} className="form-control"></input>
            </div>

             <div className="col-12 mt-2">
              
              <input value={active} onChange={(e)=>{activeChange(e.target.checked)}} type="checkbox" className="form-check-input"></input>{" "}
              <label className="form-label">Is active</label>
            </div>

             <div className="col-12">
            
              <button type="submit" className="btn btn-success me-3">Change</button>
              <Link to="/" className="btn btn-info">Back</Link>

            </div>

                    



          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmpEdit
