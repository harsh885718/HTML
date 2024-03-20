import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <div>
      <ul>
      <Link to="/user">user</Link>
      <Link to="/admin">admin</Link>
      </ul>
    </div>
    </>

  )
}

export default Main