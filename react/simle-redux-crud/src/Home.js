import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletedata } from './Usereduser'

function Home() {

   const usedata =  useSelector(state => state.user)
   const dispatch = useDispatch() 
   
   const handledelete = (id)=>{
    dispatch(deletedata({id : id}))
   }


  return (




    <>
        

    <div className="container mt-5">
    <Link to="/addnew" className="btn btn-primary mx-auto my-3">Add User</Link>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>

    {
        usedata.map((item)=>(
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>
              <Link to={`/view/${item.id}`} ro="true"  className='btn btn-primary'>View</Link>
              <Link  to={`/edit/${item.id}`} className='btn btn-secondary mx-2'>Edit</Link>
              <button onClick={()=>{handledelete(item.id)}} className='btn btn-danger'>Delete</button>
            </td>
          </tr>

        ))
    }

  </tbody>
</table>
</div>
    </>
  )
}

export default Home