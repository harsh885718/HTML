import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addnew from './Addnew'
import Home from './Home'
import View from './View'
import Editdata from './Editdata'

function Main() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/addnew' element={<Addnew/>}></Route>
            <Route path='/view/:userid' element={<View/>}></Route>
            <Route path='/edit/:userid' element={<Editdata/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main