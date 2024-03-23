import React, { useEffect, useState } from 'react'
import {   Link, useNavigate } from 'react-router-dom'

function Employe() {
 
    const [empData , setEmpdata] = useState ()
    const navigate = useNavigate()

    useEffect (()=>{

        fetch("http://localhost:3001/employe")
        .then((res)=>{ return res.json()})
        .then((data)=>{
            
            setEmpdata(data)
        })
        .catch((err)=>{console.log(err.message)})

    })

    const loadview = (id)=>{

            navigate("/employe/view/" + id)


    }
    const loadedit = (id)=>{

      navigate("/employe/edit/"+id)


}

    const loaddelete = (id)=>{
        if(window.confirm("are you sure"))
        {
            fetch("http://localhost:3001/employe/"+id ,{
                method :"DELETE",
                headers : {"contetn-type" : "application/json"},
                body : JSON.stringify(empData)
                

            })
            .then((res)=>{

                if(res)
                {
                    window.alert("updated successfully");
                    navigate("/")
                }
        })


        }

    }
  return (
    <div>
        <h2 className='m-5'>employee  </h2>
        <Link to={"/employe/add"} className='btn btn-warning m-2'>add new</Link>
   <div className='container'>
   <table className='table'>
      <thead className='table-dark'>

       
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>

        {empData && empData.map((item)=>(

          

            <tr key={item}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
            <button  onClick={()=>{(loadview(item.id))}} className='btn btn-primary me-2'>view</button>
            <button onClick={()=>{(loadedit(item.id))}} className='btn btn-success me-2'>edit</button>
            <button onClick={()=>{(loaddelete(item.id))}} className='btn btn-danger'>delete</button>
            </td>
            </tr>   
            

        ))}
        
      </tbody>
    </table>
   </div>



    </div>
  )
}



export default Employe