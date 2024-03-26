import React, { useState } from 'react'

function Search() {
     const data = ["apple" , "banana" , "orange", " mango" , "pineapple"]
    const [value , setvalue] = useState("")




  return (
    <>
    <input value={value} onChange={(e)=>setvalue(e.target.value)}  type="text" />
    <ul>
        {
            data.filter((data)=>(data.startsWith(value.toLowerCase())))
            .map((data)=>(
                
                    <li>{data}</li>
               
            ))
        }
         </ul>
    </>
  )
}

export default Search