import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from './Usereduser'
import { useNavigate } from 'react-router-dom'

function Addnew() {

    const [name , setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile , setmobile] = useState("")
    const dispatch = useDispatch()
    const selector = useSelector(s=>s.user)
    const navigate = useNavigate()
    

    const handlesubmit = (e)=>{

        e.preventDefault();
        dispatch(adddata({id:selector[selector.length-1].id+1,name,email ,mobile}))
        navigate("/")


    }


  return (
    <>
    <div className="container mt-5">
    <form onSubmit={handlesubmit}>

    <div className="form-group my-3">
    <label >name</label>
    <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control" placeholder="Enter name"/>
  </div>
  <div className="form-group my-3">
    <label >Email address</label>
    <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" placeholder="Enter email"/>
  </div>
  <div className="form-group my-3">
    <label>mobile</label>
    <input value={mobile} onChange={(e)=>setmobile(e.target.value)} type="text" className="form-control" placeholder="mobile"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>

    </>
  )
}

export default Addnew