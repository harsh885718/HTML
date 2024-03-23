import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpCreate() {

        const [id,idChnage] = useState("")
        const [name,nameChange]  = useState("")
        const [email,emailChange] = useState("")
        const [phone,phoneChange] = useState("")
        const [active,activeChange] = useState(false)

        const navigate = useNavigate();

        // const [empdata,setEmpdata] =  useState("")

        const handleClick = (e)=>{

            e.preventDefault();

            console.log({id,name,email,phone,active})

           const empData = {id,name,email,phone,active}


            // console.log(e)

            fetch("http://localhost:3001/employe",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(empData)
            })
            .then((res)=>{
                // console.log(res.json())
                // return res.json();

                if(res)
                {
                    alert("Saved Successfully..!");
                    navigate('/')

                }


            })
            .then((data)=>{

                // console.log(data)
                idChnage(data.id)
                nameChange(data.name)
                emailChange(data.email)
                phoneChange(data.phone)
                activeChange(data.active)

                
               
            })
             .catch((err)=>{
                // console.log(err.message)
             })
        
            
        }


  return (
    <div className="container text-center m-5">
      <div className="row d-flex justify-content-center">
        < div className="card">
            <div className="card-title">
                <h3>Add Employee</h3>
            </div>

        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <form onSubmit={handleClick} className="container text-start m-3">

              <div className="col-12">
                <label className="form-label">Id</label>
                <input disabled="disabled" className="form-control"></input>
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
              
                <button type="submit" className="btn btn-success me-3">Save</button>
                <Link to="/" className="btn btn-info">Back</Link>

              </div>

                      



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpCreate;
