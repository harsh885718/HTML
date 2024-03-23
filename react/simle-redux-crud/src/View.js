import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
    const {userid} = useParams()
    const selector = useSelector(s=>s.user)
    
  return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
    </tr>
  </thead>
  <tbody>
    {
        selector.filter(user =>user.id == userid)
        .map((item)=>(
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))
    }
  </tbody>
</table>
    </>
  )
}

export default View