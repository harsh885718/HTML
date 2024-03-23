import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editdata } from './Usereduser'

function Editdata() {
    const {userid} = useParams()
    const userdata = useSelector(s=>s.user)
    const data = userdata.filter((data)=> data.id == userid)
    const [id , setid] = useState(data[0].id)
    const [name , setname] = useState(data[0].name)
    const [email, setemail] = useState(data[0].email)
    const [mobile , setmobile] = useState(data[0].mobile)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handlesubmit = (e)=>
    {
        e.preventDefault()
        dispatch(editdata({id ,name ,email, mobile}))
        navigate("/")
    }

  return (
    <>
    <div className="container mt-5">
    <form onSubmit={handlesubmit}>

    <div className="form-group my-3">
    <label >id</label>
    <input value={id} onChange={(e)=>setid(e.target.value)} disabled type="text" className="form-control" placeholder="Enter name"/>
  </div>

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

export default Editdata